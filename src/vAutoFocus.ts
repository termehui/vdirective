import { ObjectDirective } from "@vue/runtime-core";
import { getInput } from "./utils";

/**
 * Auto focus element on load
 */
export const VAutoFocus: ObjectDirective<any> = {
    mounted(_el) {
        const el = getInput(_el);
        el && el.focus();
    }
};
