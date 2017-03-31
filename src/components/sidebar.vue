<template lang="html">
	<div id="sidebar" :style="{ 'left': sideBarLeft + 'px' }">
		<div class="avatar-box">
			<img :src="avatar" alt="头像" class="avatar">
			<p>{{ name }}</p>
		</div>
		<ul>
			<li v-for="item in navs">
				<router-link :to="item.router" :class="{ weak: !item.isStrong  }">{{ item.title }}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import JSON_NAVS from '../data/sidebar.json'

export default {
	data () {
		return {
			navs: JSON_NAVS.data.columns,
			avatar: JSON_NAVS.data.avatar,
			name: JSON_NAVS.data.name,
		}
	},
	computed: {
    sideBarLeft () {
      return this.$store.state.sideBarHasOpen ? 0 : -220
    },
  }
}
</script>

<style lang="css">
#sidebar {
	width: 220px;
	height: 100%;
	background: #fff;
	position: fixed;
	z-index: 1;
	transition: 0.5s;
	overflow: auto;
}

#sidebar ul {
	margin: 20px 0;
}

#sidebar a {
	display: inline-block;
	text-decoration: none;
	color: inherit;
	line-height: 2.0;
	width: 100%;
	height: 100%;
	text-indent: 2em;
}

#sidebar a.weak {
	font-weight: 300;
	color: #777;
	/*font-size: 15px;*/
}

#sidebar a.active {
	color: #94399E;
}

.avatar-box {
	position: relative;
	right: 2px;		/* 感觉这个居中是假的，手动偏移2px */
	width: 100%;
	height: 160px;
	border-bottom: 1px solid #eee;
	text-align: center;
}
.avatar {
	border-radius: 50%;
	width: 65px;
	height: 65px;
	margin-top: 30px;
}
.avatar-box p {
	margin-top: 10px;
	color: #999966;
}
</style>
