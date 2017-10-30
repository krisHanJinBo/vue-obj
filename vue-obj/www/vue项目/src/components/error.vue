<template>
  <div class="error">
    你访问的页面出错
  <router-link to="/home">点此回到首页</router-link>
  </div>
</template>
<script></script>
<style>
  .error{
    position: fixed;
    left:50%;
    top:50%;
    transform: translateX(-50%) translateY(-50%);
  }
</style>