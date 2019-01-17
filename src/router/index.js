import Vue from 'vue'
import {IonicVueRouter} from '@modus/ionic-vue'
import Tab1 from '@/components/Tab1'
import Tab2 from '@/components/Tab2'
import Tabs from '@/components/Tabs'
import Home from '@/components/Home'

Vue.use(IonicVueRouter)

export default new IonicVueRouter({
  routes: [
    { path: '/',
      component: Home,
      children:[
        { path: '/',     
        components: {default: Tab1, tab2: Tab2} 
      }  
      ] 
    } , 
    {  
      path: '/tabs',     
      name: 'tabs',
      component: Tabs,
      children: [
        {   
          path: '/',   
          name: 'tab1',
          component: Tab1
        },
        {  
          path: '/tab2',     
          name: 'tab2',
          component: Tab2
        }
      ]
    }
  ]
})
