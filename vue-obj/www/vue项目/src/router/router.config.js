  import home from '../components/home.vue';
	import prolist from '../components/prolist.vue';
	import car from '../components/car.vue';
	import user from '../components/user.vue';
	import login from '../components/login.vue';
	import reg from '../components/reg.vue';
	import page from '../components/page.vue';
	import pay from '../components/pay.vue';
	import success from '../components/success.vue';
	import fenxiao from '../components/fenxiao.vue';
	import error from '../components/error.vue';
const routes=[
  {path:'/home',component:home},
  {path:'/prolist',component:prolist},
  {path:'/car',component:car},
  {path:'/user',component:user},
  {path:'/login',component:login},
  {path:'/reg',component:reg},
  {path:'/success',component:success},
  {path:'/fenxiao',component:fenxiao},
  {path:'/page/:id',component:page},
  {path:'/pay',component:pay},
  {path:'/',redirect:'/home'},
  {path:'*',component:error},
];
export default {
  routes:routes,
  mode:'history'
};