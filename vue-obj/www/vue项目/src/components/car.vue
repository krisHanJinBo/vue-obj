<template>
	<div>
	<div class="maincont">
     <header>
      <a href="javascript:history.back(-1)" class="back-off fl"><span class="glyphicon glyphicon-menu-left"></span></a>
      <div class="head-mid">
       <h1>购物车</h1>
      </div>
     </header>
     <div class="head-top">
      <img src="../assets/images/head.jpg" />
     </div><!--head-top/-->
     <table class="shoucangtab">
      <tr>
       <td width="75%"><span class="hui">购物车共有：<strong class="orange">{{this.list.length}}</strong>件商品</span></td>
       <td width="25%" align="center">
        <span class="glyphicon glyphicon-shopping-cart" style="font-size:2rem;color:#666;"></span>
       </td>
      </tr>
     </table>
     
     <div class="dingdanlist" v-for="(item,index) in list">
      <table>
       <tr>
        <td width="100%" colspan="4"><a href="javascript:;"><input type="checkbox" name="1" /> 全选</a></td>
       </tr>
       <tr>
        <td width="4%"><input type="checkbox" name="1" /></td>
        <td class="dingimg" width="15%"><img :src="'src/assets/'+item.src" /></td>
        <td width="50%">
         <h3>{{item.jie}}</h3>
         <time>下单时间：2017-08-11  13:51</time>
        </td>
        <td align="right">
        	<p style="font-size: 16px; width:100px; text-align: center;" >数量：{{item.count}}</p>
        </td>
       </tr>
       <tr>
        <th colspan="4"><strong class="orange">¥{{item.price}}</strong></th>
       </tr>
      </table>
     </div><!--dingdanlist/-->

     <div class="height1"></div>
     <div class="gwcpiao">
     <table>
      <tr>
       <th width="10%"><a href="javascript:history.back(-1)"><span class="glyphicon glyphicon-menu-left"></span></a></th>
       <td width="50%">总计：<strong class="orange">¥{{num}}</strong></td>
       <td width="40%"><router-link to="/pay" class="jiesuan">结算</router-link></td>
      </tr>
     </table>
    </div><!--gwcpiao/-->
    </div><!--maincont-->
	</div>
</template>

<script>
	export default{
	    data(){
	      return {
	      	count:"",
	        list:[],
	        num:0
	      }
	    },
	    mounted(){
	      this.$http({
	        url:'http://localhost:3000/car',
	        method:'post',
	        withCredentials: true
	      }).then((res)=>{
              for(var i=0;i<res.data.a.length;i++){              	  
              	for(var j=0;j<res.data.b.length;j++){             	
              	    if(res.data.a[i].id==res.data.b[j].Id){
              	    	res.data.a[i].count=res.data.b[j].count
              	    	if(Number(res.data.b[j].count)!=0){
              	    		this.list.push(res.data.a[i])  
              	    	}             	    	
              	    }
                }
              }
             for(var t=0;t<this.list.length;t++){
             	this.num+=Number(this.list[t].count)*Number(this.list[t].price)
             }
	      }).catch((res)=>{
	      })
	    }	    
    }
</script>

<style>
</style>