<template>
	<div class="app-container">
		<mt-header fixed title="Vue项目"></mt-header>
		<h1>123</h1>

		<mt-tabbar v-model="selected">
			<mt-tab-item id="首页">
				<img slot="icon" src="./assets/100x100.png">
				首页
			</mt-tab-item>
			<mt-tab-item id="订单">
				<img slot="icon" src="./assets/100x100.png">
				订单
			</mt-tab-item>
			<mt-tab-item id="发现">
				<img slot="icon" src="./assets/100x100.png">
				发现
			</mt-tab-item>
			<mt-tab-item id="我的">
				<img slot="icon" src="./assets/100x100.png">
				我的
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
	export default {};
</script>

<style lang="scss" scoped>
	.app-container {
		padding-top: 40px;
	}
</style>

