<template>
	<div class="cmt-container">
		<h3>发表评论</h3>
		<hr>
		<textarea v-model="msg" placeholder="请输入内容，最多120字" maxlength="120"></textarea>
		<mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

		<div class="cmt-list">
			<div class="cmt-item" v-for="(item,index) in comments" :key="item.id">
				<div
					class="cmt-title"
				>第{{index+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}</div>
				<div class="cmt-body">{{item.content || '此用户很懒，暂无评论'}}</div>
			</div>
		</div>

		<mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
	</div>
</template>
 
<script>
	import { Toast } from "mint-ui";
	export default {
		data() {
			return {
				pageIndex: 1,
				comments: [],
				msg: ""
			};
		},
		props: ["id"],
		created() {
			this.getComments();
		},
		methods: {
			getComments() {
				fetch(
					"http://www.liulongbin.top:3005/api/getcomments/" +
						this.id +
						"?pageindex=" +
						this.pageIndex
				)
					.then(res => res.json())
					.then(result => {
						if (result.status == 0) {
							this.comments = this.comments.concat(result.message);
						}
					});
			},

			getMore() {
				this.pageIndex++;
				this.getComments();
			},

			postComment() {
				if (this.msg.trim().length == 0) {
					return Toast("评论不能为空");
				}
				fetch("http://www.liulongbin.top:3005/api/postcomment/" + this.id, {
					method: "POST",
					mode: "no-cors",
					headers: {
						"Content-Type": "application/json"
					},
					body: {
						content: this.msg.trim()
					}
				})
					.then(res => res.json())
					.then(result => {
						console.log(result);
						if (result.status == 0) {
							let cmt = {
								user_name: "匿名用户",
								add_time: Date.now(),
								content: this.msg.trim()
							};
							this.comments.unshift(cmt);
							this.msg = "";
						}
					});
			}
		}
	};
</script>
 
<style scoped lang = "scss">
	.cmt-container {
		h3 {
			font-size: 18px;
		}
		textarea {
			font-size: 14px;
			height: 85px;
			margin: 0;
		}

		.cmt-list {
			margin: 10px 0;
			.cmt-item {
				font-size: 13px;
				.cmt-title {
					line-height: 30px;
					background-color: #ccc;
				}
				.cmt-body {
					line-height: 35px;
					text-indent: 2em;
				}
			}
		}
	}
</style>