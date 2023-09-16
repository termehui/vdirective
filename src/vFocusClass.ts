import { ObjectDirective } from "@vue/runtime-core";

/**
 * @private
 * handler function signature
 */
type handlerFunc = () => void;

/**
 * @private
 * handlers list signature
 */
interface FocusHandlers {
    el: HTMLElement;
    handler: handlerFunc;
}

/**
 * @private
 * handlers array
 */
const handlers: Array<FocusHandlers> = [];

/**
 * Toggle class on element focus/blur
 */
export const VFocusClass: ObjectDirective<HTMLElement> = {
    mounted(el, { value }) {
        const cls = value || "has-focus";
        const func = () => {
            setTimeout(() => {
                if (
                    el &&
                    (el.contains(document.activeElement) ||
                        el == document.activeElement)
                ) {
                    el.classList.add(cls);
                } else {
                    el.classList.remove(cls);
                }
            });
        };

        handlers.push({
            el,
            handler: func
        });
        document.addEventListener("focusin", func);
        document.addEventListener("focusout", func);
    },
    unmounted(el) {
        for (let i = 0; i < handlers.length; i++) {
            const handler = handlers[i];
            if (handler.el == el) {
                handlers.splice(i, 1);
                document.removeEventListener("focusin", handler.handler);
                document.removeEventListener("focusout", handler.handler);
                break;
            }
        }
    }
};
