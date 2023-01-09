import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Button from './components/doc/ButtonDemo.vue'
import Dialog from './components/doc/DialogDemo.vue'
import Switch from './components/doc/SwitchDemo.vue'
import Tabs from './components/doc/TabsDemo.vue'
import Intro from './components/doc/Intro.vue'
import Install from './components/doc/Install.vue'
import GetStart from './components/doc/GetStart.vue'
const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes:[
    {path:'/',component:Home},
    {path:'/doc',component:Doc,children:[
        {path:'',redirect:'/doc/intro'},
        {path:'/doc/intro',component:Intro},
        {path:'/doc/install',component:Install},
        {path:'/doc/getStart',component:GetStart},
        {path:'/doc/button',component:Button},
        {path:'/doc/dialog',component:Dialog},
        {path:'/doc/switch',component:Switch},
        {path:'/doc/Tabs',component:Tabs}
      ]}
  ]
})