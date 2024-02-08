import { ref } from 'vue'
import { generateId } from '../util/todoStorage'
export default function useNewTodo(todosRef) {
    const newTodoRef = ref("")
    const addTodo = () => {
        //新增一个任务
        // console.log(newTodoRef.value)//这里是Ref,需要value  看到ref就写value
        const value = newTodoRef.value && newTodoRef.value.trim();
        if (!value) {
            return;
        }
        // 生成一个任务对象，加入到任务列表中
        // 1. 加入到任务列表中
        const todo = {
            title: value,
            id: generateId(),//怕title重复，所以加上id
            completed: false,
        }
        // console.log(todo)
        // 2. 加入到任务列表中?这里任务列表拿不到，在mixin就很麻烦，但是在composition api就很简单，函数传参数即可
        todosRef.value.push(todo)
        newTodoRef.value = ""//清空文本框
    }
    return {
        newTodoRef,
        addTodo
    }
}