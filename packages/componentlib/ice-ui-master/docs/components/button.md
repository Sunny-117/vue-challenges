---
title: Button 按钮
---
# Button 按钮

**使用方法**

#### 基本用法：

<ClientOnly>
<button-demos></button-demos>
</ClientOnly>

#### 示例代码：

```vue
<i-button>默认按钮</i-button>
<i-button icon="settings">默认按钮</i-button>
<i-button :loading="loading" @click="loading=!loading">默认按钮</i-button>
```

# Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| icon | 设置内置的icon |    String | setting，info，left，right，download，loading，thumbs-up，down| -- 
|iconPosition|图标位置|String|left、right|left
| loading      | 加载状态      |  Boolean |true、false| false
