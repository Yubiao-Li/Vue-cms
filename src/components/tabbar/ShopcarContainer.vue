<template>
	<div class="shopcar-container">
		<!-- 商品列表区域 -->
		<div class="goods-list">
			<div class="mui-card" v-for="(item,index) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="select[item.id]" @change="selectChange(item.id)"></mt-switch>
						<img :src="item.thumb_path" alt>
						<div class="info">
							<h1>{{item.title}}</h1>
							<p>
								<span class="price">￥{{item.sell_price}}</span>
								<numbox :item="item" :initCount="count[item.id]"></numbox>
								<a href="#" @click="remove(item.id,index)">删除</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- 结算区域 -->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner jiesuan">
					<div class="left">
						<p>总计（不含运费）</p>
						<p>
							已勾选商品
							<span class="red">{{$store.getters.getCountAndAmount.count}}</span> 件， 总价
							<span class="red">￥{{$store.getters.getCountAndAmount.amount}}</span>
						</p>
					</div>
					<mt-button type="danger">去结算</mt-button>
				</div>
			</div>
		</div>
	</div>
</template>
 
<script>
	import numbox from "../../subcomponents/ShopCarNumbox.vue";
	export default {
		components: {
			numbox
		},
		data() {
			return {
				goodslist: [],
				count: {},
				select: {}
			};
		},
		created() {
			this.getGoodsList();
		},
		methods: {
			getGoodsList() {
				let idArr = [];
				this.$store.state.car.forEach(v => {
					idArr.push(v.id);
					this.count[v.id] = v.count;
					this.select[v.id] = v.select;
				});
				if (idArr.length == 0) return;
				fetch(
					`http://www.liulongbin.top:3005/api/goods/getshopcarlist/` +
						idArr.join(",")
				)
					.then(res => res.json())
					.then(result => {
						this.goodslist = result.message;
					});
			},

			remove(id, index) {
				this.goodslist.splice(index, 1);
				this.$store.commit("deleteGoodsInfo", id);
			},

			selectChange(id) {
				this.$store.commit("selectChange", id);
			}
		}
	};
</script>
 
<style scoped lang = "scss">
	.shopcar-container {
		background-color: #eee;
		overflow: hidden;

		.goods-list {
			.mui-card-content-inner {
				display: flex;
				align-items: center;
			}
			img {
				width: 60px;
				height: 60px;
			}
			h1 {
				font-size: 13px;
			}
			.info {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.price {
					color: red;
					font-weight: bold;
				}
			}
		}

		.jiesuan {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.red {
				color: red;
				font-weight: bold;
				font-size: 16px;
			}
		}
	}
</style>