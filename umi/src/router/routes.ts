/*
 * @Author: sheng.wang
 * @Date: 2021-03-02 15:35:34
 * @LastEditTime: 2021-03-03 18:56:47
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /umi/src/router/routes.ts
 */
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: '@/pages/about',
    name: '元数据管理',
    title: 'menu',
    icon: 'areaChart'
  },
  {
    path: '/welcome',
    component: '@/pages/home',
    name: '股群管理', // 兼容此写法
    title: 'welcome',
    icon: 'apartment'
  }
]

export default routes