import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)


import moment from "moment"
import VuePreview from 'vue-preview'

// defalut install
Vue.use(VuePreview)

Vue.filter('dateFormat', (dateStr, pattern = "YYYY-MM-DD hh:mm:ss") =>
{
    return moment(dateStr).format(pattern)
})

// mint-ui
// import { Header, Swipe, SwipeItem, Button } from "mint-ui";
// import { Lazyload } from 'mint-ui';
import MintUI from "mint-ui";
Vue.use(MintUI)
import "mint-ui/lib/style.css";

// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);

// mui
import './lib/css/mui.min.css'
import './lib/css/icons-extra.css'

import router from './router.js'
import store from "./store.js";

import App from './App.vue'

new Vue({
    el: "#app",
    render: createElement => createElement(App),
    router,
    store
})