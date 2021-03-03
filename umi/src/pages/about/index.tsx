/*
 * @Author: sheng.wang
 * @Date: 2021-03-02 11:06:16
 * @LastEditTime: 2021-03-03 18:55:03
 * @LastEditors: sheng.wang
 * @Description: 
 * @FilePath: /umi/src/pages/about/index.tsx
 */
import styles from './index.less';
import { Button } from 'antd'
import { LoadingOutline } from '@/icons/icons';
import '@/api/test'
console.log(LoadingOutline)
export default function IndexPage () {
  return (
    <div>
      <Button icon={<LoadingOutline></LoadingOutline>}>hah</Button>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
