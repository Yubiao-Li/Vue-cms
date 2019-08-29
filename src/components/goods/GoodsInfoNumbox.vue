<template>
	<div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input id="test" class="mui-input-numbox" @change="onChange" ref="numbox" type="number" value="1">
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>
 
<script>
import mui from "../../lib/js/mui.js"
	export default {
		methods:{
			onChange(){
				this.$emit('change', parseInt(this.$refs.numbox.value))
			}
		},
		props:['max'],
		watch:{
			max(newVal){
				mui('.mui-numbox').numbox().setOption('max',newVal)
			}
		}
	};
</script>
 
<style scoped lang = "scss">
</style>