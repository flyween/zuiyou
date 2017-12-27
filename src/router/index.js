import Vue from 'vue'
import Router from 'vue-router'

const Root = () => import('@/pages/layout/root')
const Recommend = () => import('@/pages/recommend/recommend')
const Follow = () => import('@/pages/follow/follow')
const Discover = () => import('@/pages/discover/discover')
const Message = () => import('@/pages/message/message')
const Me = () => import('@/pages/me/me')
const Comments = () => import('@/pages/me/comments')
const PageDetail = () => import('@/components/PageDetail')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'recommend',
      name: 'root',
      component: Root,
      children: [
        {path: 'recommend', component: Recommend},
        {path: 'follow', component: Follow},
        {path: 'discover', component: Discover},
        {path: 'message', component: Message},
        {path: 'me', component: Me}
      ]
    },
    {
      path: '/detail',
      component: PageDetail
    },
    {
      path: '/comments',
      component: Comments
    }
  ]
})
