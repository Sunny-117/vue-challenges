module.exports = {
    publicPath: './',
    // 设置为 true 或 'warning' 时，eslint-loader 会将 lint 错误输出为编译警告
    lintOnSave: true,
    // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    runtimeCompiler: true
}
