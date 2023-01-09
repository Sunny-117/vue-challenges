import {createApp,h} from 'vue'
import Dialog from './Dialog.vue';
export const openDialog = (options) => {
  let {visible,title,content,closeOnClickOverlay,confirmFn} = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const app = createApp({render(){
    return h(Dialog,
      {visible,closeOnClickOverlay,confirmFn,
        'onUpdate:visible':(newVisible)=>{
            if (newVisible === false){
              // @ts-ignore
              app.unmount(div)
              div.remove()
            }
        }
      },
      {title,content})
    }})
  app.mount(div)
}