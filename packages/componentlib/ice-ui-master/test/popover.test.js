const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.be.ok
  })
  it('可以设置 position.', (done) => {
    Vue.component('g-popover',Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <g-popover position="bottom" ref="popoverComponent">
      <template slot="content">这是弹出内容</template>
      <button>按钮</button>
    </g-popover>
    `
    const vm = new Vue().$mount(div)
    vm.$el.querySelector('button').click()
    vm.$nextTick(()=>{
      const {contentWrapper} = vm.$refs.popoverComponent.$refs
      expect(contentWrapper.classList.contains('position-bottom')).to.be.true
      done()
    })
  })

  it('可以设置 trigger' ,(done)=>{
    Vue.component('g-popover',Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <g-popover trigger="hover" ref="popoverComponent">
      <template slot="content">这是弹出内容</template>
      <button>按钮</button>
    </g-popover>
    `
    const vm = new Vue().$mount(div)
    vm.$nextTick(()=>{
      const event = new Event('mouseenter')
      vm.$refs.popoverComponent.$el.dispatchEvent(event) //vm.$el.dispatchEvent(event)  mouseover事件不冒泡，需要准确触发到 popover组件元素
      vm.$nextTick(()=>{
        const {contentWrapper} = vm.$refs.popoverComponent.$refs
        expect(contentWrapper).to.exist
        done()
      })
    })
  })
})