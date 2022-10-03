import { useEffect, useState } from 'react';
import ExChangeIcon from '../../assets/images/exchange.png';
import T1Coin from '../../assets/images/T1Coin.png';
import {
  Input
} from 'antd';
import styles from './index.module.less';

const Exchange = () => {
  useEffect(()=>{
    const container = document.getElementById('container');
    if (container != null) {
      container.setAttribute('class', 'container exchange_container' );
    }
  }, []);
  return (
    <div className={styles.exchange_view}>
      <h3 className={styles.exchange_view_title}>买入</h3>
      <p className={styles.exchange_view_desc}>
        更多的TYCHE
        <div className={styles.exchange_view_desc_action}>
          <img
            src={ExChangeIcon}
            className={styles.exchange_view_desc_action_icon}
          />
          卖出
        </div>
      </p>
      <img
        src={T1Coin}
        className={styles.exchange_view_img}
      />
      <div className={styles.exchange_view_main}>
        <h4 className={styles.exchange_view_main_title}>价格</h4>
        <Input
          className={styles.exchange_view_main_value}
          placeholder='请输入该商品的价格'
        />
        <h4 className={styles.exchange_view_main_title}>数量</h4>
        <Input
          className={styles.exchange_view_main_value}
          placeholder='请输入该商品的数量'
        />
        <h4 className={styles.exchange_view_main_title}>总价</h4>
        <Input
          className={styles.exchange_view_main_value}
          placeholder='请输入该商品的总价'
        />
        <div className={styles.exchange_view_main_action}>立即购买</div>
      </div>
    </div>
  )
}
export default Exchange;