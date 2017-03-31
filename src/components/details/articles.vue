<template lang="html">
	<div class="">

		<div class="article" v-for="(article, index) in articles">
			<div class="article-time">
				<i class="icono-exclamationCircle"></i>
				<time>{{ getTimeStr(article.createTime) }}</time>
			</div>
			<div class="article-module">
				<div class="article-text">
					<h3 class="article-title">
						<a :href="article.link">{{ article.title }}</a>
					</h3>
					<div class="article-info">
						<span><i class="icono-eye"></i><em>{{ article.likes }}</em></span>
						<span><i class="icono-commentEmpty"></i><em>{{ article.views }}</em></span>
						<span><i class="icono-heart"></i><em>{{ article.commit }}</em></span>
					</div>
				</div>
				<div v-if="article.coverImage" class="article-coverImage">
					<img :src="article.coverImage" alt="">
				</div>
			</div>
		</div>

		<div class="noMoreArticle">
			<span>无更多文章</span>
		</div>
	</div>
</template>

<script>
import data from '../../data/articles.json'


export default {
	data () {
		return {
			articles: data.data,
		}
	},
	methods: {
		getTimeStr (stamp) {
			var time = new Date(stamp)
			var o = {
				Y: time.getFullYear(),
				M: time.getMonth() + 1,
				D: time.getDate(),
				h: time.getHours(),
				m: time.getMinutes(),
				s: time.getSeconds(),
			}

			return `${o.Y}-${o.M}-${o.D} ${o.h}:${o.m}:${o.s}`
		}
	}
}
</script>

<style lang="css">
.article {
	margin: 0 15px;
	border-bottom: 1px solid #eee;
	padding: 20px 0;
}
.article-time {
	display: flex;
	align-items: center;
	color: #999;
	margin-bottom: 5px;
}

.article-time i {
	zoom: 0.6;
	background: #333;
	vertical-align: middle;
}
.article-time time {
	margin-left: 5px;
}

.article-module {
	display: flex;
	justify-content: space-between;
}

.article-coverImage {
	flex-basis: 100px;
	flex-shrink: 0;
}
.article-coverImage img {
	margin-top: 5px;
	border: 1px solid #eee;
	border-radius: 2px;
	width: 100%;
}
.article-title {
	line-height: 1.6;
	padding-right: 10px;
}
.article-title a {
	text-decoration: none;
	color: inherit;
}

.article-info {
	margin-top: 10px;
	color: #999;
	font-weight: 300;
}
.article-info em {
	font-style: normal;
	padding: 0 5px;
}
.article-info i {
	zoom: 0.5;
}

.noMoreArticle {
	height: 160px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.noMoreArticle span {
	padding: 8px 20px;
	border: 1px solid #ccc;
	border-radius: 4px;
	color: #ccc;
}
</style>
