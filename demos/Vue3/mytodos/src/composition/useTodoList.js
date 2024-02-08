import { ref, watchEffect } from "vue";
import * as todoStorage from "../util/todoStorage"
export default function useTodoList() {
    const todosRef = ref(todoStorage.fetch());
    window.todosRef = todosRef;//测试：todosRef.value.push()
    watchEffect(() => { //可以监控todos的变化，自动保存到localStorage
        todoStorage.save(todosRef.value)
    })
    return {
        todosRef
    }
}