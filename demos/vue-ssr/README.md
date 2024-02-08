# Vue SSR

## 基本框架搭建

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- 插值语法，vue-ssr -->
  <!-- 双括号语法会转义 -->
  <title>{{ title }}</title>
  <!-- 三括号语法不转义 -->
  {{{ meta }}}
</head>

<body>

  <!-- 页面模板的挂载点 -->

  <!--vue-ssr-outlet-->
</body>

</html>
```
```js
// server.js
const express = require('express');
const serverRender = require('vue-server-renderer');
const Vue = require('vue');
const fs = require('fs');

const server = express();

// 定义一个配置对象，表示页面相关信息，title，meta
const desc = {
  title: '这是一个ssr页面',
  meta: '<meta name="description" content="Vue.js 服务端渲染指南"></meta>'
}


server.get('*', async (req, res) => {
  try {
    // 1. 创建vue实例
    const app = new Vue({
      data() {
        return {
          msg: 'hello SSR'
        }
      },
      template: `<div>
                  <span>{{ msg }}</span>
                  <input v-model="msg">
                 </div>`
    });

    // hope 有一个方法，可以将vue实例转化为html字符串。
    // vue-server-renderer

    // a. 创建一个渲染器, 支持页面模板
    const render = serverRender.createRenderer({
      template: fs.readFileSync('./index.html', 'utf-8')
    });

    // b. 调用renderToString(vue实例， 回调函数)
    // render.renderToString(app, (err, html) => {
    //   res.send(html);
    // });
    const html = await render.renderToString(app, desc);
    // 1. 页面失活！
    // 2. 开发，组件怎么写
    res.send(html);
  } catch (error) {
    console.log(error);
  }
});

server.listen(12306, () => {
  console.log('server is running at 12306')
});
```





## 知识细节

https://ssr.vuejs.org/zh/api/#bundlerenderer-rendertostring

Vue SSR 环境搭建

1. 开发环境问题 （利用webpack实现一个开发vue的环境）

> webpack: webpack webpack-cli webpack-dev-server webpack-merge
> vue: vue vue-loader vue-template-compiler vue-server-renderer
> js: babel-loader @babel/core @babel/preset-env
> css: vue-style-loader css-loader
> other: express html-webpack-plugin

2. 页面失活

vuetifyjs.com
部署
https://www.w3cschool.cn/nuxtjs/nuxtjs-e32b36g8.html

渲染：页面内容通过js执行形成。

前端发展史

1. 静态页面阶段
   document (文档)
2. 服务器端渲染阶段
   js刚刚出生的时候，要不做不了，要不做不好。
   PHP smarty
   java JSP, volicity, freemaker
   python, jinja2
   优点：
3. 前端压力小，直接渲染
4. 有利于 SEO (搜索引擎优化) ， 公共流量 VS 私域流量
   缺点：
   学习成本高
   开发成本高
   服务器压力大
   利用模板修改页面
5. 客户端渲染（前后端分离）
   浏览器越来越快了，js能做的事越来越多了。
   css3, html5, cssnext, es678。 设计模式， vue
   优点
6. 前后端分离， 前端（UI + 交互）， 后端（API 和 数据）
7. 体验好（native). SPA
   缺点
   首屏加载慢 （落地页）
   SEO 不好
8. 同构（Vue SSR, SSR + CSR)
   nodejs， 会js就可以开发服务端。
   缺点：服务端要跑一次，客户端也要渲染



# SSR 初探

SSR (Server side Render) 服务器端渲染。
> 渲染：页面形成的过程，html文件，内容形成的过程。

CSR (client side Render) 客户端渲染
> 渲染：页面内容通过js执行形成。

## 前端发展史

1. 静态页面阶段


> document (文档)

2. 服务器端渲染阶段

> js刚刚出生的时候，要不做不了，要不做不好。

> PHP smarty
> java JSP, volicity, freemaker
> python, jinja2

> 优点：
  1. 前端压力小，直接渲染          
  2. 有利于 SEO (搜索引擎优化) ， 公共流量 VS 私域流量
> 缺点：
  1. 学习成本高
  2. 开发成本高
  3. 服务器压力大

利用模板修改页面

3. 客户端渲染（前后端分离）

> 浏览器越来越快了，js能做的事越来越多了。
> css3, html5, cssnext, es678。 设计模式， vue

> 优点
  1. 前后端分离， 前端（UI + 交互）， 后端（API 和 数据）
  2. 体验好（native). SPA 
> 缺点
  1. 首屏加载慢 （落地页）
  2. SEO 不好

4. 同构（Vue SSR, SSR + CSR)
nodejs， 会js就可以开发服务端。

缺点：服务端要跑一次，客户端也要渲染















# 扩展
## SSR基本介绍以及API的使用

### 什么是SSR？

> server side render 服务端渲染

参考地址：[https://ssr.vuejs.org/zh/](https://ssr.vuejs.org/zh/)

#### 服务端渲染与客户端渲染（CSR）的区别？

##### 服务端渲染

> 页面渲染过程是在服务端完成，最终的HTML字符串，直接通过请求发送给客户端。


**服务端渲染案例Demo：**

- [https://ssr.vuejs.org/zh/guide/](https://ssr.vuejs.org/zh/guide/)
- [https://www.hyfarsight.com/forum/forumlist/all](https://www.hyfarsight.com/forum/forumlist/all)
- [https://www.ixigua.com/?wid_try=1](https://www.ixigua.com/?wid_try=1)

**优点**

1. 利于SEO：不同爬虫工作原理类似，只会爬取源码，不会执行网站的任何脚本（Google除外）；
2. 首屏加载快：首页是通过node加载的HTML字符串，用户直接可以看到完整HTML，所以更快；

**缺点**

1. 渲染过程在后端完成，耗费后端资源，费流量。
2. 页面重复加载次数高、开发效率低、数据传输量大、服务器压力大。

##### **客户端渲染**

> 客户端请求页面时，返回是空HTML，通过请求完js，css等，在客户端进行渲染（浏览器）


**客户端渲染案例Demo：**

- [https://element.eleme.io/#/zh-CN](https://element.eleme.io/#/zh-CN)
- [https://www.zhisland.com/index](https://www.zhisland.com/index)
- [https://m.maizuo.com/v5/#/films/nowPlaying](https://m.maizuo.com/v5/#/films/nowPlaying)

**优点**

		节省后端资源，局部刷新页面，多端渲染，前后端分离。

**缺点**

		缺点是：首屏性能差，白屏，无法（或很难）进行 SEO等。

---

#### Vue实现服务端渲染Demo

访问地址：[https://ssr.vuejs.org/zh/guide/](https://ssr.vuejs.org/zh/guide/)

##### Vue实现服务端渲染使用条件

- 会同时打包两套入口文件，客户端+ 服务端 （同构）
- 服务端渲染过程中，只会执行到componentDidMount之前的生命周期钩子
- Vue实例化对象在服务端生成时为多例模式，包含路由，store，实例化对象，均为多例模式
- 2.5版本之前只能使用nodeJS作为ssr渲染执行环境

### nuxtJS使用

#### 文档地址

[https://www.nuxtjs.cn/](https://www.nuxtjs.cn/)

#### 安装

**npx安装**

1.  原始版本  
```css
npx create-nuxt-app <项目名>
```

2.  指定版本  
```css
npx create-nuxt-app@2.9.2 <项目名>
```

**yarn安装**

```css
yarn create nuxt-app <项目名>
```

```css
Project name: 项目名称，后期也可以改，无误回车即可；

