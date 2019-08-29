<template>
	<div class="mui-numbox" data-numbox-min="1" style="height:25px;" data-numbox-max="9">
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input
			id="test"
			class="mui-input-numbox"
			@change="onChange"
			ref="numbox"
			type="number"
			:value="initCount"
		>
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>
 
<script>
	import mui from "../lib/js/mui.js";
	export default {
		mounted() {
			mui(".mui-numbox").numbox();
		},
		methods: {
			onChange() {
				this.item.count = parseInt(this.$refs.numbox.value);

				this.$store.commit("updateGoodsInfo", this.item);
			}
		},
		props: ["initCount", "item"]
	};
</script>
 
<style scoped lang = "scss">
</style>