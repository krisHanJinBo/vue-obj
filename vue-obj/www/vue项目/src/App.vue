<template>
  <div id="app">
  	<loading v-show="bLoading"></loading>
    <router-view></router-view>
    <footbar v-show="bFoot"></footbar>
  </div>
</template>

<script>
	import footbar from './components/footbar.vue';
	import {mapGetters} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  mounted(){
  	this.routeChange(this.$route);//刷新后，在mounted时，取到路由对象
  },
  components:{
  	footbar
  },
  methods:{
    routeChange(route){
      console.log(route.path);//路由变化之后的路径
      let path=route.path;
      if(/home|prolist|user|fenxiao/.test(path)){
        this.$store.dispatch('showFoot');
      }
      if(/login|reg|car|page|pay|success/.test(path)){
        this.$store.dispatch('hideFoot');
      }
    }
  },
  computed:mapGetters([
    'bFoot','bLoading'
  ]),
  watch:{
    $route(route){//route==一路由信息对象
      this.routeChange(route)
    }
  }
}
</script>

<style>

</style>
