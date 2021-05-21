(function() {
    globalThis.Switch = function Switch(values, cases) {
        if (typeof values !== "object" || !values) throw new Error("Values must be an object.");

        if (typeof cases !== "object" || !cases) throw new Error("Cases must be an object.");

        const v = new Map(Object.entries(values));

        const c = new Map(Object.entries(cases).filter(([k]) => k !== "default"));

        if (Object.keys(cases).some((k) => typeof k !== "string")) throw new Error("Cases should be represented by strings.");

        if (Object.values(cases).some((v) => typeof v !== "function")) throw new Error("Cases should be functions.");

        if (Object.keys(values).some((k) => typeof k !== "string")) throw new Error("Value names can only be strings.");

        function parse(c) {
            const tokens = c.split(/\s+/);

            const constraints = [];

            const constraint = {
                name: "",
                comparator: "",
                value: 0,
            };

            let isExpecting = "name";

            tokens.forEach((token) => {
                if (isExpecting === "name") {
                    if (!v.has(token)) throw new Error("Unknown value identifier.");

                    constraint.name = token;

                    return void(isExpecting = "comparator");
                }

                if (isExpecting === "comparator") {
                    if (![">", "<", ">=", "<=", "=", "!="].includes(token)) throw new Error("Unknown comparator.");

                    constraint.comparator = token;

                    return void(isExpecting = "value");
                }

                if (isExpecting === "value") {
                    if (!/^-?\d+\.?\d*$/.test(token)) throw new Error("Invalid number.");

                    constraint.value = parseFloat(token);

                    constraints.push({
                        ...constraint
                    });

                    constraint.name = "";
                    constraint.comparator = "";
                    constraint.value = 0;

                    return void(isExpecting = "and");
                }

                if (isExpecting === "and") {
                    if (token !== "&") throw new Error("Expected an '&'.");

                    return void(isExpecting = "name");
                }
            });

            if (isExpecting === "name") throw new Error("Expected a value identifier.");

            if (isExpecting === "comparator") throw new Error("Expected a comparator.");

            if (isExpecting === "value") throw new Error("Expected a number.");

            return constraints;
        }

        const comparators = {
            [">"]: (a, b) => a > b,
            ["<"]: (a, b) => a < b,
            [">="]: (a, b) => a >= b,
            ["<="]: (a, b) => a <= b,
            ["="]: (a, b) => a === b,
            ["!="]: (a, b) => a !== b,
        }

        for (const [k, p] of [...c.entries()]) {
            const constraints = parse(k);

            const results = constraints.map(({
                name,
                comparator,
                value
            }) => {
                const t = v.get(name);

                return comparators[comparator](t, value);
            });

            if (results.every((r) => r)) return p();
        }

        return typeof cases["default"] === "function" ? cases["default"]() : undefined;
    }
})();
