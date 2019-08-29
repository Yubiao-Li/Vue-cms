<template>
	<div class="photoinfo-container">
		<h3>{{info.title}}</h3>
		<p class="subtitle">
			<span>发表时间：{{info.add_time | dateFormat}}</span>
			<span>点击：{{info.click}}</span>
		</p>

		<hr>

		<!-- 缩略图区域 -->
		<div class="thumbs">
			<vue-preview :slides="slide"></vue-preview>
		</div>

		<!-- 图片内容区域 -->
		<div class="content" v-html="info.content"></div>

		<!-- 评论子组件 -->
		<comment :id="$route.params.id"></comment>
	</div>
</template>
 
<script>
	import Comment from "../../subcomponents/Comment.vue";
	export default {
		created() {
			this.getInfo();
			this.getThumbs();
		},
		data() {
			return {
				info: {},
				slide: []
			};
		},
		methods: {
			getInfo() {
				fetch(
					`http://www.liulongbin.top:3005/api/getimageinfo/${
						this.$route.params.id
					}`
				)
					.then(res => res.json())
					.then(result => (this.info = result.message[0]));
			},
			getThumbs() {
				fetch(
					`http://www.liulongbin.top:3005/api/getthumimages/${
						this.$route.params.id
					}`
				)
					.then(res => res.json())
					.then(result => {
						result.message.forEach(item => {
							item.w = 600;
							item.h = 600;
							item.msrc = item.src;
						});
						this.slide = result.message;
					});
			}
		},
		components: {
			Comment
		}
	};
</script>
 
<style lang = "scss">
	.photoinfo-container {
		padding: 3px;
		h3 {
			color: #26a2ff;
			font-size: 15px;
			text-align: center;
			margin: 15px 0;
		}
		.subtitle {
			display: flex;
			justify-content: space-between;
			font-size: 13px;
		}

		.content {
			font-size: 13px;
			line-height: 25px;
		}
	}

	.thumbs {
		.my-gallery {
			margin: auto;
			display: flex;
			flex-wrap: wrap;
			figure {
				margin: 2px;
				width: 32%;
				height: 100px;
				img {
					box-shadow: 0 0 8px #999;
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>