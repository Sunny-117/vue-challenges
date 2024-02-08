import loginUser from "./loginUser";
import { createStore, createLogger } from "vuex";
export default createStore({//创建仓库
  modules: {
    loginUser,
  },
  plugins: [createLogger()],//插件 创建日志方便调试
});
