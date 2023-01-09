<template>
<svg>
  <use :xlink:href="icon"></use>
</svg>
</template>

<script lang="ts">
export default {
  props:{
    icon: String
  }
}
</script>
