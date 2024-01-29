import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login.vue'
import HalamanHome from '../views/HalamanHome.vue'
import Beranda from '../views/beranda.vue'
import editprofil from '../views/editprofil.vue'
import konfirmasi from '../views/konfirmasipeminjaman.vue'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login // Pastikan Anda menggantinya dengan komponen login yang sesuai
  },
  {
    path: '/',
    name: 'home',
    component:Login
  },

  {
    path: '/HalamanHome', // Pastikan rute ini sudah didefinisikan
    name: 'HalamanHome',
    component: HalamanHome // Gantilah dengan komponen yang sesuai jika diperlukan
  },

  {
    path: '/beranda', // Pastikan rute ini sudah didefinisikan
    name: 'Beranda',
    component: Beranda // Gantilah dengan komponen yang sesuai jika diperlukan
  },
  {
    path: '/editprofil', // Pastikan rute ini sudah didefinisikan
    name: 'editprofil',
    component: editprofil // Gantilah dengan komponen yang sesuai jika diperlukan
  },  
  {
    path: '/konfirmasi', // Pastikan rute ini sudah didefinisikan
    name: 'konfirmasi',
    component: konfirmasi // Gantilah dengan komponen yang sesuai jika diperlukan
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/HalamanHome.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
