import { createApp, h } from "vue";
import Dialog from "./Dialog.vue";

export const openDialog = (options) => {
  const {
    title,
    content,
    teleportTo,
    closeOnClickOverlay,
    ok,
    cancel,
  } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          closeOnClickOverlay,
          teleportTo,
          visible: true,
          // 监听 update:visible 事件
          "onUpdate:visible": (newVisible) => {
            if (newVisible === false) {
              close();
            }
          },
          ok,
          cancel,
        },
        {
          title,
          content,
        }
      );
    },
  });
  app.mount(div);

  const close = () => {
    app.unmount(div);
    div.remove();
  };
};
