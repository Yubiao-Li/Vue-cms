<template>
	<div>
		<ul class="mui-table-view">
			<li v-for="item in newsList" :key="item.id" class="mui-table-view-cell mui-media">
				<router-link :to="'/home/newsinfo/'+ item.id">
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						<h1>{{item.title}}</h1>
						<p class="mui-ellipsis">
							<span>发表时间:{{ item.add_time | dateFormat }}</span>
							<span>点击:{{item.click}}</span>
						</p>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>
 
<script>
	import { Toast } from "mint-ui";
	export default {
		data() {
			return {
				newsList: []
			};
		},
		created() {
			fetch("http://www.liulongbin.top:3005/api/getnewslist")
				.then(res => res.json())
				.then(result => {
					if (result.status == 0) {
						this.newsList = result.message;
					} else {
						Toast("获取新闻列表失败");
					}
				});
		}
	};
</script>
 
<style scoped lang = "scss">
	.mui-table-view {
		li {
			h1 {
				font-size: 15px;
			}
			.mui-ellipsis {
				font-size: 12px;
				color: #226aff;
				display: flex;
				justify-content: space-between;
			}
		}
	}
</style>