<template>
	<div class="maincont">
		<header>
			<a href="javascript:history.back(-1)" class="back-off fl"><span class="glyphicon glyphicon-menu-left"></span></a>
			<div class="head-mid">
				<form action="#" method="get" class="prosearch"><input type="text" /></form>
			</div>
		</header>
		<ul class="pro-select">
			<li class="pro-selCur">
				<a href="javascript:;">新品</a>
			</li>
			<li>
				<a href="javascript:;">销量</a>
			</li>
			<li>
				<a href="javascript:;">价格</a>
			</li>
		</ul>
		<!--pro-select/-->
		<div class="prolist">
			<dl v-for="(item,index) in list">
				<dt><router-link :to="'/page/'+(index+1)"><img :src="['src/assets/'+item.src]" width="100" height="100" /></router-link></dt>
				<dd>
					<h3><router-link :to="'/page/'+(index+1)">{{item.jie}}</router-link></h3>
					<div class="prolist-price"><strong>¥{{item.price}}</strong> <span>¥599</span></div>
					<div class="prolist-yishou"><span>5.0折</span> <em>已售：35</em></div>
				</dd>
				<div class="clearfix"></div>
			</dl>
		</div>
		<!--prolist/-->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			}
		},
		mounted() {
			this.$http({
				url: 'http://localhost:3000/prolist',
				method: 'get'
			}).then((res) => {
				this.list = res.data;
			}).catch((res) => {

			})
		}
	}
</script>

<style>

</style>