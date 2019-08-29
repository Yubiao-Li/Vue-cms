<template>
	<div>
		<!-- 顶部滑动条区域 -->
		<div id="slider" class="mui-slider">
			<div
				id="sliderSegmentedControl"
				class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
			>
				<div class="mui-scroll">
					<a
						@click="getPhotoListByCateId(item.id)"
						v-for="item in catefory"
						:key="item.id"
						:class="['mui-control-item', item.id==0 ? 'mui-active':'']"
					>{{item.title}}</a>
				</div>
			</div>
		</div>

		<!-- 图片列表 -->
		<ul class="photo-list">
			<router-link v-for="item in list" :key="item.id" :to="`/home/photoinfo/${item.id}`" tag="li">
				<img v-lazy="item.img_url">
				<div class="info">
					<h1 class="info-title">{{item.seo_title}}</h1>
					<div class="info-body">{{item.seo_description}}</div>
				</div>
			</router-link>
		</ul>
	</div>
</template>
 
<script>
	import mui from "../../lib/js/mui.js";

	export default {
		data() {
			return {
				catefory: [],
				list: []
			};
		},
		created() {
			this.getAllCatefory();
			this.getPhotoListByCateId(0);
		},
		mounted() {
			mui(".mui-scroll-wrapper").scroll({
				deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			});
		},
		methods: {
			getAllCatefory() {
				fetch("http://www.liulongbin.top:3005/api/getimgcategory")
					.then(res => res.json())
					.then(result => {
						this.catefory = result.message;
						this.catefory.unshift({
							title: "全部",
							id: 0
						});
					});
			},

			getPhotoListByCateId(cateId) {
				fetch(`http://www.liulongbin.top:3005/api/getimages/${cateId}`)
					.then(res => res.json())
					.then(result => {
						this.list = result.message;
					});
			}
		}
	};
</script>
 
<style scoped lang = "scss">
	.photo-list {
		list-style: none;
		margin: 0;
		padding: 10px;
		padding-bottom: 0;
		li {
			background-color: #ccc;
			text-align: center;
			margin-bottom: 10px;
			box-shadow: 0 0 6px #999;
			position: relative;
			img {
				width: 100%;
				vertical-align: middle;
			}
			img[lazy="loading"] {
				width: 40px;
				height: 300px;
				margin: auto;
			}

			.info {
				color: white;
				text-align: left;
				position: absolute;
				bottom: 0;
				background-color: rgba(0, 0, 0, 0.4);
				max-height: 84px;
				.info-title {
					font-size: 14px;
				}
				.info-body {
					font-size: 13px;
				}
			}
		}
	}
</style>