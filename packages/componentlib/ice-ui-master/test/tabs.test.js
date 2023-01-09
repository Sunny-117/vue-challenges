const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('存在', () => {
    expect(Tabs).to.exist
  })
  it('接收 selected 属性', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <g-tabs selected="third">
      <g-tabs-head>
        <g-tabs-item name="first">周一</g-tabs-item>
        <g-tabs-item name="second">周二</g-tabs-item>
        <g-tabs-item name="third">周三</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="first">周一相关资讯</g-tabs-pane>
        <g-tabs-pane name="second">周二相关资讯</g-tabs-pane>
        <g-tabs-pane name="third">周三相关资讯</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
    `
    const vm = new Vue({
      el:div
    })
    vm.$nextTick(()=>{
      let x=vm.$el.querySelector(`.tabs-item[date-name="third"]`)
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })
  it('可以接收 direction prop',()=>{})
})