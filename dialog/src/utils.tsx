import { createApp, ref, defineComponent } from "vue";
import type { PropType } from "vue";

const Modal = defineComponent({
  props: {
    modelValue: Boolean,
    onUpdateModelValue: {
      type: Function as PropType<(val: boolean) => void>,
      required: true,
    },
  },
  setup(props, { slots }) {
    return () => {
      if (!props.modelValue) return null;
      return (
        <div
          class="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) props.onUpdateModelValue?.(false);
          }}
        >
          <div class="modal-content">
            {slots.default?.()}
            <button
              class="modal-close"
              onClick={() => props.onUpdateModelValue?.(false)}
            >
              关闭
            </button>
          </div>
        </div>
      );
    };
  },
});

export function showMsg(message: string, onClick?: () => void) {
  const div = document.createElement("div");
  document.body.appendChild(div);
  const visible = ref(true);
  const app = createApp({
    setup() {
      const handleClose = () => {
        visible.value = false;
        setTimeout(() => {
          app.unmount();
          div.remove();
          onClick && onClick();
        }, 300);
      };
      return () => (
        <Modal
          modelValue={visible.value}
          onUpdateModelValue={(val: boolean) => {
            visible.value = val;
            if (!val) handleClose();
          }}
        >
          {{
            default: () => (
              <div style="min-width:200px;text-align:center;">{message}</div>
            ),
          }}
        </Modal>
      );
    },
  });
  // 注入样式
  if (!document.getElementById("modal-style")) {
    const style = document.createElement("style");
    style.id = "modal-style";
    style.innerHTML = `
        .modal-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; z-index: 1000; }
        .modal-content { background: #fff; padding: 24px 32px; border-radius: 8px; min-width: 300px; min-height: 120px; position: relative; box-shadow: 0 2px 16px rgba(0,0,0,0.15); }
        .modal-close { position: absolute; top: 8px; right: 8px; background: transparent; border: none; font-size: 16px; cursor: pointer; }
        `;
    document.head.appendChild(style);
  }
  app.mount(div);
}
