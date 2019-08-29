<template>
	<div class="goodsinfo-container">
		<!-- 商品轮播图区域 -->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<swiper :isFull="false" :lunbotuList="lubotuList"></swiper>
				</div>
			</div>
		</div>

		<transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
			<div v-show="ballFlag" class="ball" ref="ball"></div>
		</transition>

		<!-- 商品购买区域 -->
		<div class="mui-card">
			<div class="mui-card-header">{{info.title}}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p class="price">
						市场价：
						<del>￥{{info.market_price}}</del>&nbsp;&nbsp;销售价：
						<span class="now_price">￥{{info.sell_price}}</span>
					</p>
					<p>
						购买数量：
						<goodsInfoNumbox :max="info.stock_quantity" @change="selectChange"></goodsInfoNumbox>
					</p>
					<p>
						<mt-button type="primary" size="small">立即购买</mt-button>
						<mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
					</p>
				</div>
			</div>
		</div>

		<div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>商品货号：{{info.goods_no}}</p>
					<p>库存情况：{{info.stock_quantity}}</p>
					<p>上架时间：{{info.add_time | dateFormat}}</p>
				</div>
			</div>
			<div class="mui-card-footer">
				<mt-button type="primary" size="large" plain @click="goDesc">图文介绍</mt-button>
				<mt-button type="danger" size="large" plain @click="goComment">商品评论</mt-button>
			</div>
		</div>
	</div>
</template>
 
<script>
	import Swiper from "../../subcomponents/Swiper.vue";
	import GoodsInfoNumbox from "./GoodsInfoNumbox.vue";
	export default {
		data() {
			return {
				lubotuList: [],
				info: {},
				ballFlag: false,
				selectNum: 1
			};
		},
		components: {
			Swiper,
			GoodsInfoNumbox
		},
		created() {
			this.getLunbotu();
			this.getGoodsInfo();
		},
		methods: {
			getLunbotu() {
				fetch(
					`http://www.liulongbin.top:3005/api/getthumimages/${
						this.$route.params.id
					}`
				)
					.then(res => res.json())
					.then(result => {
						this.lubotuList = result.message.map(item => {
							item.img = item.src;
							return item;
						});
					});
			},

			getGoodsInfo() {
				fetch(
					`http://www.liulongbin.top:3005/api/goods/getinfo/${
						this.$route.params.id
					}`
				)
					.then(res => res.json())
					.then(result => {
						this.info = result.message[0];
					});
			},

			goDesc() {
				this.$router.push({
					path: `/home/goodsdesc/${this.$route.params.id}`
				});
			},

			goComment() {
				this.$router.push({
					path: `/home/goodscomment/${this.$route.params.id}`
				});
			},

			addToShopCar() {
				this.ballFlag = !this.ballFlag;
				let shopcarItem = {
					id: this.$route.params.id,
					count: this.selectNum,
					price: this.info.sell_price,
					select: true
				};

				this.$store.commit("addToCar", shopcarItem);
			},

			beforeEnter(el) {
				el.style.transform = "translate(0,0)";
			},

			enter(el, done) {
				const ballPosition = this.$refs.ball.getBoundingClientRect();
				const badgePosition = document
					.getElementById("badge")
					.getBoundingClientRect();
				const xDist = badgePosition.left - ballPosition.left;
				const yDist = badgePosition.top - ballPosition.top;

				el.offsetWidth;
				el.style.transform = `translate(${xDist}px,${yDist}px)`;
				el.style.transition = "all 0.8s cubic-bezier(.67,-0.29,.54,1.18)";
				done();
			},

			afterEnter(el) {
				this.ballFlag = !this.ballFlag;
			},

			selectChange(e) {
				this.selectNum = e;
			}
		}
	};
</script>
 
<style scoped lang = "scss">
	.goodsinfo-container {
		background-color: #eee;

		.now_price {
			color: red;
			font-size: 16px;
			font-weight: bold;
		}

		.mui-card-footer {
			display: block;
			button {
				margin: 15px 0;
			}
		}

		.ball {
			width: 15px;
			height: 15px;
			border-radius: 50%;
			background-color: red;
			position: absolute;
			z-index: 99;
			top: 390px;
			left: 150px;
		}
	}
</style>