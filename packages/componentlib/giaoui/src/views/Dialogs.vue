<template>
  <div>
    <Button @click="visible = !visible" type="primary">打开Dialog</Button>
    <Dialog
      :is-visible.sync="visible"
    >
      <span>这是一段信息</span>
    </Dialog>
  </div>
</template>

<script>
	import Dialog from "../components/Dialog/Dialog.vue"
	import Button from "../components/Button/Button.vue"

	export default {
		name: "Dialogs",
		components: {Dialog, Button},
		data() {
			return {
				visible: false
			}
		}
	}
</script>

<style scoped>

</style>
