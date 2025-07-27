import { ref, onUnmounted, onMounted, computed } from 'vue'
import { filter } from '../util/todoStorage'
const validHash = ['all', 'active', 'completed'];
export default function useFilter(todosRef) {
    const visibilityRef = ref('all');
    const onHashChange = () => {
        // console.log('change')
        // 读取hash
        // console.log(location.hash)//  不希望得到#
        const hash = location.hash.replace(/#\/?/, "");
        // 通过hash值改变visibilityRef
        // hash可能无效---无效认为是all  就去掉hash

        if (validHash.includes(hash)) {
            // console.log('有效')
            visibilityRef.value = hash;
        } else {
            // console.log('无效')
            location.hash = '';
            visibilityRef.value = 'all'
        }
    }
    // 组件挂在完成的生命周期钩子函数
    onMounted(() => {
        window.addEventListener('hashchange', onHashChange)
    })
    // 组件销毁过后的生命周期钩子函数
    onUnmounted(() => {
        window.removeEventListener("hashchange", onHashChange)
    })
    const filteredTodosRef = computed(() => {
        return filter(todosRef.value, visibilityRef.value)//筛选过后的列表
    })
    const remainingRef = computed(() => {
        return filter(todosRef.value, 'active').length;
    })
    const completedRef = computed(() => {
        return filter(todosRef.value, 'completed').length;
    })
    return {
        //由于生命周期函数已经生效，所以只需要返回外面需要用的
        visibilityRef,
        filteredTodosRef,
        remainingRef,
        completedRef
    }
}