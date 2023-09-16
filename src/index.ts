import { App } from "vue";
import { VAutoFocus } from "./vAutoFocus";
import { VClear } from "./vClear";
import { VFocusClass } from "./vFocusClass";
import { VSelect } from "./vSelect";

export default {
    install: (app: App) => {
        app.directive("focus", VAutoFocus)
            .directive("clear", VClear)
            .directive("focus-class", VFocusClass)
            .directive("select", VSelect);
    },
};
export { VAutoFocus } from "./vAutoFocus";
export { VClear } from "./vClear";
export { VFocusClass } from "./vFocusClass";
export { VSelect } from "./vSelect";
