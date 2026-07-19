export function debug(...args: unknown[]) {
    if (import.meta.env.DEV) {
        console.log(...args);
    }
}