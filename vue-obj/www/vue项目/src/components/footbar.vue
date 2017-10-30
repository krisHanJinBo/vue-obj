<template>
	<div class="footNav">
      <dl>
       <router-link to="/home">
        <dt><span class="glyphicon glyphicon-home"></span></dt>
        <dd>微店</dd>
       </router-link>
      </dl>
      <dl>
       <router-link to="/prolist">
        <dt><span class="glyphicon glyphicon-th"></span></dt>
        <dd>所有商品</dd>
       </router-link>
      </dl>
      <dl>
      <router-link to="/car">
        <dt><span class="glyphicon glyphicon-shopping-cart"></span></dt>
        <dd>购物车 </dd>
       </router-link>
      </dl>
      <dl>
       <router-link to="/user">
        <dt><span class="glyphicon glyphicon-user"></span></dt>
        <dd>我的</dd>
       </router-link>
      </dl>
      <div class="clearfix"></div>
     </div>
</template>
