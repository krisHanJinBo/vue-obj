<template>
	<div>
	<header>
      <a href="javascript:history.back(-1)" class="back-off fl"><span class="glyphicon glyphicon-menu-left"></span></a>
      <div class="head-mid">
       <h1>会员注册</h1>
      </div>
     </header>
     <div class="head-top">
      <img src="../assets/images/head.jpg" />
     </div><!--head-top/-->
     <form  class="reg-login">
      <h3>已经有账号了？点此<router-link to="/reg" class="orange">登录</router-link></h3>
      <div class="lrBox">
       <div class="lrList"><input type="text" placeholder="输入用户名" v-model="username"/></div>
       <div class="lrList2"><input type="text" placeholder="输入短信验证码" /> <button>获取验证码</button></div>
       <div class="lrList"><input type="text" placeholder="输入密码"  v-model="password"/></div>
      </div><!--lrBox/-->
      <div class="lrSub">
       <input type="button" @click="request" value="立即注册" />
      </div>
     </form><!--reg-login/-->
	</div>
</template>

<script>
		export default{
	data(){
      return {
        username:"",
        password:""
      }
     },
	methods:{
	 request(){
	      this.$http({
	        url:'http://localhost:3000/reg',
	        method:'post',
	        data:{
	        	username:this.username,
	        	password:this.password
	        }
	      }).then((res)=>{
	      	if(res.data.error==0){
	      		this.$router.push({path:'/login'})
	      	}else{
                this.$router.push({path:'/error'})
	      	}	        
	      }).catch((res)=>{
	        
	      });
      }
	}
 }
</script>

<style>
</style>