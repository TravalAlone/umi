/*
 * @Author: sheng.wang
 * @Date: 2021-03-02 11:06:16
 * @LastEditTime: 2021-03-03 23:18:36
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /umi/.umirc.ts
 */
import { defineConfig } from 'umi';
import routes from './src/router/routes'
import { resolve } from 'path'
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';
export default defineConfig({
  layout: {
    name: 'Ant Design',
    locale: true
  },
  base: '/', // 设置路由前缀，通常用于部署到非根目录。
  chunks: ['umi'],
  hash: true,
  locale: {
    title: true,
    baseNavigator: true
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  esbuild: {},
  inlineLimit: 10000, // 配置图片文件是否走 base64 编译的阈值。默认是 10000 字节，少于他会被编译为 base64 编码，否则会生成单独的文件。
  fastRefresh: {},  // 开发时可以保持组件状态，同时编辑提供即时反馈。
  forkTSChecker: {},
  dynamicImport: {
    loading: '@/pages/about'
  },
  alias: {
    '@ant-design/icons/lib/dist$': resolve(__dirname, '/src/icons/icons.ts'),
  },
  ignoreMomentLocale: true,
  theme: {},  // 配置主题，实际上是配 less 变量。
  chainWebpack: function (config, { webpack }) {
    config.plugin('moment2dayjs').use('antd-dayjs-webpack-plugin')
    config.merge({
      optimization: {
        splitChunks: {
          chunks: 'async',
          minSize: 30000,
          minChunks: 3,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test: /^.*node_modules[\\/](?!ag-grid-|lodash|wangeditor|react-virtualized|rc-select|rc-drawer|rc-time-picker|rc-tree|rc-table|rc-calendar|antd).*$/,
              chunks: "all",
              priority: 10,
            },
            virtualized: {
              name: "virtualized",
              test: /[\\/]node_modules[\\/]react-virtualized/,
              chunks: "all",
              priority: 10
            },
            rcselect: {
              name: "rc-select",
              test: /[\\/]node_modules[\\/]rc-select/,
              chunks: "all",
              priority: 10
            },
            rcdrawer: {
              name: "rcdrawer",
              test: /[\\/]node_modules[\\/]rc-drawer/,
              chunks: "all",
              priority: 10
            },
            rctimepicker: {
              name: "rctimepicker",
              test: /[\\/]node_modules[\\/]rc-time-picker/,
              chunks: "all",
              priority: 10
            },
            ag: {
              name: "ag",
              test: /[\\/]node_modules[\\/]ag-grid-/,
              chunks: "all",
              priority: 10
            },
            antd: {
              name: "antd",
              test: /[\\/]node_modules[\\/]antd[\\/]/,
              chunks: "all",
              priority: 9
            },
            rctree: {
              name: "rctree",
              test: /[\\/]node_modules[\\/]rc-tree/,
              chunks: "all",
              priority: -1
            },
            rccalendar: {
              name: "rccalendar",
              test: /[\\/]node_modules[\\/]rc-calendar[\\/]/,
              chunks: "all",
              priority: -1
            },
            rctable: {
              name: "rctable",
              test: /[\\/]node_modules[\\/]rc-table[\\/]es[\\/]/,
              chunks: "all",
              priority: -1
            },
            wang: {
              name: "wang",
              test: /[\\/]node_modules[\\/]wangeditor[\\/]/,
              chunks: "all",
              priority: -1
            },
            lodash: {
              name: "lodash",
              test: /[\\/]node_modules[\\/]lodash[\\/]/,
              chunks: "all",
              priority: -2
            },
            bizcharts: {
              name: "bizcharts",
              test: /[\\/]node_modules[\\/]bizcharts[\\/]/,
              chunks: "all",
              priority: 10
            },
            xlsx: {
              name: "xlsx",
              test: /[\\/]node_modules[\\/]xlsx[\\/]/,
              chunks: "async",
              priority: 10
            }
          },
        },
      },
    });
  }
});
