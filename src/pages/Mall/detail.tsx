import { useEffect, useState } from 'react';
import {
  Button,
  Input,
  Select,
  Carousel
} from 'antd';
import {
  SearchOutlined
} from '@ant-design/icons';
import mallSwiper from '../../assets/images/mall_item.png';
import { useNavigate } from 'react-router-dom'
import styles from './detail.module.less';

const MallDetail = () => {
  const [keyword, setKeyword] = useState<string>('');
  const navigate = useNavigate()
  useEffect(()=>{
    const container = document.body;
    if (container != null) {
      container.className = 'author_container';
    }
  });
  const isMobile = () => {
    let flag = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    return flag;
  }
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <div className={styles.mall_info}>
      <h3 className={styles.mall_info_title}>
        <svg
          t="1668177897334"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3329"
          width="16"
          height="16"
          onClick={()=>{
            navigate(-1);
          }}
        >
          <path d="M789.333333 490.666667H243.2l243.2-238.933334c8.533333-8.533333 8.533333-21.333333 0-29.866666-8.533333-8.533333-21.333333-8.533333-29.866667 0l-277.333333 275.2c-8.533333 8.533333-8.533333 21.333333 0 29.866666 0 0 2.133333 0 2.133333 2.133334l275.2 277.333333c4.266667 4.266667 10.666667 6.4 14.933334 6.4 6.4 0 10.666667-2.133333 14.933333-6.4 8.533333-8.533333 8.533333-21.333333 0-29.866667L245.333333 533.333333H789.333333c12.8 0 21.333333-8.533333 21.333334-21.333333s-8.533333-21.333333-21.333334-21.333333z" p-id="3330" fill="#ffffff"></path>
        </svg>
        商城
      </h3>
      <div className={styles.mall_info_main}>
        <img
          src={mallSwiper}
          className={styles.mall_info_main_img}
        />
        <div  className={styles.mall_info_main_container}>
          <div className={styles.mall_info_main_content}>
            <h3 className={styles.mall_info_main_content_title}># 666008 NFT 名称</h3>
            <p className={styles.mall_info_main_content_desc}>这是一段对NFT的描述话语，长度随意发挥。这是一 段对NFT的描述话语，长度随意发挥。</p>
            <div className={styles.mall_info_main_content_detail}>
              <h3 className={styles.mall_info_main_content_detail_title}>价格</h3>
              <div className={styles.mall_info_main_content_detail_price}>
                000.00
                <label className={styles.mall_info_main_content_detail_price_unit}>USDT</label>
              </div>
              <div className={styles.mall_info_main_content_detail_other}>
              000.00&nbsp;&nbsp;碎片
              </div>
            </div>
            <Button className={styles.mall_info_main_content_exchange}>
            交换碎片
            </Button>
            <Button className={styles.mall_info_main_content_buy}>
            购买
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MallDetail;