<template>
  <div class="container">
    <Dialogs/>
  </div>
</template>

<script>
	import Dialogs from "../../../src/views/Dialogs"

	export default {
		name: "dialog-demo",
		components: {Dialogs}
	}
</script>

<style scoped>
  .container {
    max-width: 800px;
    margin: 30px auto;
    border-radius: 4px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
