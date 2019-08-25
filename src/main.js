import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import { Header, Tabbar, TabItem } from "mint-ui";
Vue.component(Header.name, Header)
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

import App from './App.vue'

new Vue({
    el: "#app",
    render: createElement => createElement(App)
})