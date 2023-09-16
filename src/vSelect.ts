import { ObjectDirective } from "@vue/runtime-core";
import { getInput } from "./utils";

/**
 * Auto select input value on focus or up/down keys
 */
export const VSelect: ObjectDirective<any> = {
    mounted(_el, { value }) {
        const el = getInput(_el);
        if (!el) return;
        const separator = value || "";
        el.addEventListener("click", () => {
            if (
                document.activeElement === el &&
                el.selectionStart === el.selectionEnd
            ) {
                let start = 0;
                let end = el.value.length;
                if (separator) {
                    for (let i = (el.selectionStart || 1) - 1; i > 0; i--) {
                        if (el.value.substr(i, 1) === separator) {
                            start = i + 1;
                            break;
                        }
                    }
                    for (
                        let i = el.selectionStart || 0;
                        i < el.value.length;
                        i++
                    ) {
                        if (el.value.substr(i, 1) === separator) {
                            end = i;
                            break;
                        }
                    }
                }
                el.setSelectionRange(start, end, "forward");
            }
        });
    }
};
