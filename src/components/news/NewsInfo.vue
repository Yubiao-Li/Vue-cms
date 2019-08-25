<template>
	<div class="newsinfo-container">
		<h3 class="title">{{info.title}}</h3>
		<p class="subtitle">
			<span>发表时间：{{ info.add_time | dateFormat }}</span>
			<span>点击：{{info.click}}</span>
		</p>

		<hr>

		<div class="content" v-html="info.content"></div>

        <comment :id="$route.params.id" />
	</div>
</template>
 
<script>
    import { Toast } from "mint-ui";
    import Comment from "../../subcomponents/Comment.vue"
	export default {
		data() {
			return {
				info: {}
			};
        },
        components:{
            Comment
        },
		created() {
			this.getNewsInfo();
		},
		methods: {
			getNewsInfo() {
				fetch(
					"http://www.liulongbin.top:3005/api/getnew/" +
						this.$route.params.id
				)
					.then(res => res.json())
					.then(result => {
						if (result.status == 0) {
							this.info = result.message[0];
						} else {
							Toast("获取新闻详情失败");
						}
					});
			}
		}
	};
</script>
 
<style scoped lang = "scss">
	.newsinfo-container {
		padding: 0 4px;
		.title {
			font-size: 16px;
			text-align: center;
			margin: 15px 0;
			color: red;
		}
		.subtitle {
			font-size: 13px;
			color: blue;
			display: flex;
			justify-content: space-between;
		}
	}
</style>