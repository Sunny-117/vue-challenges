import { computed, ref, watch } from "vue";


export function useOne() {
    const one = ref(1);
    const handleOne = () => {
        return one.value + 1;
    };
    watch(one, () => { });
    const plusOne = computed(() => one.value + 1);
    return {
        one,
    };
}