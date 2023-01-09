<template>
  <div class="container">
    <Tooltip
      content="提示文字"
      placement="left"
    >
      <Button>左 - left</Button>
    </Tooltip>
    <Tooltip
      content="提示文字"
      placement="top"
    >
      <Button>上 - top</Button>
    </Tooltip>
    <Tooltip
      content="提示文字"
      placement="bottom"
    >
      <Button>下 - bottom</Button>
    </Tooltip>
    <Tooltip
      content="提示文字"
      placement="right"
    >
      <Button>右 - right</Button>
    </Tooltip>
  </div>
</template>

<script>
	import Tooltip from "../components/Tooltip/Tooltip"
	import Button from "../components/Button/Button"

	export default {
		name: "Tooltips",
		components: {Button, Tooltip}
	}
</script>

<style scoped>
  .container {
    max-width: 400px;
    margin: 30px auto;
    border-radius: 4px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
