import { createApp } from 'vue'
import App from './App.vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import VueTreeList from 'vue-tree-list'
// import VueDragDrop from 'vue3-drag-drop'

import router from './router'

const app = createApp(App)
app.config.globalProperties.console = console
// app.use(VueSidebarMenu)
app.use(VueSidebarMenu)
app.use(router)
app.use(VueTreeList)
// app.use(VueDragDrop)

app.mount('#app')
