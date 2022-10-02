import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from './index.module.less';

const Identity = () => {
  useEffect(()=>{
    document.getElementById('container').setAttribute('class', 'container identity_container' );
  }, []);
  return (
    <div className={styles.identity_view}>
      <div className={styles.identity_view_main}>
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.identity_view_main_mySwiper}
        >
          {
            [1,2,3,4,5,6,7,8,9,10].map((item:number)=>
              <SwiperSlide key={item}>
                <img
                  src='https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics7.baidu.com%2Ffeed%2F03087bf40ad162d99cceb8fcaea5a0e78b13cdb0.jpeg%3Ftoken%3D5b50aec78619ebf9158c666e8a73ef1f&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1664816400&t=4bc4bab899c142a89ce9f811ac9dd504'
                  className={styles.identity_view_main_mySwiper_item}
                />
              </SwiperSlide>
            )
          }
        </Swiper>
      </div>
      <div className={styles.identity_view_info}>
        <div className={styles.identity_view_info_logo}>
          <img
            src='https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics7.baidu.com%2Ffeed%2F03087bf40ad162d99cceb8fcaea5a0e78b13cdb0.jpeg%3Ftoken%3D5b50aec78619ebf9158c666e8a73ef1f&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1664816400&t=4bc4bab899c142a89ce9f811ac9dd504'
            className={styles.identity_view_info_logo_img}
          />
        </div>
        <p className={styles.identity_view_info_author}>作者名称</p>
        <p className={styles.identity_view_info_intro}>作者简短的小介绍作者简短的小介绍作者简短的小介绍作者简短的小介绍</p>
        <p className={styles.identity_view_info_price}>$ <span>000.00</span></p>
        <a className={styles.identity_view_info_action}>
        立即购买
        </a>
      </div>
    </div>
  )
}
export default Identity;