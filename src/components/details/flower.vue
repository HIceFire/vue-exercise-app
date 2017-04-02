<template lang="html">
	<div id="flowers">
		<div class="flower-banner">
			<ul class="clear" :style="{ left: bannerLeft + '%' }">
				<li v-for="imgUrl in flower.banner_imglist"><img :src="imgUrl" alt=""></li>
			</ul>
		</div>
		<div class="flower-ad">
			<img :src="flower.adImage" alt="">
		</div>
		<div class="flower-goods">
			<div class="flower-goods-item" v-for="good in flower.goods">
				<img :src="good.coverImage" alt="">
				<dl>
						<dt>
							<h3>{{ good.title }}</h3>
							<em>{{ '￥' + good.price }}</em>
						</dt>
						<dd>{{ good.description }}</dd>
					</dl>
			</div>
		</div>
		<div class="flower-footer">
			<p>© 2017 ****网络科技有限公司</p>
			<p>沪ICP备13****79号</p>
		</div>
	</div>
</template>

<script>
import data from '../../data/flowers.json'

export default {
	data () {
		return {
			flower: data.data,
			bannerLeft: 0,
		}
	},
	created () {
		this.changeBannerLeft()
	},
	methods: {
		// 轮播图
		changeBannerLeft () {
			var _this = this
			var unit = -100
			setInterval(function () {
				_this.bannerLeft += unit
				if ( _this.bannerLeft === -400 || _this.bannerLeft === 0 ) {
					unit = -unit
				}
			}, 3000)
		}
	}
}
</script>

<style lang="css">
.flower-ad img {
	width: 100%;
}
.flower-banner {
	overflow: hidden;
}
.flower-banner ul {
	width: 500%;
	position: relative;
	transition: 1s;
}
.flower-banner ul li {
	float: left;
	width: 20%;
}
.flower-banner img {
	width: 100%;
}

.flower-goods-item {
	margin: 25px 15px 0;
	background-color: #f0f0f0;
}
.flower-goods-item img {
	width: 100%;
}
.flower-goods-item dl {
	padding: 10px;
}
.flower-goods-item dd {
	color: #999;
	font-size: 12px;
	padding-top: 15px;
}

.flower-goods-item dt {
	display: flex;
	justify-content: space-between;
}
.flower-goods-item em {
	font-size: 24px;
	color: #555;
}

.flower-goods-item h3 {
	font-size: 24px;
	font-weight: 500;
	color: #333;
}

.flower-footer {
	margin-top: 35px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 120px;
	background-color: #f5f5f5;
	color: #515151;
	font-size: 12px;
	line-height: 1.8;
}
</style>
