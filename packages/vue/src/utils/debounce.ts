export function debounce<T extends (...args: any[]) => any>(func: T, time: number) {
    let timeout: ReturnType<typeof setTimeout>;
    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, time);
    };
}