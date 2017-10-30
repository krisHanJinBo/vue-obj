<template>
	<div>
		<div class="maincont">
     <header>
      <a href="javascript:history.back(-1)" class="back-off fl"><span class="glyphicon glyphicon-menu-left"></span></a>
      <div class="head-mid">
       <h1>购物车</h1>
      </div>
     </header>
     <div class="susstext">订单提交成功</div>
     <div class="sussimg">&nbsp;</div>
     <div class="dingdanlist">
      <table>
       <tr>
        <td width="50%">
         <h3>订单号：AODA456787211453</h3>
         <time>创建日期：2015-8-11<br />
失效日期：2015-9-12</time>
         <strong class="orange">¥36.90</strong>
        </td>
        <td align="right"><span class="orange">等待支付</span></td>
       </tr>
      </table>
     </div><!--dingdanlist/-->
     <div class="succTi orange">请您尽快完成付款，否则订单将被取消</div>
     
    </div><!--content/-->
    
    <div class="height1"></div>
    <div class="gwcpiao">
     <table>
      <tr>
       <td width="50%"><router-link to="/home" class="jiesuan" style="background:#5ea626;">继续购物</router-link></td>
       <td width="50%"><router-link to="/home" class="jiesuan">立即支付</router-link></td>
      </tr>
     </table>
    </div><!--gwcpiao/-->
    </div><!--maincont-->
	</div>
</template>

<script>
</script>

<style>
</style>