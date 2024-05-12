import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../pages/Main.vue'
import Education from '../pages/Education.vue'
import eHtml from '../pages/Education/eHtml.vue'
import eCss from '../pages/Education/eCss.vue'
import eJs from '../pages/Education/eJs.vue'
import eVue from '../pages/Education/eVue.vue'
Vue.use(VueRouter)

// 解决导航栏或者底部导航tabBar中的vue-router在3.0版本以上频繁点击菜单报错的问题。
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [

  { path: '/', name: 'Main', component: Main },
  { path: '/Main', component: Main },
  {
    path: '/Education', component: Education, children: [
      {
        path: '/',
        name: 'evue',
        component: eVue
      },
      {
        path: 'ehtml',
        component: eHtml
      },
      {
        path: 'ecss',
        component: eCss
      },
      {
        path: 'ejs',
        component: eJs
      },
      {
        path: 'evue',
        component: eVue
      }
    ]
  },
  {
    path: '/',
    name: 'Manager',
    component: () => import('../views/Manager.vue'),
    redirect: '/home',  // 重定向到主页
    children: [
      { path: '403', name: 'NoAuth', meta: { name: '无权限' }, component: () => import('../views/manager/403') },
      { path: 'home', name: 'Home', meta: { name: '系统首页' }, component: () => import('../views/manager/Home') },
      { path: 'admin', name: 'Admin', meta: { name: '管理员信息' }, component: () => import('../views/manager/Admin') },
      { path: 'adminPerson', name: 'AdminPerson', meta: { name: '个人信息' }, component: () => import('../views/manager/AdminPerson') },
      { path: 'password', name: 'Password', meta: { name: '修改密码' }, component: () => import('../views/manager/Password') },
      { path: 'notice', name: 'Notice', meta: { name: '公告信息' }, component: () => import('../views/manager/Notice') },
      { path: 'user', name: 'User', meta: { name: '用户信息' }, component: () => import('../views/manager/User') },
      { path: 'category', name: 'Category', meta: { name: '帖子分类' }, component: () => import('../views/manager/Category') },
      { path: 'blog', name: 'Blog', meta: { name: '帖子信息' }, component: () => import('../views/manager/Blog') },
      // { path: 'activity', name: 'Activity', meta: { name: '活动信息' }, component: () => import('../views/manager/Activity') },
      { path: 'comment', name: 'Comment', meta: { name: '评论信息' }, component: () => import('../views/manager/Comment') },
      // { path: 'activitySign', name: 'ActivitySign', meta: { name: '报名信息' }, component: () => import('../views/manager/ActivitySign') },
    ]
  },
  {
    path: '/front',
    name: 'Front',
    component: () => import('../views/Front.vue'),
    children: [
      { path: 'home', name: 'FHome', meta: { name: '系统首页' }, component: () => import('../views/front/Home') },
      { path: 'person', name: 'Person', meta: { name: '个人信息' }, component: () => import('../views/front/Person') },
      { path: 'blogDetail', name: 'BlogDetail', meta: { name: '博客详情' }, component: () => import('../views/front/BlogDetail') },
      { path: 'search', name: 'Search', meta: { name: '博客搜索' }, component: () => import('../views/front/Search') },
      { path: 'activity', name: 'Activity', meta: { name: '活动中心' }, component: () => import('../views/front/Activity') },
      { path: 'activityDetail', name: 'ActivityDetail', meta: { name: '活动详情' }, component: () => import('../views/front/ActivityDetail') },
      { path: 'newBlog', name: 'NewBlog', meta: { name: '新增博客' }, component: () => import('../views/front/NewBlog') },
    ]
  },
  { path: '/login', name: 'Login', meta: { name: '登录' }, component: () => import('../views/Login.vue') },
  { path: '/register', name: 'Register', meta: { name: '注册' }, component: () => import('../views/Register.vue') },
  { path: '*', name: 'NotFound', meta: { name: '无法访问' }, component: () => import('../views/404.vue') },
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

// 注：不需要前台的项目，可以注释掉该路由守卫
// 路由守卫
router.beforeEach((to, from, next) => {
  let user = JSON.parse(localStorage.getItem("xm-user") || '{}');
  if (to.path === '/front/home') {
    if (user.role) {
      if (user.role === 'USER') {
        next()
      } else if (user.role === 'ADMIN') {
        next('/home')
      }
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
