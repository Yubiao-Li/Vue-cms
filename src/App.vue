<template>
	<div class="app-container">
		<mt-header fixed title="Vue项目">
			<span v-show="flag" slot="left" @click="goBack">
				<mt-button icon="back">返回</mt-button>
			</span>
		</mt-header>

		<transition>
			<router-view></router-view>
		</transition>

		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge" id="badge">{{$store.getters.getCountAndAmount.count}}</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				flag: true
			};
		},
		created() {
			this.flag = this.$route.path == "/home" ? false : true;
		},
		methods: {
			goBack() {
				this.$router.go(-1);
			}
		},

		watch: {
			"$route.path": function(newVal) {
				console.log(newVal);
				if (newVal == "/home") {
					this.flag = false;
				} else {
					this.flag = true;
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	// * {
	// 	touch-action: pan-y;
	// }
	.mint-header {
		z-index: 99;
	}
	.app-container {
		padding-top: 40px;
		padding-bottom: 50px;
		overflow-x: hidden;
	}

	.v-enter {
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to {
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}

	.v-enter-active,
	.v-leave-active {
		transition: 0.5s all ease;
	}
</style>

