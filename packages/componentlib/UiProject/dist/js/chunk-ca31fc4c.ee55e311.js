(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ca31fc4c"],{"1fa6":function(e,t,i){},"282c":function(e,t,i){},"2f93":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"panel"},[i("h3",[e._v(e._s(this.title))]),i("p",[e._v(e._s(this.subtitle))]),i("div",{staticClass:"demoblock"},[i("div",{staticClass:"source"},[e._t("showarea")],2),i("div",{ref:"ayheight",staticClass:"meta",style:{height:e.ToBlockCodeheight+"px"},attrs:{id:"codeblock"}},[i("div",{staticClass:"description"},[i("div",[i("p",[e._t("desc")],2)])]),i("div",{staticClass:"highlight"},[i("div",{staticClass:"codearea"},[i("pre",{directives:[{name:"highlight",rawName:"v-highlight",value:e.codes,expression:"codes"}]},[i("code")])])])]),i("div",{staticClass:"demo-block-control",on:{click:e.blockControl}},[i("i",{staticClass:"iconfont",class:[e.isClose?"icon-downarrow":"icon-uparrow"]}),e.isClose?i("span",[e._v("显示代码")]):i("span",[e._v("隐藏代码")])])])])},o=[],r=(i("7134"),{data:function(){return{isClose:!1,BlockCodeheight:""}},props:{title:{type:String},subtitle:{type:String},des:{type:String},ctname:{type:String},attributes:{type:Array},codes:{type:String}},computed:{ToBlockCodeheight:function(){return this.isClose?"0":this.BlockCodeheight}},methods:{blockControl:function(){this.isClose=!this.isClose}},mounted:function(){this.BlockCodeheight=this.$refs.ayheight.offsetHeight,this.isClose=!0}}),n=r,c=i("2877"),a=Object(c["a"])(n,s,o,!1,null,"3fa4a79b",null);t["a"]=a.exports},"3a9b9":function(e,t,i){"use strict";i("1fa6")},7134:function(e,t,i){},8671:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",[e._v("Descriptions 描述列表")]),i("p",[e._v("常用的描述列表用法。")]),i("showcomponent",{attrs:{title:"基础用法",subtitle:"基础的描述列表。",attributes:["type, size"],ctname:"Descriptions",codes:e.code1},scopedSlots:e._u([{key:"showarea",fn:function(){return[i("div",{staticClass:"block_show_div"},[i("div",{staticClass:"flex_col"},[i("ct-descriptions",{attrs:{title:"User Info",column:"3"}},[i("ct-descriptions-item",{attrs:{label:"Username"}},[e._v(e._s(e.info.name))]),i("ct-descriptions-item",{attrs:{label:"Age"}},[i("code",[e._v(e._s(e.info.age))])]),i("ct-descriptions-item",{attrs:{label:"Gender"}},[e._v(e._s(e.info.sex))]),i("ct-descriptions-item",{attrs:{label:"School"}},[e._v(e._s(e.info.school))]),i("ct-descriptions-item",{attrs:{label:"Profession"}},[e._v(e._s(e.info.major))]),i("ct-descriptions-item",{attrs:{label:"Hobby"}},[e._v(e._s(e.info.hobby))]),i("ct-descriptions-item",{attrs:{label:"Telephone"}},[e._v(e._s(e.info.phone))]),i("ct-descriptions-item",{attrs:{label:"Address"}},[e._v(e._s(e.info.address))])],1)],1)])]},proxy:!0},{key:"desc",fn:function(){return[e._v(" 使用"),i("code",[e._v("title")]),e._v(","),i("code",[e._v("column")]),e._v("，"),i("code",[e._v("label")]),e._v("属性来定义 Descriptions 的样式 ")]},proxy:!0}])}),i("showcomponent",{attrs:{title:"不同尺寸",subtitle:"不同尺寸的描述列表。",attributes:["type, size"],ctname:"Descriptions",codes:e.code2},scopedSlots:e._u([{key:"showarea",fn:function(){return[i("div",{staticClass:"block_show_div"},[i("div",{staticClass:"flex_col"},[i("ct-row",[i("ct-radio",{attrs:{label:"large"},model:{value:e.radio1,callback:function(t){e.radio1=t},expression:"radio1"}},[e._v("Large")]),i("ct-radio",{attrs:{label:"medium"},model:{value:e.radio1,callback:function(t){e.radio1=t},expression:"radio1"}},[e._v("Default")]),i("ct-radio",{attrs:{label:"small"},model:{value:e.radio1,callback:function(t){e.radio1=t},expression:"radio1"}},[e._v("Small")])],1),i("ct-descriptions",{attrs:{size:e.radio1,title:"User info",column:"3"}},[i("ct-descriptions-item",{attrs:{label:"Username"}},[e._v(e._s(e.info.name))]),i("ct-descriptions-item",{attrs:{label:"Age"}},[i("code",[e._v(e._s(e.info.age))])]),i("ct-descriptions-item",{attrs:{label:"Gender"}},[e._v(e._s(e.info.sex))]),i("ct-descriptions-item",{attrs:{label:"School"}},[e._v(e._s(e.info.school))]),i("ct-descriptions-item",{attrs:{label:"Profession"}},[e._v(e._s(e.info.major))]),i("ct-descriptions-item",{attrs:{label:"Hobby"}},[e._v(e._s(e.info.hobby))]),i("ct-descriptions-item",{attrs:{label:"Telephone"}},[e._v(e._s(e.info.phone))]),i("ct-descriptions-item",{attrs:{label:"Address"}},[e._v(e._s(e.info.address))])],1)],1)])]},proxy:!0},{key:"desc",fn:function(){return[e._v(" 使用"),i("code",[e._v("size")]),e._v("属性来定义 Descriptions 的样式 ")]},proxy:!0}])}),i("showcomponent",{attrs:{title:"有无边框",subtitle:"有无边框的描述列表。",attributes:["type, size"],ctname:"Descriptions",codes:e.code3},scopedSlots:e._u([{key:"showarea",fn:function(){return[i("div",{staticClass:"block_show_div"},[i("div",{staticClass:"flex_col"},[i("ct-row",[i("ct-radio",{attrs:{label:"border"},model:{value:e.radio2,callback:function(t){e.radio2=t},expression:"radio2"}},[e._v("有边框")]),i("ct-radio",{attrs:{label:"borderless"},model:{value:e.radio2,callback:function(t){e.radio2=t},expression:"radio2"}},[e._v("无边框")])],1),i("ct-descriptions",{attrs:{borderless:"borderless"===e.radio2,title:"User info",column:"3"}},[i("ct-descriptions-item",{attrs:{label:"Username"}},[e._v(e._s(e.info.name))]),i("ct-descriptions-item",{attrs:{label:"Age"}},[i("code",[e._v(e._s(e.info.age))])]),i("ct-descriptions-item",{attrs:{label:"Gender"}},[e._v(e._s(e.info.sex))]),i("ct-descriptions-item",{attrs:{label:"School"}},[e._v(e._s(e.info.school))]),i("ct-descriptions-item",{attrs:{label:"Profession"}},[e._v(e._s(e.info.major))]),i("ct-descriptions-item",{attrs:{label:"Hobby"}},[e._v(e._s(e.info.hobby))]),i("ct-descriptions-item",{attrs:{label:"Telephone"}},[e._v(e._s(e.info.phone))]),i("ct-descriptions-item",{attrs:{label:"Address"}},[e._v(e._s(e.info.address))])],1)],1)])]},proxy:!0},{key:"desc",fn:function(){return[e._v(" 使用"),i("code",[e._v("borderless")]),e._v("属性来定义 Descriptions 的样式 ")]},proxy:!0}])}),i("showcomponent",{attrs:{title:"垂直列表",subtitle:"是否垂直排列的描述列表。",attributes:["type, size"],ctname:"Descriptions",codes:e.code4},scopedSlots:e._u([{key:"showarea",fn:function(){return[i("div",{staticClass:"block_show_div"},[i("div",{staticClass:"flex_col"},[i("ct-row",[i("ct-radio",{attrs:{label:"large"},model:{value:e.radio3,callback:function(t){e.radio3=t},expression:"radio3"}},[e._v("Large")]),i("ct-radio",{attrs:{label:"medium"},model:{value:e.radio3,callback:function(t){e.radio3=t},expression:"radio3"}},[e._v("Default")]),i("ct-radio",{attrs:{label:"small"},model:{value:e.radio3,callback:function(t){e.radio3=t},expression:"radio3"}},[e._v("Small")])],1),i("ct-descriptions",{attrs:{direction:"vertical",size:e.radio3,title:"User info",column:"3"}},[i("ct-descriptions-item",{attrs:{label:"Username"}},[e._v(e._s(e.info.name))]),i("ct-descriptions-item",{attrs:{label:"Age"}},[i("code",[e._v(e._s(e.info.age))])]),i("ct-descriptions-item",{attrs:{label:"Gender"}},[e._v(e._s(e.info.sex))]),i("ct-descriptions-item",{attrs:{label:"School"}},[e._v(e._s(e.info.school))]),i("ct-descriptions-item",{attrs:{label:"Profession"}},[e._v(e._s(e.info.major))]),i("ct-descriptions-item",{attrs:{label:"Hobby"}},[e._v(e._s(e.info.hobby))]),i("ct-descriptions-item",{attrs:{label:"Telephone"}},[e._v(e._s(e.info.phone))]),i("ct-descriptions-item",{attrs:{label:"Address"}},[e._v(e._s(e.info.address))])],1)],1)])]},proxy:!0},{key:"desc",fn:function(){return[e._v(" 使用"),i("code",[e._v("direction")]),e._v("属性来定义 Descriptions 的样式 ")]},proxy:!0}])}),i("showpara",{staticStyle:{"margin-top":"150px"},attrs:{title:"Attribute",parameter:e.parameter}})],1)},o=[],r=i("2f93"),n=i("a5ef"),c={name:"descriptions",chName:"描述列表",components:{showcomponent:r["a"],showpara:n["a"]},data:function(){return{code1:'<ct-descriptions title="User Info" column="3">\n    <ct-descriptions-item label="Username">ephemera</ct-descriptions-item>\n    <ct-descriptions-item label="Age">20</ct-descriptions-item>\n    <ct-descriptions-item label="Gender">male</ct-descriptions-item>\n    <ct-descriptions-item label="School">Scut</ct-descriptions-item>\n    <ct-descriptions-item label="Profession">computer</ct-descriptions-item>\n    <ct-descriptions-item label="Hobby">Movies</ct-descriptions-item>\n    <ct-descriptions-item label="Telephone">18888888888</ct-descriptions-item>\n    <ct-descriptions-item label="Address">No.1188, Xiaoguwei Avenue, Xiaoguwei District, Guangzhou, Guangdong Province</ct-descriptions-item>\n    <ct-descriptions-item label="Self-descriptions" :span="1">Pursue my inner peace!</ct-descriptions-item>\n</ct-descriptions>',code2:'<ct-row>\n    <ct-radio v-model="radio1" label="large">Large</ct-radio>\n    <ct-radio v-model="radio1" label="medium">Default</ct-radio>\n    <ct-radio v-model="radio1" label="small">Small</ct-radio>\n</ct-row>\n<ct-descriptions  :size="radio1" title="User info" column="3">\n    <ct-descriptions-item label="Username">ephemera</ct-descriptions-item>\n    <ct-descriptions-item label="Age">20</ct-descriptions-item>\n    <ct-descriptions-item label="Gender">male</ct-descriptions-item>\n    <ct-descriptions-item label="School">Scut</ct-descriptions-item>\n    <ct-descriptions-item label="Profession">computer</ct-descriptions-item>\n    <ct-descriptions-item label="Hobby">Movies</ct-descriptions-item>\n    <ct-descriptions-item label="Telephone">18888888888</ct-descriptions-item>\n    <ct-descriptions-item label="Address">No.1188, Xiaoguwei Avenue, Xiaoguwei District, Guangzhou, Guangdong Province</ct-descriptions-item>\n    <ct-descriptions-item label="Self-descriptions" :span="1">Pursue my inner peace!</ct-descriptions-item>\n</ct-descriptions>\nexport default{\n    data(){\n        return{\n            radio1: \'medium\'\n        }\n    }\n}\n',code3:'<ct-row>\n    <ct-radio v-model="radio2" label="border">有边框</ct-radio>\n    <ct-radio v-model="radio2" label="borderless">无边框</ct-radio>\n</ct-row>\n<ct-descriptions  :borderless="\'borderless\'===radio2" title="User info" column="3">\n    <ct-descriptions-item label="Username">ephemera</ct-descriptions-item>\n    <ct-descriptions-item label="Age">20</ct-descriptions-item>\n    <ct-descriptions-item label="Gender">male</ct-descriptions-item>\n    <ct-descriptions-item label="School">Scut</ct-descriptions-item>\n    <ct-descriptions-item label="Profession">computer</ct-descriptions-item>\n    <ct-descriptions-item label="Hobby">Movies</ct-descriptions-item>\n    <ct-descriptions-item label="Telephone">18888888888</ct-descriptions-item>\n    <ct-descriptions-item label="Address">No.1188, Xiaoguwei Avenue, Xiaoguwei District, Guangzhou, Guangdong Province</ct-descriptions-item>\n    <ct-descriptions-item label="Self-descriptions" :span="1">Pursue my inner peace!</ct-descriptions-item>\n</ct-descriptions>\nexport default{\n    data(){\n        return{\n            radio2: \'border\'\n        }\n    }\n}',code4:'<ct-row>\n    <ct-radio v-model="radio1" label="large">Large</ct-radio>\n    <ct-radio v-model="radio1" label="medium">Default</ct-radio>\n    <ct-radio v-model="radio1" label="small">Small</ct-radio>\n</ct-row>\n<ct-descriptions  direction="vertical" title="User info" column="3">\n    <ct-descriptions-item label="Username">ephemera</ct-descriptions-item>\n    <ct-descriptions-item label="Age">20</ct-descriptions-item>\n    <ct-descriptions-item label="Gender">male</ct-descriptions-item>\n    <ct-descriptions-item label="School">Scut</ct-descriptions-item>\n    <ct-descriptions-item label="Profession">computer</ct-descriptions-item>\n    <ct-descriptions-item label="Hobby">Movies</ct-descriptions-item>\n    <ct-descriptions-item label="Telephone">18888888888</ct-descriptions-item>\n    <ct-descriptions-item label="Address">No.1188, Xiaoguwei Avenue, Xiaoguwei District, Guangzhou, Guangdong Province</ct-descriptions-item>\n    <ct-descriptions-item label="Self-descriptions" :span="1">Pursue my inner peace!</ct-descriptions-item>\n</ct-descriptions>\nexport default{\n    data(){\n        return{\n            radio3: \'medium\'\n        }\n    }\n}\n',info:{name:"ephemera",age:20,sex:"male",school:"Scut",major:"computer",address:"No.1188, Xiaoguwei Avenue, Xiaoguwei District, Guangzhou, Guangdong Province",hobby:"Movies",phone:18888888888,intro:"Pursue my inner peace!"},radio1:"medium",radio2:"border",radio3:"medium",parameter:{title:["参数","说明","类型","可选值","默认值"],contents:[["borderless","是否不带边框","Boolean","true/false","false"],["column","列数","Number","","3"],["direction","排列的方向","String","vertical/horizontal","horizontal"],["size","列表的尺寸","String","large/default/small","default(medium)"],["title","标题文本，显示在左上方","String","",""]]}}}},a=c,l=(i("3a9b9"),i("2877")),d=Object(l["a"])(a,s,o,!1,null,"19d663b7",null);t["default"]=d.exports},a5ef:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.title?i("h1",[e._v(e._s(e.title))]):e._e(),i("table",[i("thead",[i("tr",e._l(e.parameter.title,(function(t,s){return i("td",{key:s},[e._v(" "+e._s(t)+" ")])})),0)]),i("tbody",e._l(e.parameter.contents,(function(t,s){return i("tr",{key:s},e._l(t,(function(t,s){return i("td",{key:s},[e._v(e._s(t))])})),0)})),0)])])},o=[],r={name:"ShowParameter",props:{parameter:Object,title:{type:String,default:""}}},n=r,c=(i("b70b"),i("2877")),a=Object(c["a"])(n,s,o,!1,null,"abf6840c",null);t["a"]=a.exports},b70b:function(e,t,i){"use strict";i("282c")}}]);