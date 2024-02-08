import createApp from '../main.js';

export default function (ctx) {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp();
    router.push(ctx.url);
    /**
     * api 参考官方文档
     */
    router.onReady(() => {
      // 判断当前路由下是否存在组件
      const matchedComponents = router.getMatchedComponents();
      if (matchedComponents.length == 0) {
        return reject({ code: 404 });
      }
      Promise.all(matchedComponents.map(c => {
        if (c.asyncData) {
          return c.asyncData(store)
        }
      })).then(() => {
        //会挂载到 window.__INITIAL_STATE__ 上
        ctx.state = store.state;
        resolve(app);
      }).catch(reject);
      // resolve(app);
    }, reject)
  });
}