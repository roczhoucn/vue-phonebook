// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import layout from './components/layout'
import Home from './components/home'
import Book from './components/book'
import Album from './components/album'
// import './components/Base64'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: layout,
  redirect:'/home',
  children:[
    {
      path:"home",
      component:Home
    },
    {
      path:"book",
      component:Book
    },{
      path:"album",
      component:Album
    }
  ]
}]
 
const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
