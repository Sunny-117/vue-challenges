import { ref, computed } from 'vue'
export default function useEditTodo(todosRef) {
    const editingTodoRef = ref(null);//正在修改的todo
    let originTitle = null;
    const editTodo = (todo) => {
        originTitle = todo.title;
        editingTodoRef.value = todo;
    }
    const doneEdit = (todo) => {
        editingTodoRef.value = null;
        const title = todo.title.trim()
        if (title) {//去除收尾空格
            todo.title = title;
        } else {
            // 删除
            const index = todosRef.value.indexOf(todo)//找到这个下标
            todosRef.value.splice(index, 1)
        }
    }
    const cancelEdit = (todo) => {
        editingTodoRef.value = null;
        // 把这个todo恢复到之前的样子
        // todo.title = 之前的值
        // 之前的值从哪来？提前保存一个变量
        todo.title = originTitle;
    }
    // const setAllCompleted = (completed) => {
    //     todosRef.value.forEach((todo) => {
    //         todo.completed = completed;
    //     })
    // }
    const allDoneRef = computed({
        get() {
            //全部完成就是true,反之false
            return todosRef.value.filter(it => !it.completed).length === 0;//所有未完成任务的数量是不是等于0
        },
        set(checked) {
            todosRef.value.forEach(todo => {
                todo.completed = checked;
            });
        }
    })
    return {
        editingTodoRef,
        editTodo,
        doneEdit,
        cancelEdit,
        allDoneRef
    }

}