<template>
	<div>
	<div class="maincont">
     <header>
      <a href="javascript:history.back(-1)" class="back-off fl"><span class="glyphicon glyphicon-menu-left"></span></a>
      <div class="head-mid">
       <h1>产品详情</h1>
      </div>
     </header>
      <img :src="str+msg.src" />
     <table class="jia-len">
      <tr>
       <th><strong class="orange">¥{{msg.price}}</strong><span style="margin-left: 60px;">点击选取数量加入购物车</span></th>
       <td style="width:120px">      	         
            <input class="min" type="button" value="-" @click="del" />   
			<input class="text_box" type="text"  style="width:30px" v-model="count"/>   
			<input class="add" type="button" value="+" @click="add"/>  
       </td>
      </tr>
      <tr>
       <td>
        <strong>{{msg.jie}}</strong>
        <p class="hui">{{msg.name}}</p>
       </td>
       <td align="right">
        <a href="javascript:;" class="shoucang"><span class="glyphicon glyphicon-star-empty"></span></a>
       </td>
      </tr>
     </table>
     <div class="height2"></div>
     <h3 class="proTitle">商品规格</h3>
     <ul class="guige">
      <li class="guigeCur"><a href="javascript:;">50ML</a></li>
      <li><a href="javascript:;">100ML</a></li>
      <li><a href="javascript:;">150ML</a></li>
      <li><a href="javascript:;">200ML</a></li>
      <li><a href="javascript:;">300ML</a></li>
      <div class="clearfix"></div>
     </ul><!--guige/-->
     <div class="height2" style="text-align: center; line-height: 30px;"><router-link to="/home">回到首页</router-link></div>
   </div><!--maincont-->
	</div>
</template>

<script>
	export default{
    data(){
      return {
        msg:"",
        count:0,
        str:"http://localhost:8080/src/assets/"
      }
    },
    mounted(){
      this.$http({
        url:'http://localhost:3000/page',
        method:'get',
        params:{
          id:this.$route.params.id
        }
      }).then((res)=>{
        this.msg=res.data;
      }).catch((res)=>{
      })
    },
    methods:{
    	add(){
	      this.$http({
	        url:'http://localhost:3000/jia',
	        withCredentials: true,
	        method:'get',
	        params:{
	          id:this.$route.params.id
	        }
	      }).then((res)=>{
	      	if(res.data.error==0){
	      		this.count++
	      	}
	      	
	      }).catch((res)=>{
	        
	      })
    	},
    	del(){
	      this.$http({
	        url:'http://localhost:3000/jian',
	        withCredentials: true,
	        method:'get',
	        params:{
	          id:this.$route.params.id
	        }
	      }).then((res)=>{
	      	if(res.data.error==0){
	      		this.count--
	      	}
	      	
	      }).catch((res)=>{
	        
	      })
    	},
    	
    }
  }
</script>

<style scoped>
</style>