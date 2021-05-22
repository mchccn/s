export default function Switch(values: {
    [name: string]: number;
}, cases: {
    [c: string]: () => void | Promise<void>;
}): void | Promise<void>;