Programming language: JS语言，这里我选择了JavaScript，也可以选择TS；

Package manager: 包管理器，随便选择；

UI framework: 是否安装UI框架；

Nuxt.js modules: 集成模块（插件）注意使用上下箭头将光标移到axios上使用空格选择，选中后会有一个通配符（*），然后回车；

Linting tools: 格式检测工具；

Testing framework: 单元测试框架，选择None回车即可（这里none并不是不选择，而是随机选一个的意思）

Rendering mode: 网站模式，这里选择Universal (SSR / SSG)，使用Nuxt的意义就在于此

Deployment target: 开发服务器，即我们热更新的启动基础，这里选择Server (Node.js hosting)即可；

Development tools: 开发工具适配，如果使用vscode那就勾选第一项

What is your GitHub username? 选填，不想填直接回车；

Version control system: 版本管理工具，根据上一项选择填写，没有直接选择None回车；
```

---

#### 目录结构

```java
└─my-nuxt-demo
  ├─.nuxt               // Nuxt自动生成，临时的用于编辑的文件，build
  ├─assets              // 用于组织未编译的静态资源如LESS、SASS或JavaScript
  ├─components          // 用于自己编写的Vue组件，比如日历组件、分页组件
  ├─layouts             // 布局目录，用于组织应用的布局组件，不可更改⭐（新版本目前需要手动创建）
  ├─middleware          // 用于存放中间件
  ├─node_modules
  ├─pages               // 用于组织应用的路由及视图,Nuxt.js根据该目录结构自动生成对应的路由配置，文件名不可更改⭐
  ├─plugins             // 用于组织那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件。
  ├─static              // 用于存放应用的静态文件，此类文件不会被 Nuxt.js 调用 Webpack 进行构建编译处理。 服务器启动的时候，该目录下的文件会映射至应用的根路径 / 下。文件夹名不可更改。⭐
  └─store               // 用于组织应用的Vuex 状态管理。文件夹名不可更改。⭐
  ├─.editorconfig       // 开发工具格式配置
  ├─.eslintrc.js        // ESLint的配置文件，用于检查代码格式（脚手架项目如果没有设置，没有此目录文件夹）
  ├─.gitignore          // 配置git忽略文件
  ├─nuxt.config.js      // 用于组织Nuxt.js 应用的个性化配置，以便覆盖默认配置。文件名不可更改。⭐配置telemetry: false, //关闭是否加入计划
  ├─package-lock.json   // npm自动生成，用于帮助package的统一设置的，yarn也有相同的操作
  ├─package.json        // npm 包管理配置文件
  ├─README.md
