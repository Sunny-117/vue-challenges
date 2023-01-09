---
title: Popover 弹出框
---
# Popover 弹出框

**使用方法**

### 支持 HTML

#### 预览

<ClientOnly>
<popover-demo-1></popover-demo-1>
</ClientOnly>

#### 示例代码

```vue
<i-popover position="left">
  <i-button>左边弹出</i-button>
  <template slot="content">
    <strong style="color: #F1453D">加粗的提示</strong>
  </template>
</i-popover>
<i-popover>
  <i-button>上方弹出</i-button>
  <template slot="content">
    <a href="https://github.com/Orange-ice/Ice-UI">这是个a链接</a>
  </template>
</i-popover>
<i-popover position="bottom">
  <i-button>下方弹出</i-button>
  <template slot="content">
    普通文本内容
  </template>
</i-popover>
<i-popover position="right">
  <i-button>右边弹出</i-button>
  <template slot="content">
    普通文本内容
  </template>
</i-popover>
```

### 支持 hover 触发

#### 预览

<ClientOnly>
<popover-demo-2></popover-demo-2>
</ClientOnly>

#### 示例代码

```vue
<i-popover position="left" trigger="hover">
  <i-button>左边弹出</i-button>
  <template slot="content">
    弹出内容
  </template>
</i-popover>
<i-popover trigger="hover">
  <i-button>上方弹出</i-button>
  <template slot="content">
    弹出内容
  </template>
</i-popover>
<i-popover position="bottom" trigger="hover">
  <i-button>下方弹出</i-button>
  <template slot="content">
    弹出内容
  </template>
</i-popover>
<i-popover position="right" trigger="hover">
  <i-button>右边弹出</i-button>
  <template slot="content">
    弹出内容
  </template>
</i-popover>
```

# Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|position| 设置弹出框相对触发区域的位置 | String |left、right、top、bottom| top
|trigger| 设置触发模式 | String |click、hover|click