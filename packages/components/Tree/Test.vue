<template>
    <div>
        <Tree :data="data" @setShow="setShow"></Tree>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Tree from './Tree.vue'
let data = ref([])
let recursionSetShow = (origin, id) => {
    origin.forEach(item => {
        if (item.value === id) {
            item.show = !item.show
        }
        if (item.children) {
            recursionSetShow(item.children, id)
        }
    })
}
let setShow = ({ value }) => {
    recursionSetShow(data.value, value)
}
let recursionAddShow = (data) => {
    return data.map(ele => {
        ele.show = false;
        if (ele.children && ele.children.length) {
            recursionAddShow(ele.children)
        }
        return ele
    });
}
fetch('/data.json').then(res => res.json()).then(res => {
    data.value = recursionAddShow(res);
    console.log(data.value)
})
</script>
