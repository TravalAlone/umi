/*
 * @Author: sheng.wang
 * @Date: 2021-03-02 11:06:16
 * @LastEditTime: 2021-03-03 18:14:41
 * @LastEditors: sheng.wang
 * @Description: 
 * @FilePath: /umi/typings.d.ts
 */
declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent (props: React.SVGProps<SVGSVGElement>): React.ReactElement
  const url: string
  export default url
}
declare module '@ant-design/icons/lib/*'