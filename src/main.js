import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

// mint-ui
import { Header, Swipe, SwipeItem } from "mint-ui";
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// mui
import './lib/css/mui.min.css'
import './lib/css/icons-extra.css'

import router from './router.js'

import App from './App.vue'

new Vue({
    el: "#app",
    render: createElement => createElement(App),
    router
})