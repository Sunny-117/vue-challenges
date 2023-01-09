---
title: Tabs 标签页
---
# Tabs 标签页

**使用方法**

#### 基本用法

<ClientOnly>
<tabs-demos></tabs-demos>
</ClientOnly>

#### 示例代码

```vue
data() {
    return {
      selected: '1',
    }
},

<i-tabs :selected="selected">
    <i-tabs-head>
      <i-tabs-item name="1">标题一</i-tabs-item>
      <i-tabs-item disabled name="2">标题二</i-tabs-item>
      <i-tabs-item name="3">标题三</i-tabs-item>
    </i-tabs-head>
    <i-tabs-body>
      <i-tabs-pane name="1">内容1</i-tabs-pane>
      <i-tabs-pane name="2">内容2</i-tabs-pane>
      <i-tabs-pane name="3">内容3</i-tabs-pane>
    </i-tabs-body>
</i-tabs>
```

# Attributes

### Tabs

|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|selected| 当前选中 | String |name| --

### TabsHeadItem 
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|name| 唯一标识，必选 | String |--|-- 
|disabled|设置是否禁用|Boolean|true、false|false

### TabsBodyPane
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|name| 唯一标识，必选 | String |--|-- 