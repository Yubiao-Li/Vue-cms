<template>
	<div>
		<mt-swipe :auto="4000">
			<!-- 轮播图 -->
			<mt-swipe-item  v-for="item in lunbotuList" :key="item.id">
				<img :class="{'full':isFull}" :src="item.img" alt>
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>
 
<script>
	export default {
        props:['lunbotuList',"isFull"],
    };
</script>
 
<style scoped lang = "scss">
	.mint-swipe {
		height: 200px;
		text-align: center;

		.mint-swipe-item {
			img {
				height: 100%;
			}

			.full{
				width: 100%;
			}
		}
	}
</style>