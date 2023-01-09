<template>
  <div>
    <div class="container">
      <Tab :active="user" :value.sync="user" @tab-change="onTabChange">
        <TabPanel label="this is a long tab" value="user">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
          ratione?
        </TabPanel>
        <TabPanel label="short tab" value="role">Lorem ipsum dolor sit amet.</TabPanel>
        <TabPanel label="this is a huge long long tab " value="config">Lorem ipsum dolor sit amet, consectetur
          adipisicing
        </TabPanel>
      </Tab>
    </div>
    <div class="container">
      <Tab
        :active="type"
        :height="4"
        :value.sync="type"
        noBar
        onlyHeader
      >
        <TabPanel label="支出" value="-"/>
        <TabPanel label="收入" value="+"/>
      </Tab>
    </div>
  </div>
</template>

<script>
	import Tab from "../components/Tab/Tab"
	import TabPanel from "../components/Tab/TabPanel"

	export default {
		name: "Tabs",
		components: {Tab, TabPanel},
		methods: {
			onTabChange(index) {
				console.log("tab changes: ", index)
			}
		},
		data() {
			return {
				type: "-",
				user: "user"
			}
		},
		updated() {
			console.log(this.type)
		}
	}
</script>

<style scoped>
  .container {
    max-width: 800px;
    height: 10vh;
    margin: 30px auto;
    border-radius: 4px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
    padding: 15px;
  }
</style>
