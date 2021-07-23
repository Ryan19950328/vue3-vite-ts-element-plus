/**
 * path:'router-name'             跳转地址
 * name:'router-name'             如果用到<keep-alive>，必须设置该属性
 * meta : {
    title: 'title'                用于设置网页标签显示的标题
    keepAilve: true               是否缓存，默认 false
  }
 */
const routes = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/second',
        name: 'second',
        component: () => import('@/views/second/index.vue'),
        meta: {
          title: '首页'
        }
      }
    ]
  }
]

export default routes
