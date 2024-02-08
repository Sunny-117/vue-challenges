# todos思路

## 新增任务

> 获取和存储数据

localStorage

获取数据：`localStorage.getItem`

存储数据：`localStorage.setItem`

> 数据具有响应式

引入ref，初始值：获取数据，得到最初的值。`ref(todoStorage.fetch());`

如果todos变化，自动监控并且存储数据：`watchEffect(()=>{})`

> 添加任务

1. 数据

先获取任务数据的初始值

双向数据绑定

2. 方法`addTodo`:

细节处理：有新增的数据就去除空格，没有的话就啥也不做。

生成一个任务对象，加入到任务列表中。任务列表可以通过函数参数传递得到

最后清空文本框





## 任务筛选

列表展示：全部｜已完成｜未完成。-------   哈希

逻辑：hash--->筛选方式-->筛选列表

### Hash------->筛选方式

和新增道理类似，都需要拿到所有任务，拿到之后进行筛选（所以需要传递参数`todosRef`）

可见的`visibilityRef`初始化为all

在两个生命周期钩子函数需要传递一个函数，监听`hashchange`事件

查看hash：`location.hash`。不想得到#：`const hash = location.hash.replace(/#\/?/, "");`

有效hash：` ['all', 'active', 'completed']`

无效hash：空也算无效

有效：`visibilityRef`设置成`hash`

无效：hash设置成空，`visibilityRef`默认为all



界面上：按钮的样式class动态绑定



### 筛选方式----> 筛选列表

筛选的辅助函数：`filter`,参数：`todos`（任务列表），`visibility`

筛选列表是由筛选方式和`todosRef`决定的-----计算属性

通过计算得到筛选过后的列表`filteredTodosRef`，在页面上展示出来

`checkbox`的改变会影响completed-----`v-modal="todo.completed"`

点击完成的时候，应用类样式`completed`

已经打通了，所以也完成了筛选



- 剩余未完成的数量  xxx items left

- item要不要加s. 可以用三木运算符

- clear completed要不要显示



## 修改任务

双击则可以修改，失去焦点或者回车都修改完成

修改的时候按下了esc，取消修改

全部完成和全部未完成

修改的样式：li上加上类名`editing`

由于修改功能里具有`全部完成`的功能，所以也需要参数`todosRef`

li上是否加editing类名取决于todo是否和editingTodoRef相等



什么时候进入修改状态：label被双击之后。左键双击：`@dblclick`同时，input文本框双向绑定todo.title

- 进入修改状态:`editTodo`

- 完成修改--失去焦点或者按下回车`doneEdit`

- 取消求改 `cancelEdit`

`editingTodoRef.value = null;`

`todo.title = 之前的值`

- 全部完成和全部不完成

方案1:`setAllCompleted`

方案2:`allDoneRef` 计算属性

双向绑定`v-model="allDoneRef"`

```js
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
```

## 删除功能

- 修改的时候全部删除的话就删除. 在useEditTodo.js里面做

- `useRemoveTodo`



当没有任何任务的时候，footer和main不显示

v-show



**功能点高度聚合，可维护性高**