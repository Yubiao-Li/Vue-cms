<template>
	<div class="goods-list">
		<router-link
			class="goods-item"
			v-for="item in goodsList"
			:key="item.id"
			tag="div"
			:to="`/home/goodsinfo/${item.id}`"
		>
			<img :src="item.img_url" alt>
			<h1 class="title">{{item.title}}</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥{{item.sell_price}}</span>
					<span class="old">￥{{item.market_price}}</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩{{item.stock_quantity}}件</span>
				</p>
			</div>
		</router-link>

		<mt-button type="danger" size="large" @click="loadMore">加载更多</mt-button>
	</div>
</template>
 
<script>
	export default {
		data() {
			return {
				goodsList: [],
				pageIndex: 1
			};
		},
		created() {
			this.getGoods();
		},
		methods: {
			getGoods() {
				fetch(
					`http://www.liulongbin.top:3005/api/getgoods?pageindex=${
						this.pageIndex
					}`
				)
					.then(res => res.json())
					.then(result => {
						this.goodsList = this.goodsList.concat(result.message);
					});
			},

			loadMore() {
				this.pageIndex++;
				this.getGoods();
			}
		}
	};
</script>
 
<style scoped lang = "scss">
	.goods-list {
		display: flex;
		flex-wrap: wrap;
		padding: 5px;
		justify-content: space-between;
		.goods-item {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			min-height: 293px;
			width: 49%;
			padding: 2px;
			border: 1px solid #ccc;
			box-shadow: 0 0 8px #ccc;
			margin-bottom: 4px;
			img {
				width: 100%;
			}
			.title {
				font-size: 14px;
			}
			.info {
				background-color: #eee;
				p {
					margin: 0;
					padding: 5px;
				}
				.price {
					.now {
						color: red;
						font-weight: bold;
						font-size: 16px;
					}
					.old {
						text-decoration: line-through;
						font-size: 12px;
						margin-left: 10px;
					}
				}
				.sell {
					display: flex;
					justify-content: space-between;
					font-size: 12px;
				}
			}
		}
	}
</style>