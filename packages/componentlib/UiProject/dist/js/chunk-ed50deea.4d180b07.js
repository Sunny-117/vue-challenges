(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed50deea"],{"19ab":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Message 消息提示")]),n("p",[t._v(" 常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。 ")]),n("showcomponent",{attrs:{title:"基础用法",subtitle:"从顶部出现，3 秒后自动消失。",attributes:["size"],ctname:"Message",codes:t.code1},scopedSlots:t._u([{key:"showarea",fn:function(){return[n("div",{staticClass:"block_show_div"},[n("ct-button",{attrs:{plain:!0},on:{click:t.open}},[t._v("打开消息提示")])],1)]},proxy:!0},{key:"desc",fn:function(){return[t._v(" Message 在配置上与 Notification 非常类似，可以结合 Notification 的文档理解它们。Create 注册了一个 "),n("code",[t._v("$message")]),t._v(" 方法用于调用，Message 可以接收一个字符串作为参数，它会被显示为正文内容。 ")]},proxy:!0}])}),n("showcomponent",{attrs:{title:"不同状态",subtitle:"用来显示「成功、警告、消息、错误」类的操作反馈。",ctname:"Message",codes:t.code2},scopedSlots:t._u([{key:"showarea",fn:function(){return[n("div",{staticClass:"block_show_div"},[n("ct-button",{attrs:{plain:!0},on:{click:t.open2}},[t._v("成功")]),n("ct-button",{attrs:{plain:!0},on:{click:t.open3}},[t._v("警告")]),n("ct-button",{attrs:{plain:!0},on:{click:t.open1}},[t._v("消息")]),n("ct-button",{attrs:{plain:!0},on:{click:t.open4}},[t._v("错误")])],1)]},proxy:!0},{key:"desc",fn:function(){return[t._v(" Message 在配置上与 Notification 非常类似，可以结合 Notification 的文档理解它们。Create 注册了一个 "),n("code",[t._v("$message")]),t._v(" 方法用于调用，Message 可以接收一个字符串作为参数，它会被显示为正文内容。 ")]},proxy:!0}])}),n("h3",[t._v("全局方法")]),n("p",[t._v(" CreateUI 为 Vue.prototype 添加了全局方法 $message。因此在 vue instance 中可以采用本页面中的方式调用 Message。 ")]),n("showpara",{staticStyle:{"margin-top":"150px"},attrs:{title:"Options",parameter:t.parameter}})],1)},o=[],i=n("2f93"),a=n("a5ef"),c={name:"message",chName:"消息提示",components:{showcomponent:i["a"],showpara:a["a"]},methods:{open:function(){this.$message.warning("这是一条消息提示")},open1:function(){this.$message("这是一条消息提示")},open2:function(){this.$message({message:"恭喜你，这是一条成功消息",type:"success"})},open3:function(){this.$message({message:"警告哦，这是一条警告消息",type:"warning"})},open4:function(){this.$message.error("错了哦，这是一条错误消息")}},data:function(){return{code1:'\n      <template>\n        <ct-button :plain="true" @click="open">打开消息提示</ct-button>\n    </template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$message(\'这是一条消息提示\');\n      },\n    }\n  }\n<\/script>',code2:'\n      <template>\n        <ct-button :plain="true" @click="open2">成功</ct-button>\n        <ct-button :plain="true" @click="open3">警告</ct-button>\n        <ct-button :plain="true" @click="open1">消息</ct-button>\n        <ct-button :plain="true" @click="open4">错误</ct-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open1() {\n        this.$message(\'这是一条消息提示\');\n      },\n      open2() {\n        this.$message({\n          message: \'恭喜你，这是一条成功消息\',\n          type: \'success\'\n        });\n      },\n      open3() {\n        this.$message({\n          message: \'警告哦，这是一条警告消息\',\n          type: \'warning\'\n        });\n      },\n      open4() {\n        this.$message.error(\'错了哦，这是一条错误消息\');\n      }\n    },\n\n  }\n<\/script>',parameter:{title:["参数","说明","类型","可选值","默认值"],contents:[["message","消息文字","String","——","——"],["type","主题","string","success/warning/info/error","info"]]}}}},r=c,l=(n("2121"),n("2877")),p=Object(l["a"])(r,s,o,!1,null,"087befea",null);e["default"]=p.exports},2121:function(t,e,n){"use strict";n("64b6")},"282c":function(t,e,n){},"2f93":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel"},[n("h3",[t._v(t._s(this.title))]),n("p",[t._v(t._s(this.subtitle))]),n("div",{staticClass:"demoblock"},[n("div",{staticClass:"source"},[t._t("showarea")],2),n("div",{ref:"ayheight",staticClass:"meta",style:{height:t.ToBlockCodeheight+"px"},attrs:{id:"codeblock"}},[n("div",{staticClass:"description"},[n("div",[n("p",[t._t("desc")],2)])]),n("div",{staticClass:"highlight"},[n("div",{staticClass:"codearea"},[n("pre",{directives:[{name:"highlight",rawName:"v-highlight",value:t.codes,expression:"codes"}]},[n("code")])])])]),n("div",{staticClass:"demo-block-control",on:{click:t.blockControl}},[n("i",{staticClass:"iconfont",class:[t.isClose?"icon-downarrow":"icon-uparrow"]}),t.isClose?n("span",[t._v("显示代码")]):n("span",[t._v("隐藏代码")])])])])},o=[],i=(n("7134"),{data:function(){return{isClose:!1,BlockCodeheight:""}},props:{title:{type:String},subtitle:{type:String},des:{type:String},ctname:{type:String},attributes:{type:Array},codes:{type:String}},computed:{ToBlockCodeheight:function(){return this.isClose?"0":this.BlockCodeheight}},methods:{blockControl:function(){this.isClose=!this.isClose}},mounted:function(){this.BlockCodeheight=this.$refs.ayheight.offsetHeight,this.isClose=!0}}),a=i,c=n("2877"),r=Object(c["a"])(a,s,o,!1,null,"3fa4a79b",null);e["a"]=r.exports},"64b6":function(t,e,n){},7134:function(t,e,n){},a5ef:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.title?n("h1",[t._v(t._s(t.title))]):t._e(),n("table",[n("thead",[n("tr",t._l(t.parameter.title,(function(e,s){return n("td",{key:s},[t._v(" "+t._s(e)+" ")])})),0)]),n("tbody",t._l(t.parameter.contents,(function(e,s){return n("tr",{key:s},t._l(e,(function(e,s){return n("td",{key:s},[t._v(t._s(e))])})),0)})),0)])])},o=[],i={name:"ShowParameter",props:{parameter:Object,title:{type:String,default:""}}},a=i,c=(n("b70b"),n("2877")),r=Object(c["a"])(a,s,o,!1,null,"abf6840c",null);e["a"]=r.exports},b70b:function(t,e,n){"use strict";n("282c")}}]);