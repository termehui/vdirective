import { createApp } from "vue";
import App from "./App.vue";
import vDirective from "../src/index";

createApp(App)
    .use(vDirective)
    .mount("#app");
