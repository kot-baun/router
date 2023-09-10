import { createRouter, createWebHistory } from 'vue-router'
import firstComponent from './components/routeComponents/firstComponent.vue'
import secondComponent from './components/routeComponents/secondComponent.vue'
import thirdComponent from './components/routeComponents/thirdComponent.vue'
import fourthComponent from './components/routeComponents/fourComponent.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/first', component: firstComponent },
    { path: '/second', component: secondComponent },
    { path: '/third', component: thirdComponent },
    { path: '/fourth', component: fourthComponent},
  ]
})
