import { createApp } from "vue";
import HomeItem from './HomeItem.vue';
const app = createApp(HomeItem);

import '@arco-design/web-vue/es/list/style/css.js';
import '@arco-design/web-vue/es/link/style/css.js';
import '@arco-design/web-vue/es/card/style/css.js';
import '@arco-design/web-vue/es/avatar/style/css.js';
import '@arco-design/web-vue/es/button/style/css.js';
import '@arco-design/web-vue/es/table/style/css.js';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
app.use(ArcoVueIcon);
app.mount(`body`);