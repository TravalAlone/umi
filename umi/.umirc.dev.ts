/*
 * @Author: sheng.wang
 * @Date: 2021-03-03 14:39:28
 * @LastEditTime: 2021-03-03 14:42:49
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /umi/.umirc.dev.ts
 */
import { defineConfig } from 'umi'

export default defineConfig({
  define: {
    'process.env.BASE_API': 'http:localhost:3000'
  }
})