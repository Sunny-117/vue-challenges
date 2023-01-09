module.exports = {
  title: "Giao UI",
  description: "用Vue造轮子",
  base: "/giaoui-vue-source/",
  lastUpdated: "Last Updated",
  plugins: [
    "@vuepress/last-updated",
    "@vuepress/back-to-top",
    "@vuepress/nprogress",
    [
      "vuepress-plugin-typescript",
      {
        compilerOptions: {
          target: "esnext",
          module: "esnext",
          strict: true,
          jsx: "preserve",
          importHelpers: true,
          moduleResolution: "node",
          experimentalDecorators: true,
          esModuleInterop: true,
          allowSyntheticDefaultImports: true,
          sourceMap: true,
          baseUrl: ".",
          types: ["webpack-env", "jest"],
          paths: {
            "@/*": ["src/*"]
          },
          lib: ["esnext", "dom", "dom.iterable", "scripthost"]
        },
        include: [
          "src/**/*.ts",
          "src/**/*.tsx",
          "src/**/*.vue",
          "tests/**/*.ts",
          "tests/**/*.tsx"
        ],
        exclude: ["node_modules"]
      }
    ]
  ],
  themeConfig: {
    logo: "/giao.jpg",
    smoothScroll: true,
    nav: [
      {text: "主页", link: "/", target: "_self"},
      {text: "文档", link: "/doc/", target: "_self"},
      {text: "GitHub", link: "https://github.com/wanmaoor"}
    ],
    sidebar: [
      {
        title: "开始上手",
        collapsable: false,
        children: ["/doc/"]
      },
      {
        title: "组件",
        collapsable: false,
        children: [
          "/component/1.md",
          "/component/2.md",
          "/component/3.md",
          "/component/4.md",
          "/component/5.md",
          "/component/6.md",
          "/component/7.md",
        ]
      }
    ]
  }
}
