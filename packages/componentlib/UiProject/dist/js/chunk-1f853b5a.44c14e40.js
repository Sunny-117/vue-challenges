(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f853b5a"],{"282c":function(t,a,e){},"2f93":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"panel"},[e("h3",[t._v(t._s(this.title))]),e("p",[t._v(t._s(this.subtitle))]),e("div",{staticClass:"demoblock"},[e("div",{staticClass:"source"},[t._t("showarea")],2),e("div",{ref:"ayheight",staticClass:"meta",style:{height:t.ToBlockCodeheight+"px"},attrs:{id:"codeblock"}},[e("div",{staticClass:"description"},[e("div",[e("p",[t._t("desc")],2)])]),e("div",{staticClass:"highlight"},[e("div",{staticClass:"codearea"},[e("pre",{directives:[{name:"highlight",rawName:"v-highlight",value:t.codes,expression:"codes"}]},[e("code")])])])]),e("div",{staticClass:"demo-block-control",on:{click:t.blockControl}},[e("i",{staticClass:"iconfont",class:[t.isClose?"icon-downarrow":"icon-uparrow"]}),t.isClose?e("span",[t._v("显示代码")]):e("span",[t._v("隐藏代码")])])])])},o=[],s=(e("7134"),{data:function(){return{isClose:!1,BlockCodeheight:""}},props:{title:{type:String},subtitle:{type:String},des:{type:String},ctname:{type:String},attributes:{type:Array},codes:{type:String}},computed:{ToBlockCodeheight:function(){return this.isClose?"0":this.BlockCodeheight}},methods:{blockControl:function(){this.isClose=!this.isClose}},mounted:function(){this.BlockCodeheight=this.$refs.ayheight.offsetHeight,this.isClose=!0}}),c=s,r=e("2877"),i=Object(r["a"])(c,n,o,!1,null,"3fa4a79b",null);a["a"]=i.exports},"3b2d":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h1",[t._v("Chatbox 聊天盒")]),e("p",[t._v("展示对话双方的各种聊天信息")]),e("Showcomponent",{attrs:{title:"基础用法",subtitle:"简单的聊天盒展示，宽度默认为父元素宽度",codes:t.code1},scopedSlots:t._u([{key:"showarea",fn:function(){return[e("div",{staticStyle:{width:"100%"}},[e("ct-chatbox",{attrs:{text:["Hello, John"]}}),e("ct-chatbox",{attrs:{sent:"",text:["Hello"]}}),e("ct-chatbox",{attrs:{text:["Hello, How are you?"]}})],1)]},proxy:!0}])}),e("Showcomponent",{attrs:{title:"头像用法",subtitle:"可以添加头像的链接或引用",codes:t.code2},scopedSlots:t._u([{key:"showarea",fn:function(){return[e("div",[e("ct-chatbox",{attrs:{text:["Hello, John"],avatar:"https://cdn.quasar.dev/img/avatar1.jpg"}}),e("ct-chatbox",{attrs:{sent:"",text:["Hello"],avatar:"https://cdn.quasar.dev/img/avatar1.jpg"}}),e("ct-chatbox",{attrs:{text:["Hello, How are you?"],avatar:"https://cdn.quasar.dev/img/avatar1.jpg"}})],1)]},proxy:!0}])}),e("Showcomponent",{attrs:{title:"昵称用法",subtitle:"可以增加聊天双方的昵称",codes:t.code3},scopedSlots:t._u([{key:"showarea",fn:function(){return[e("div",[e("ct-chatbox",{attrs:{text:["Hello, John"],name:"Gypsophlia",avatar:"https://cdn.quasar.dev/img/avatar1.jpg"}}),e("ct-chatbox",{attrs:{sent:"",text:["Hello"],name:"Gypsophlia",avatar:"https://cdn.quasar.dev/img/avatar1.jpg"}}),e("ct-chatbox",{attrs:{text:["Hello, How are you?"],name:"Gypsophlia",avatar:"https://cdn.quasar.dev/img/avatar1.jpg"}})],1)]},proxy:!0}])}),e("Showcomponent",{attrs:{title:"时间戳用法",subtitle:"每一条消息可以增加时间戳",codes:t.code4},scopedSlots:t._u([{key:"showarea",fn:function(){return[e("div",[e("ct-chatbox",{attrs:{text:["Hello, John"],name:"Gypsophlia",stamp:"3 minutes ago",avatar:"https://cdn.quasar.dev/img/avatar1.jpg"}}),e("ct-chatbox",{attrs:{sent:"",text:["Hello"],name:"Gypsophlia",stamp:"4 minutes ago",avatar:"https://cdn.quasar.dev/img/avatar1.jpg"}}),e("ct-chatbox",{attrs:{text:["Hello, How are you?"],name:"Gypsophlia",stamp:"4 minutes ago",avatar:"https://cdn.quasar.dev/img/avatar1.jpg"}})],1)]},proxy:!0}])}),e("Showcomponent",{attrs:{title:"背景颜色用法",subtitle:"添加背景颜色的16进制值/RGB值/颜色英文",codes:t.code5},scopedSlots:t._u([{key:"showarea",fn:function(){return[e("div",[e("ct-chatbox",{attrs:{text:["Hello, John"],name:"Gypsophlia",stamp:"3 minutes ago",avatar:"https://cdn.quasar.dev/img/avatar1.jpg",bgColor:"skyblue"}}),e("ct-chatbox",{attrs:{sent:"",text:["Hello"],name:"Gypsophlia",stamp:"4 minutes ago",avatar:"https://cdn.quasar.dev/img/avatar1.jpg",bgColor:"#ecb959"}}),e("ct-chatbox",{attrs:{text:["Hello, How are you?"],name:"Gypsophlia",stamp:"4 minutes ago",avatar:"https://cdn.quasar.dev/img/avatar1.jpg",bgColor:"#3dbf6c"}})],1)]},proxy:!0}])}),e("Showcomponent",{attrs:{title:"连续消息",subtitle:"短时间内发送连续几条信息",codes:t.code6},scopedSlots:t._u([{key:"showarea",fn:function(){return[e("div",[e("ct-chatbox",{attrs:{text:["Hello, John"],name:"Jim",stamp:"3 minutes ago",avatar:"https://cdn.quasar.dev/img/avatar1.jpg"}}),e("ct-chatbox",{attrs:{sent:"",text:["Hi, Jim","How are you?"],name:"John",stamp:"4 minutes ago",avatar:"https://cdn.quasar.dev/img/avatar1.jpg"}}),e("ct-chatbox",{attrs:{text:["I am fine.","What about you?"],name:"Jim",stamp:"4 minutes ago",avatar:"https://cdn.quasar.dev/img/avatar1.jpg"}}),e("ct-chatbox",{attrs:{sent:"",text:["I am OK, too.","Thanks!"],name:"John",stamp:"4 minutes ago",avatar:"https://cdn.quasar.dev/img/avatar1.jpg"}})],1)]},proxy:!0}])}),e("h1",{staticStyle:{"margin-top":"50px"}},[t._v("Attribution")]),e("Showparameter",{attrs:{parameter:t.params}})],1)},o=[],s=e("2f93"),c=e("a5ef"),r={name:"chatbox",chName:"聊天盒",components:{Showcomponent:s["a"],Showparameter:c["a"]},data:function(){return{params:{title:["参数","说明","类型","可选值","默认值"],contents:[["text","聊天消息内容","Array","——","——"],["name","聊天人昵称","String","——","undefined"],["avatar","聊天人头像链接或引用","String","——","undefined"],["stamp","聊天消息发送时间","String","——","undefined"],["sent","是否为消息发送方","Boolean","true/false","false"],["bgColor","聊条消息背景颜色","String","16进制/RGB/英文颜色","undefined"]]},code1:'<div style="width: 100%">\n  <ct-chatbox :text="[\'Hello, John\']"></ct-chatbox>\n  <ct-chatbox sent :text="[\'Hello\']"></ct-chatbox>\n  <ct-chatbox :text="[\'Hello, How are you?\']"></ct-chatbox>\n</div>',code2:'<div>\n  <ct-chatbox\n    :text="[\'Hello, John\']"\n    avatar="https://cdn.quasar.dev/img/avatar1.jpg"\n  ></ct-chatbox>\n  <ct-chatbox\n    sent\n    :text="[\'Hello\']"\n    avatar="https://cdn.quasar.dev/img/avatar1.jpg"\n  ></ct-chatbox>\n  <ct-chatbox\n    :text="[\'Hello, How are you?\']"\n    avatar="https://cdn.quasar.dev/img/avatar1.jpg"\n  ></ct-chatbox>\n</div>',code3:'<div>\n  <ct-chatbox\n    :text="[\'Hello, John\']"\n    name="Gypsophlia"\n    avatar="https://cdn.quasar.dev/img/avatar1.jpg"\n  ></ct-chatbox>\n  <ct-chatbox\n    sent\n    :text="[\'Hello\']"\n    name="Gypsophlia"\n    avatar="https://cdn.quasar.dev/img/avatar1.jpg"\n  ></ct-chatbox>\n  <ct-chatbox\n    :text="[\'Hello, How are you?\']"\n    name="Gypsophlia"\n    avatar="https://cdn.quasar.dev/img/avatar1.jpg"\n  ></ct-chatbox>\n</div>',code4:'<div>\n  <ct-chatbox\n    :text="[\'Hello, John\']"\n    name="Gypsophlia"\n    stamp="3 minutes ago"\n    avatar="https://cdn.quasar.dev/img/avatar1.jpg"\n  ></ct-chatbox>\n  <ct-chatbox\n    sent\n    :text="[\'Hello\']"\n    name="Gypsophlia"\n    stamp="4 minutes ago"\n    avatar="https://cdn.quasar.dev/img/avatar1.jpg"\n  ></ct-chatbox>\n  <ct-chatbox\n    :text="[\'Hello, How are you?\']"\n    name="Gypsophlia"\n    stamp="4 minutes ago"\n    avatar="https://cdn.quasar.dev/img/avatar1.jpg"\n  ></ct-chatbox>\n</div>',code5:'<div>\n  <ct-chatbox\n    :text="[\'Hello, John\']"\n    name="Gypsophlia"\n    stamp="3 minutes ago"\n    avatar="https://cdn.quasar.dev/img/avatar1.jpg"\n    bgColor="skyblue"\n  ></ct-chatbox>\n  <ct-chatbox\n    sent\n    :text="[\'Hello\']"\n    name="Gypsophlia"\n    stamp="4 minutes ago"\n    avatar="https://cdn.quasar.dev/img/avatar1.jpg"\n    bgColor="#ecb959"\n  ></ct-chatbox>\n  <ct-chatbox\n    :text="[\'Hello, How are you?\']"\n    name="Gypsophlia"\n    stamp="4 minutes ago"\n    avatar="https://cdn.quasar.dev/img/avatar1.jpg"\n    bgColor="#3dbf6c"\n  ></ct-chatbox>\n</div>',code6:'<div>\n  <ct-chatbox\n    :text="[\'Hello, John\']"\n    name="Jim"\n    stamp="3 minutes ago"\n    avatar="https://cdn.quasar.dev/img/avatar1.jpg"\n  ></ct-chatbox>\n  <ct-chatbox\n    sent\n    :text="[\'Hi, Jim\', \'How are you?\']"\n    name="John"\n    stamp="4 minutes ago"\n    avatar="https://cdn.quasar.dev/img/avatar1.jpg"\n  ></ct-chatbox>\n  <ct-chatbox\n    :text="[\'I am fine.\', \'What about you?\']"\n    name="Jim"\n    stamp="4 minutes ago"\n    avatar="https://cdn.quasar.dev/img/avatar1.jpg"\n  ></ct-chatbox>\n  <ct-chatbox\n    sent\n    :text="[\'I am OK, too.\', \'Thanks!\']"\n    name="John"\n    stamp="4 minutes ago"\n    avatar="https://cdn.quasar.dev/img/avatar1.jpg"\n  ></ct-chatbox>\n</div>'}}},i=r,h=e("2877"),l=Object(h["a"])(i,n,o,!1,null,null,null);a["default"]=l.exports},7134:function(t,a,e){},a5ef:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.title?e("h1",[t._v(t._s(t.title))]):t._e(),e("table",[e("thead",[e("tr",t._l(t.parameter.title,(function(a,n){return e("td",{key:n},[t._v(" "+t._s(a)+" ")])})),0)]),e("tbody",t._l(t.parameter.contents,(function(a,n){return e("tr",{key:n},t._l(a,(function(a,n){return e("td",{key:n},[t._v(t._s(a))])})),0)})),0)])])},o=[],s={name:"ShowParameter",props:{parameter:Object,title:{type:String,default:""}}},c=s,r=(e("b70b"),e("2877")),i=Object(r["a"])(c,n,o,!1,null,"abf6840c",null);a["a"]=i.exports},b70b:function(t,a,e){"use strict";e("282c")}}]);