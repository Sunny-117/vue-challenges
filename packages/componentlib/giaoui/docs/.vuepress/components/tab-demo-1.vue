<template>
  <div class="container">
    <Tab :active="user" :height="3" :value.sync="user" @tab-change="onTabChange" no-bar>
      <TabPanel label="this is a long tab" value="user">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
        ratione?
      </TabPanel>
      <TabPanel label="short tab" value="role">Lorem ipsum dolor sit amet.</TabPanel>
      <TabPanel label="this is a huge long long tab " value="config">Lorem ipsum dolor sit amet, consectetur
        adipisicing
      </TabPanel>
    </Tab>
  </div>
</template>

<script>
	import Tab from "../../../src/components/Tab/Tab"
	import TabPanel from "../../../src/components/Tab/TabPanel"

	export default {
		name: "tab-demo-1",
		components: {Tab, TabPanel},
		data() {
			return {
				user: "user"
			}
		},
		methods: {
			onTabChange(val) {
				console.log(val)
			}
		}
	}
</script>

<style scoped>
  .container {
    max-width: 800px;
    margin: 30px auto;
    border-radius: 4px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
    padding: 15px;
  }
</style>
