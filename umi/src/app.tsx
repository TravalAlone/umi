/*
 * @Author: sheng.wang
 * @Date: 2021-03-02 11:38:23
 * @LastEditTime: 2021-03-03 16:15:39
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /umi/src/app.tsx
 */
// import dayjs from 'dayjs'
// import 'dayjs/locale/zh-cn'
// dayjs.locale('zh-cn')

// import { ConfigProvider } from 'antd'
// import zhCN from 'antd/lib/locale-provider/zh_CN'
// export default ({ children }) => <ConfigProvider locale={zhCN}>{children}</ConfigProvider>
// import React from 'react';
// import {
//   BasicLayoutProps,
//   Settings as LayoutSettings,
// } from '@ant-design/pro-layout';

// export const layout = ({
//   initialState,
// }: {
//   initialState: { settings?: LayoutSettings; currentUser?: API.CurrentUser };
// }): BasicLayoutProps => {
//   return {
//     rightContentRender: () => <RightContent />,
//     footerRender: () => <Footer />,
//     onPageChange: () => {
//       const { currentUser } = initialState;
//       const { location } = history;
//       // 如果没有登录，重定向到 login
//       if (!currentUser && location.pathname !== '/user/login') {
//         history.push('/user/login');
//       }
//     },
//     menuHeaderRender: undefined,
//     ...initialState?.settings,
//   };
// };