/*
 * @Author: sheng.wang
 * @Date: 2021-03-02 15:43:03
 * @LastEditTime: 2021-03-03 16:27:57
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /umi/src/pages/home/index.tsx
 */
import Calendar from '@/components/Picker/Calendar';
import { Link } from 'umi';

export default () => {
  return (
    <div>
      <Calendar></Calendar>
      {/* 点击跳转到指定 /about 路由 */}
      <Link to="/about">About</Link>

      {/* 点击跳转到指定 /courses 路由，
          附带 query { sort: 'name' }
      */}
      <Link to="/courses?sort=name">Courses</Link>

      {/* 点击跳转到指定 /list 路由，
          附带 query: { sort: 'name' }
          附带 hash: 'the-hash'
          附带 state: { fromDashboard: true }
      */}
      <Link
        to={{
          pathname: "/list",
          search: "?sort=name",
          hash: "#the-hash",
          state: { fromDashboard: true },
        }}
      >
        List
      </Link>

      {/* 点击跳转到指定 /profile 路由，
          附带所有当前 location 上的参数
      */}
      <Link
        to={location => {
          return { ...location, pathname: "/profile" };
        }}
      />

      {/* 点击跳转到指定 /courses 路由，
          但会替换当前 history stack 中的记录
      */}
      <Link to="/courses" replace />

      {/* 
          innerRef 允许你获取基础组件（这里应该就是 a 标签或者 null）
      */}
      <Link
        to="/courses"
        innerRef={node => {
          // `node` refers to the mounted DOM element
          // or null when unmounted
        }}
      />
    </div>
  );
};