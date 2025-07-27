
export default function useRemoveTodo(todosRef) {
    const remove = (todo) => {
        const index = todosRef.value.indexOf(todo)
        todosRef.value.splice(index, 1);
    }
    const removeCompleted = () => {
        todosRef.value = todosRef.value.filter((it) => !it.completed)//给总列表重新赋值即可
    }
    return {
        remove,
        removeCompleted
    }
}