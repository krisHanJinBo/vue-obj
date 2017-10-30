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
      <img src="src/assets/images/head.jpg" />
     </div><!--head-top/-->
     <div class="dingdanlist">
      <table>
       <tr>
        <td class="dingimg" width="75%" colspan="2">新增收货地址</td>
        <td align="right"><img src="src/assets/images/jian-new.png" /></td>
       </tr>
       <tr><td colspan="3" style="height:10px; background:#efefef;padding:0;"></td></tr>
       <tr>
        <td class="dingimg" width="75%" colspan="2">选择收货时间</td>
        <td align="right"><img src="src/assets/images/jian-new.png" /></td>
       </tr>
       <tr><td colspan="3" style="height:10px; background:#efefef;padding:0;"></td></tr>
       <tr>
        <td class="dingimg" width="75%" colspan="2">支付方式</td>
        <td align="right"><span class="hui">网上支付</span></td>
       </tr>
       <tr><td colspan="3" style="height:10px; background:#efefef;padding:0;"></td></tr>
       <tr>
        <td class="dingimg" width="75%" colspan="2">优惠券</td>
        <td align="right"><span class="hui">无</span></td>
       </tr>
       <tr><td colspan="3" style="height:10px; background:#efefef;padding:0;"></td></tr>
       <tr>
        <td class="dingimg" width="75%" colspan="2">是否需要开发票</td>
        <td align="right"><a href="javascript:;" class="orange">是</a> &nbsp; <a href="javascript:;">否</a></td>
       </tr>
       <tr>
        <td class="dingimg" width="75%" colspan="2">发票抬头</td>
        <td align="right"><span class="hui">个人</span></td>
       </tr>
       <tr>
        <td class="dingimg" width="75%" colspan="2">发票内容</td>
        <td align="right"><a href="javascript:;" class="hui">请选择发票内容</a></td>
       </tr>
       <tr><td colspan="3" style="height:10px; background:#fff;padding:0;"></td></tr>
       <tr>
        <td class="dingimg" width="75%" colspan="3">商品清单</td>
       </tr>
       <div v-for="(item,index) in list" style="width:414px">
       <tr  >
        <td class="dingimg" width="15%"><img :src="'src/assets/'+item.src" /></td>
        <td width="50%">
         <h3>{{item.jie}}</h3>
         <time>下单时间：2015-08-11  13:51</time>
        </td>
        <td align="right"><span class="qingdan">X&nbsp;&nbsp;{{item.count}}</span></td>
       </tr>
       <tr>
        <th colspan="3"><strong class="orange">¥{{item.price}}</strong></th>
       </tr>
       </div>
       <tr>
        <td class="dingimg" width="75%" colspan="2">商品金额</td>
        <td align="right"><strong class="orange">¥{{num}}</strong></td>
       </tr>
       <tr>
        <td class="dingimg" width="75%" colspan="2">折扣优惠</td>
        <td align="right"><strong class="green">¥0.00</strong></td>
       </tr>
       <tr>
        <td class="dingimg" width="75%" colspan="2">抵扣金额</td>
        <td align="right"><strong class="green">¥0.00</strong></td>
       </tr>
       <tr>
        <td class="dingimg" width="75%" colspan="2">运费</td>
        <td align="right"><strong class="orange">¥10.80</strong></td>
       </tr>
      </table>
     </div><!--dingdanlist/-->
     
     
    </div><!--content/-->
    
    <div class="height1"></div>
    <div class="gwcpiao">
     <table>
      <tr>
       <th width="10%"><a href="javascript:history.back(-1)"><span class="glyphicon glyphicon-menu-left"></span></a></th>
       <td width="50%">总计：<strong class="orange">¥{{num}}</strong></td>
       <td width="40%"><router-link to="/success" class="jiesuan">结算</router-link></td>
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