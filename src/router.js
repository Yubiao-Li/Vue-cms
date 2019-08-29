import VueRouter from "vue-router"

import HomeContainer from "./components/tabbar/HomeContainer.vue"
import NewsList from "./components/news/NewsList.vue"
import NewsInfo from "./components/news/NewsInfo.vue";
import PhotoList from "./components/photos/PhotoList.vue";
import PhotoInfo from "./components/photos/PhotoInfo.vue";
import GoodList from "./components/goods/GoodList.vue";
import GoodsInfo from "./components/goods/GoodsInfo.vue";
import GoodsDesc from "./components/goods/GoodsDesc.vue"
import GoodsComment from "./components/goods/GoodsComment.vue"
import MemberContainer from "./components/tabbar/MemberContainer.vue"
import ShopcarContainer from "./components/tabbar/ShopcarContainer.vue"
import SearchContainer from "./components/tabbar/SearchContainer.vue"

export default new VueRouter({
    routes: [
        { path: "/", redirect: "/home" },
        { path: "/home", component: HomeContainer },
        { path: "/home/newslist", component: NewsList },
        { path: "/home/newsinfo/:id", component: NewsInfo },
        { path: "/home/photolist", component: PhotoList },
        { path: "/home/photoinfo/:id", component: PhotoInfo },
        { path: "/home/goodslist", component: GoodList },
        { path: "/home/goodsinfo/:id", component: GoodsInfo },
        { path: "/home/goodsdesc/:id", component: GoodsDesc },
        { path: "/home/goodscomment/:id", component: GoodsComment },
        { path: "/member", component: MemberContainer },
        { path: "/shopcar", component: ShopcarContainer },
        { path: "/search", component: SearchContainer },
    ],
    linkActiveClass: "mui-active"
})