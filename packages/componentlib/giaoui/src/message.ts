import Message from "./components/Message/Message.vue"
import _Vue from "vue"

interface IMessage {
  type: "success" | "info" | "warning" | "danger",
  text: string
}

export default {
  install(Vue: typeof _Vue) {
    Vue.prototype.$message = ({type = "success", text = ""}: IMessage) => {
      createMessage(Vue, {type, text})
    }
  }
}

function createMessage(Vue: typeof _Vue, propsData: IMessage) {
  const Constructor = Vue.extend(Message)
  const msg = new Constructor({propsData})
  msg.$mount()
  document.body.appendChild(msg.$el)
  return msg
}

