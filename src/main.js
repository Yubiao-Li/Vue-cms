import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import moment from "moment"

Vue.filter('dateFormat', function (dateStr,pattern = "YYYY-MM-DD hh:mm:ss")
{   
    return moment(dateStr).format(pattern)
})

// mint-ui
import { Header, Swipe, SwipeItem,Button } from "mint-ui";
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

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