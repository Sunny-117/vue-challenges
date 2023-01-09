<template>
  <div class="container1">
    <Buttons/>
  </div>
</template>

<script>
	import Buttons from "../../../src/views/Buttons"

	export default {
		name: "button-demo",
		components: {Buttons}
	}
</script>

<style scoped>
  .container1 {
    max-width: 800px;
    margin: 30px auto;
    border-radius: 4px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
    padding: 15px;
  }
</style>
