<template>
  <div class="wrapper ice-toast" :class="toastClasses">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
    </div>
  </div>
</template>
<script>
// 构造组件的选项
export default {
  name: 'IceToast',
  props:{
    autoClose:{
      type:[Boolean,Number],
      default: 5,
      validator(value) {
        return value === false || typeof value === 'number';
      }
    },
    closeButton:{
      type:Object,
      default(){
        return{
          text:'关闭',callback:undefined
        }
      }
    },
    enableHtml:{
      type:Boolean,
      default:false
    },
    position:{
      type:String,
      default:'top',
      validator(value){
        return ['top','middle','bottom'].indexOf(value) >= 0
      }
    }
  },
  mounted() {
    this.updateStyles()
    this.execAutoClose()
  },
  computed:{
    toastClasses(){
      return{
        [`position-${this.position}`]:true
      }
    }
  },
  methods:{
    updateStyles(){  // 解决父元素设置了 min-height 之后，子元素 height:100% 没作用的问题
      this.$nextTick(()=>{
        this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
      })
    },
    execAutoClose(){
      if(this.autoClose){
        setTimeout(()=>{
          this.close()
        },this.autoClose * 1000)
      }
    },
    close(){
      this.$el.remove()
      this.$emit('close')
      this.$destroy()
    },
    onClickClose(){
      this.close()
      if(this.closeButton && typeof this.closeButton.callback === 'function'){
        this.closeButton.callback(this)  // this === toast 实例 |  将toast实例传给callback，callback里就可调用toast里的方法
      }
    },
    log(){
      console.log('回调执行')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "helper";
@keyframes slide-up {
  0%{opacity: 0;transform:translateY(100%)}
  100%{opacity: 1;transform: translateY(0%)}
}
@keyframes slide-down {
  0%{opacity: 0;transform:translateY(-100%)}
  100%{opacity: 1;transform: translateY(0%)}
}
@keyframes fade-in {
  0%{opacity: 0;}
  100%{opacity: 1;}
}
// wrapper 负责居中定位， toast 负责动画
.wrapper{
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  $animation-duration:300ms;
  &.position-top{
    top: 0;
    .toast{
      animation: slide-down $animation-duration;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
  &.position-middle{
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .toast{
      animation: fade-in $animation-duration;
    }
  }
  &.position-bottom{
    bottom: 0;
    .toast{
      animation: slide-up $animation-duration;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
}
.toast {
  font-size: $font-size;color: #fff;min-height: $toast-min-height;line-height: 1.8;
  padding: 0 16px;
  display: flex;align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  .message{
    padding: 8px 0;
  }
  .close{
    cursor: pointer;
    padding-left: 16px;
    flex-shrink: 0;
  }
  .line{
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
}
</style>