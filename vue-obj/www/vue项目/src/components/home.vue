<template>
	<div class="maincont">
     <div class="head-top">
      <img src="src/assets/images/head.jpg" />
      <dl>
       <dt><a href="user.html"><img src="src/assets/images/touxiang.jpg" /></a></dt>
       <dd>
        <h1 class="username">三级分销旗舰店</h1>
        <ul>
         <li><router-link to="prolist"><strong>34</strong><p>全部商品</p></router-link></li>
         <li><a href="javascript:;"><span class="glyphicon glyphicon-star-empty"></span><p>收藏本店</p></a></li>
         <li style="background:none;"><a href="javascript:;"><span class="glyphicon glyphicon-picture"></span><p>二维码</p></a></li>
         <div class="clearfix"></div>
        </ul>
       </dd>
       <div class="clearfix"></div>
      </dl>
     </div><!--head-top/-->
     <form action="#" method="get" class="search">
      <input type="text" class="seaText fl" />
      <input type="submit" value="搜索" class="seaSub fr" />
     </form><!--search/-->
 
      <swipe class="my-swipe">
		  <swipe-item class="slide1" v-for="(item,index) in banner"><img :src="item.src"></swipe-item>
	  </swipe>       
     <ul class="pronav">
      <li><router-link to="prolist">晋恩干红</router-link></li>
      <li><router-link to="prolist">万能手链</router-link></li>
      <li><router-link to="prolist">高级手镯</router-link></li>
      <li><router-link to="prolist">特异戒指</router-link></li>
      <div class="clearfix"></div>
     </ul><!--pronav/-->
     <div class="index-pro1">       
      <div class="index-pro1-list"  v-for="(item,index) in list" v-if="index<=15">
       <dl>
        <dt><router-link :to="'/page/'+(index+1)"><img :src="['src/assets/'+item.src]" /></router-link></dt>
        <dd class="ip-text"><router-link :to="'/page/'+index">{{item.jie}}</router-link></dd>
        <dd class="ip-price"><strong>¥{{item.price}}</strong> <span>¥599</span></dd>
       </dl>
      </div>
      <div class="clearfix"></div>
     </div><!--index-pro1/-->
     <div class="prolist">
      <dl v-for="(item,index) in list" v-if="index>15">
       <dt><router-link :to="'/page/'+(index+1)"><img :src="['src/assets/'+item.src]" width="100" height="100" /></router-link></dt>
       <dd>
        <h3><router-link :to="'/page/'+(index+1)">{{item.jie}}</router-link></h3>
        <div class="prolist-price"><strong>¥{{item.price}}</strong> <span>¥599</span></div>
        <div class="prolist-yishou"><span>5.0折</span> <em>已售：35</em></div>
       </dd>
       <div class="clearfix"></div>
      </dl>
     </div><!--prolist/-->
     <div class="joins"><router-link to="/fenxiao"><img src="src/assets/images/jrwm.jpg" /></router-link></div>
     <div class="copyright">Copyright &copy; <span class="blue">这是就是三级分销底部信息</span></div>
    </div>
    
</template>

<script>
 import "../assets/css/vue-swipe.css"
 import { Swipe, SwipeItem } from 'vue-swipe';
  export default{
    components: {
     'swipe': Swipe,
     'swipe-item': SwipeItem
    },
    data(){
      return {
        list:[],
        banner:[]
      }
    },
    mounted(){
      this.$http({
        url:'http://localhost:3000/home',
        method:'get'
      }).then((res)=>{
        this.list=res.data;
      }).catch((res)=>{
        console.log(res)
      });
      this.$http({
        url:'http://localhost:3000/banner',
        method:'get'
      }).then((res)=>{
        this.banner=res.data;
      }).catch((res)=>{
      });
      
    }
  }
</script>

<style>
	
.my-swipe {
  height: 360px;
  margin-left: 17px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
</style>