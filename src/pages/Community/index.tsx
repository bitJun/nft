import { useEffect, useState } from 'react';
import { Carousel, Drawer, Button } from 'antd';
import logo from '../../assets/images/logo.png';
import navIcon from '../../assets/images/nav.png';
import { useNavigate } from 'react-router-dom';
import icon1 from '../../assets/images/community/icon1.png';
import icon2 from '../../assets/images/community/icon2.png';
import icon3 from '../../assets/images/community/icon3.png';
import icon4 from '../../assets/images/community/icon4.png';
import communityBg from '../../assets/images/community_bg.jpg';
import styles from './index.module.less';

const Community = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  useEffect(()=>{
    const container = document.body;
    if (container != null) {
      container.className = 'community_container';
    }
  });
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const goLink = (link:string, e:any) => {
    console.log(e);
    navigate(link);
  }
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  const isMobile = () => {
    let flag = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    return flag;
  }
  const renderPcHeader = () => {
    return (
      <div className={styles.community_view_banner_header}>
        <div className={styles.community_view_banner_header_main}>
          <img
            src={logo}
            className={styles.community_view_banner_header_main_logo}
          />
          <ul className={styles.community_view_banner_header_main_nav}>
            <li className={styles.community_view_banner_header_main_nav_item}>Fortuna</li>
            <li className={styles.community_view_banner_header_main_nav_item}>Fortuna</li>
            <li className={styles.community_view_banner_header_main_nav_item}>Fortuna</li>
            <li className={styles.community_view_banner_header_main_nav_item}>Fortuna</li>
          </ul>
          <img
            src={navIcon}
            className={styles.community_view_banner_header_main_icon}
          />
        </div>
      </div>
    )
  }
  const renderMobileHeader = () => {
    return (
      <div className={styles.community_view_banner_header}>
        <div className={styles.community_view_banner_header_main}>
          <img
            src={navIcon}
            onClick={()=>{showDrawer()}}
            className={styles.community_view_banner_header_main_icon}
          />
        </div>
      </div>
    )
  }
  return (
    <div className={styles.community_view}>
      <div className={styles.community_view_banner}>
        {isMobile() ? renderMobileHeader() : renderPcHeader()}
      </div>
      <div className={styles.community_view_container}>
        <div className={styles.community_view_carousel}>
          <Carousel
            autoplay={true}
            afterChange={onChange}
          >
            {
              [1].map(item=>
                <div className={styles.community_view_carousel_item} key={item}>
                  <img
                    src={communityBg}
                    className={styles.community_view_carousel_item_bg}
                  />
                  <div className={styles.community_view_carousel_item_main}>
                    <p className={styles.community_view_carousel_item_main_tip}>FUA???????????????????????????Fortuna??????????????????????????????</p>
                    <h3 className={styles.community_view_carousel_item_main_title}>????????????Fortuna</h3>
                    <p className={styles.community_view_carousel_item_main_desc}>FUA?????????????????????????????????FUA?????????????????????????????????FUA????????????????????????????????? FUA?????????????????????????????????FUA?????????FUA?????????????????????????????????</p>
                    <Button className={styles.community_view_carousel_item_main_btn}>????????????</Button>
                  </div>
                </div>  
              )
            }
          </Carousel>
        </div>
        <div className={styles.community_view_list}>
          <div className={styles.community_view_list_item}>
            <img
              src={icon1}
              className={styles.community_view_list_item_img}
            />
            <h3 className={styles.community_view_list_item_title}>????????????</h3>
            <p className={styles.community_view_list_item_desc}>??????FUA???????????????????????????Fortuna????????? ??????<br/>???????????????????????????????????????????????????<br/>????????????????????????????????????.</p>
          </div>
          <div className={styles.community_view_list_item}>
            <img
              src={icon2}
              className={styles.community_view_list_item_img}
            />
            <h3 className={styles.community_view_list_item_title}>????????????</h3>
            <p className={styles.community_view_list_item_desc}>??????FUA????????????????????????????????????????????????<br/>?????????????????????????????????????????????FUA?????????<br/>????????????????????????????????????.</p>
          </div>
          <div className={styles.community_view_list_item}>
            <img
              src={icon3}
              className={styles.community_view_list_item_img}
            />
            <h3 className={styles.community_view_list_item_title}>????????????</h3>
            <p className={styles.community_view_list_item_desc}>FUA??????????????????????????????.</p>
          </div>
          <div className={styles.community_view_list_item}>
            <img
              src={icon4}
              className={styles.community_view_list_item_img}
            />
            <h3 className={styles.community_view_list_item_title}>DOA??????</h3>
            <p className={styles.community_view_list_item_desc}>??????FUA?????????14??????????????????DAO??????<br/>????????????????????????????????????????????????8???<br/>????????????. </p>
          </div>
        </div>
      </div>
      <Drawer
        title=""
        placement="left"
        onClose={onClose}
        open={open}
        width='80%'
        bodyStyle={{
          padding: '0',
          height: '100vh',
          background: '#1A1D1F'
        }}
        closable={false}
      >
        <div className='mobile-layout'>
          <div className='mobile-layout-nav'>
            <div className='mobile-layout-nav-item' onClick={(e:any)=>{goLink('/page/mine', e)}}>
              Fortuna
            </div>
            <div className='mobile-layout-nav-item' onClick={(e:any)=>{goLink('/page/identity', e)}}>
              Fortuna
            </div>
            <div className='mobile-layout-nav-item' onClick={(e:any)=>{goLink('/page/casting', e)}}>
              Fortuna
            </div>
            <div className='mobile-layout-nav-item' onClick={(e:any)=>{goLink('/page/exchange', e)}}>
              Fortuna
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  )
}
export default Community;