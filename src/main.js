import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/css/sets.css'
import './assets/css/introduction.css'
import './assets/css/base.css'
import './assets/css/reset.css'
import './assets/css/app.css'
import './assets/css/about.css'
import Vuex from "vuex";
import VueRouter from 'vue-router'
import Introduction from "@/components/Introduction";
import About from "@/components/About";
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
const router=new VueRouter({
  mode:"history",
  routes:[
    {path:"/",component:Introduction},
    {path:"/introduction", component:Introduction},
    {path:"/about",component:About}
  ]
});
new Vue({
  render: h => h(App),
  router:router,
  store
}).$mount('#app')
