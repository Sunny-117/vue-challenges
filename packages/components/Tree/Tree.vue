<template>
  <ul :style="{ display: show ? 'block' : 'none' }">
    <div v-for="item in data" @click.stop="setShow(item)">
      <p>{{ item.value }}</p>
      <!-- 组件递归 -->
      <template v-if="item.children">
        <Tree @setShow="setShow" :data="item.children" :show="item.show" />
      </template>
    </div>
  </ul>
</template>

<script setup>
let prop = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  show: {
    type: Boolean,
    default: true // 第一层没加属性show，所以默认时true
  }
})
let emit = defineEmits(['setShow'])
let setShow = (data) => {
  emit('setShow', data)
}

</script>