```

---

#### 使用

##### 路由

参考地址：[https://zh.nuxtjs.org/docs/2.x/directory-structure/pages](https://zh.nuxtjs.org/docs/2.x/directory-structure/pages)

1.  	**路由文件定义** 
   -  page 文件夹下创建vue文件，为页面级别路由文件 
   -  layouts文件夹下进行模版定义  
```html
<template>
    <nuxt />
  </div>
</template>
```

   -  自定义模版使用  
> 在layouts文件夹下定义vue文件；
>  
> 在page界面组件内部定义 layout属性

 

2.  路由跳转 
   -  编程式跳转 this.$router.push('linkUrl') 
   -  404界面处理  
```javascript
 router: {
    linkExactActiveClass: 'on',
    /* 扩展路由对象 */
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, './pages/404.vue')
      })
    },
    // middleware: ['redirect'],`
  }
```


3.  二级路由创建 
   1.  page下定义同名文件夹 
   2.  文件夹内部定位二级路由文件，名称自行定义


4.  路由重定向（使用middleware进行中间件跳转） 
   1.  nuxt.config文件配置route选项  
```javascript
router: {
    middleware: ['redirect']
  }
```

   2.  创建middleware文件夹，定义redirect.js文件  
```javascript
export default function ({ route, app, store, redirect, ctx, req, $axios, error }) {
    if (route.path === '/test') {
        redirect('/test/child_test')
    }
}
```


5.  动态路由定义 
   1. 在 Nuxt.js 里面定义带参数的动态路由，需要创建对应的**以下划线作为前缀**的 Vue 文件 或 目录。
   2. 获取动态参数{{$route.params['文件名']}}

 

---

##### 三方UI库使用

-  配置文件中直接使用即可； 
-  plugin文件夹下创建三方引入文件 

##### 数据请求

**非跨域数据请求**

```javascript
 async asyncData({ store, $axios, params }) {
    const { data: { data, code } } = await $axios.get('https://study.duyiedu.com/api/herolist')
    if (code === 0) {
      return { list: data }
    }
  }
```

**跨域数据请求**

1.  下载@nuxtjs/proxy插件 
2.  nuxt.config.js文件中配置modules选项  
```javascript
modules:['@nuxtjs/proxy'],//需要安装
  proxy:{
    '/代理地址':{
      target:'https://study.duyiedu.com/api/movies',
      pathRewrite:{
        '^/getMovie':''
      }
    }
  }
```

##### 使用store数据

> store文件夹下创建模块文件，导出文件为函数返回值为对象


```javascript
export const state = () => ({
    userInfo: null
});
```

> 组件内使用


```javascript
$store.state.user.userInfo
```

##### 路由守卫

###### 使用plugin实现路由守卫

> nuxt.conig.js文件进行plugins扩展配置


```javascript
	  plugins: [
    { src: '@/plugins/check_before_each.js', ssr: false }  // ssr => 是否在服务端渲染阶段执行
  ],
```

> plugin文件夹下定义 check_before_each.js文件 （文件名没有限制）


```javascript
export default function (obj) {
    obj.app.router.beforeEach((to, form, next) => {
        if (to.name !== 'userSetting-login' && !window.localStorage.userInfo) {
            next('/userSetting/login');
        } else {
            window.localStorage.userInfo && obj.store.commit('user/settingUser', JSON.parse(window.localStorage.userInfo))
            next()
        }
    })
}
```
###### 使用middlewear进行路由拦截

> nuxt中定义router的middleware配置


```jsx
router: {
    linkExactActiveClass: 'on',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, './pages/404.vue')
      })
    },
    middleware: ['redirect'],
  },
```

> redirect进行拦截配置


```javascript
export default function ({ route, app, store, redirect, ctx, req, $axios, error }) {
    if (!process.client) {
        const user = req.ctx.session.userInfo
        if (!user && !route.path.includes('userSetting/login')) {
            redirect('/userSetting/login')
        }
    } else {
    }
}
```

