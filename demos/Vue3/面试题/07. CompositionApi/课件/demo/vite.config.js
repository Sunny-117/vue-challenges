export default {
  proxy: {//live serve打开json文件
    "/api": {
      target: "http://localhost:8080/07.%20CompositionApi/%E8%AF%BE%E4%BB%B6/gdp.json",
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
};
