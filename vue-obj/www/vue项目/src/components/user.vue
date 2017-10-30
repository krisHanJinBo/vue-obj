<template>
	<div>
		<div class="maincont">
			<div class="userName" style="height:300px">

				<div v-show="hh">
					<dl class="names">
						<dt><img :src="user.src" /></dt>
						<dd>
							<h3>{{user.username}}</h3>
						</dd>
						<div class="clearfix"></div>
					</dl>
					<div class="shouyi">
						<dl>
							<dt>我的余额</dt>
							<dd>{{user.ye}}元</dd>
						</dl>
						<dl>
							<dt>我的积分</dt>
							<dd>{{user.jf}}</dd>
						</dl>
						<div class="clearfix"></div>
					</div>
				</div>

				<div class="shouyi" v-show="jj">
					<ul class="reg-login-click">
						<li>
							<router-link to="/login">登录</router-link>
						</li>
						<li>
							<router-link to="/reg">注册</router-link>
						</li>
						<div class="clearfix"></div>
					</ul>
					<div class="clearfix"></div>
				</div>
			</div>
			<!--userName/-->

			<ul class="userNav">

				<div class="height2"></div>

				<li><span class="glyphicon glyphicon-usd"></span>
					<a href="quan.html">我的优惠券</a>
				</li>
				<li><span class="glyphicon glyphicon-map-marker"></span>
					<a href="add-address.html">收货地址管理</a>
				</li>
				<li><span class="glyphicon glyphicon-star-empty"></span>
					<a href="shoucang.html">我的收藏</a>
				</li>
				<li><span class="glyphicon glyphicon-heart"></span>
					<a href="shoucang.html">我的浏览记录</a>
				</li>
				<li><span class="glyphicon glyphicon-usd"></span>
					<a href="tixian.html">余额提现</a>
				</li>
			</ul>
			<!--userNav/-->
		</div>
		<div id="exit" v-show="hh" @click="exit">退出登录</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				hh: false,
				jj: true,
				user: ""
			}
		},
		mounted() {
			this.$http({
				url: 'http://localhost:3000/user',
				method: 'post',
				withCredentials: true,
			}).then((res) => {
				if(res.data.error == 1) {} else {
					this.hh = true;
					this.jj = false;
					this.user = res.data[0]
				}
			}).catch((res) => {

			});
		},
		methods: {
			exit() {
				this.$http({
					url: 'http://localhost:3000/exit',
					method: 'post',
					withCredentials: true,
				}).then((res) => {
					if(res.data.error == 0) {
						this.$router.push({ path: '/home' })
					}
				}).catch((res) => {

				});
			}
		}
	}
</script>

<style>
	#exit {
		height: 50px;
		text-align: center;
		line-height: 50px;
		margin-top: 12px;
		background: dodgerblue;
		font-size: 18px;
	}
</style>