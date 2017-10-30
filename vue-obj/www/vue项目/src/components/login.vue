<template>
	<div>
	<header>
      <a href="javascript:history.back(-1)" class="back-off fl"><span class="glyphicon glyphicon-menu-left"></span></a>
      <div class="head-mid">
       <h1>会员登录</h1>
      </div>
     </header>
     <div class="head-top">
      <img src="../assets/images/head.jpg" />
     </div><!--head-top/-->
     <form  class="reg-login">
      <h3>还没有三级分销账号？点此<router-link to="/reg" class="orange">注册</router-link></h3>
      <div class="lrBox">
       <div class="lrList"><input type="text" v-model="username"  placeholder="输入用户名" /></div>
       <div class="lrList"><input type="text" v-model="password"  placeholder="输入证码" /></div>
      </div><!--lrBox/-->
      <div class="lrSub">
       <input type="button" @click="request" value="立即登录" />
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
	        url:'http://localhost:3000/login',
	        method:'post',
	        withCredentials: true,
	        data:{
	        	username:this.username,
	        	password:this.password
	        }
	      }).then((res)=>{
	      	if(res.data.error==0){
	      		this.$router.push({path:'/user'})
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