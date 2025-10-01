import { customRef, ref } from "vue";

export function debounceRef<T>(value: T, delay = 1000) {
    let timer: ReturnType<typeof setTimeout>;
    return customRef((track, trigger) => {
        return {
            get() {
                // 依赖收集
                track()
                return value;
            },
            set(newValue) {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    value = newValue;
                    trigger()
                }, delay);
            }
        }
    })
}