---
title:快速上手
---

# 快速上手

### npm 安装

```bash
npm i ice-vue-ui -S
```

### 开始使用

1. 添加 CSS 样式

使用本框架前，请确保整个项目的 CSS 开启了 border-box

```CSS
*,*::before,*::after{box-sizing: border-box;}
```

IE 8及以上浏览器都支持此样式

2. 引入 ice-vue-ui

按需引入需要的组件，以达到减小项目体积的目的。

需要注意的是，样式文件要记得引入。

```js
import {Button, ButtonGroup, Icon} from 'ice-vue-ui'
import 'ice-vue-ui/dist/index.css'

export default {
  name: 'app',
  components: {
    'i-button': Button,
    'i-icon': Icon
  }
}
```

**完整组件列表和引入方式**

```js
import Vue from 'vue'
import {
    Button,
    Icon,
    ButtonGroup,
    Input,
    Col,
    Row,
    Layout,
    Header,
    Footer,
    Sider,
    Content,
    Toast,
    plugin,
    Tabs,
    TabsHead,
    TabsBody,
    TabsItem,
    TabsPane,
    Popover,
    Collapse,
    CollapseItem

} from 'ice-vue-ui'

Vue.component('i-button', Button)
Vue.component('i-icon', Icon)
Vue.component('i-button-group', ButtonGroup)
Vue.component('i-input', Input)
Vue.component('i-row',Row)
Vue.component('i-col',Col)
Vue.component('i-layout',Layout)
Vue.component('i-header',Header)
Vue.component('i-sider',Sider)
Vue.component('i-content',Content)
Vue.component('i-footer',Footer)
Vue.use(plugin)                           // toast 组件的使用方法
Vue.component('i-tabs',Tabs)
Vue.component('i-tabs-head',TabsHead)
Vue.component('i-tabs-body',TabsBody)
Vue.component('i-tabs-item',TabsItem)
Vue.component('i-tabs-pane',TabsPane)
Vue.component('i-popover',Popover)
Vue.component('i-collapse',Collapse)
Vue.component('i-collapse-item',CollapseItem)
```