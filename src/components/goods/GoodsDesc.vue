<template>
	<div class="goodsdesc-container">
		<h3>{{info.title}}</h3>
		<hr>
		<div class="content" v-html="info.content"></div>
	</div>
</template>
 
<script>
	export default {
		created() {
			this.getGoodsDesc();
		},
		data() {
			return {
				info: {}
			};
		},
		methods: {
			getGoodsDesc() {
				fetch(
					`http://www.liulongbin.top:3005/api/goods/getdesc/${
						this.$route.params.id
					}`
				)
					.then(res => res.json())
					.then(result => {
						this.info = result.message[0];
					});
			}
		}
	};
</script>
 
<style lang = "scss">
.goodsdesc-container{
    h3{
        font-size: 16px;
        color: #226aff;
        text-align: center;
        margin: 15px 0;
    }

    .content{
        img{
            width: 100%;
        }
    }
}
</style>