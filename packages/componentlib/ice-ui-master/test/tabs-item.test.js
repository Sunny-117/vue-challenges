const expect = chai.expect
import Vue from 'vue'
import TabsItem from '../src/tabs-item'
import Tabs from '../src/tabs'

Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs',Tabs)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem',()=>{
  it('存在',()=>{
    expect(TabsItem).to.exist
  })
  it('接收 name 属性',()=>{
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      inject:{
        eventBus:{
          from:'eventBus',
          default(){
            return new Vue()
          }
        }
      },
      propsData:{
        name:'xxx'
      }
    }).$mount()
    expect(vm.$el.getAttribute('date-name')).to.equal('xxx')
  })
  it('接收 disabled 属性',()=>{
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      inject:{  // 为解决  [Vue warn]: Injection "eventBus" not found
        eventBus:{
          from:'eventBus',
          default(){
            return new Vue()
          }
        }
      },
      propsData:{
        disabled:true,
        name:'hello'
      }
    }).$mount()
    expect(vm.$el.classList.contains('disabled')).to.be.true
    const callback = sinon.fake()
    vm.$on('click',callback)
    vm.$el.click()
    expect(callback).to.have.been.not.been.called
  })
})