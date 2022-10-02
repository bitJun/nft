import { useState } from 'react';
import logo from '../../assets/images/logo.png';
import navIcon from '../../assets/images/nav.png';
import banner1 from '../../assets/images/home/banner1.png';
import banner2 from '../../assets/images/home/banner2.png';
import top from '../../assets/images/home/right_top.png';
import bottom from '../../assets/images/home/left_bottom.png';
import right from '../../assets/images/home/right.png';
import pic from '../../assets/images/home/pic.png';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';

const Index = () => {
  const navigate = useNavigate();
  const goLink = (link:string, e:any) => {
    console.log(e);
    navigate(link);
  }
  return (
    <div className={styles.index_view}>
      <div className={styles.index_view_header}>
        <div className={styles.index_view_header_main}>
          <img
            src={logo}
            className={styles.index_view_header_main_logo}
          />
          <ul className={styles.index_view_header_main_nav}>
            <li className={styles.index_view_header_main_nav_item}>Fortuna</li>
            <li className={styles.index_view_header_main_nav_item}>Fortuna</li>
            <li className={styles.index_view_header_main_nav_item}>Fortuna</li>
            <li className={styles.index_view_header_main_nav_item}>Fortuna</li>
          </ul>
          <img
            src={navIcon}
            className={styles.index_view_header_main_icon}
          />
        </div>
      </div>
      <div className={styles.index_view_section}>
        <img
          src={banner1}
          className={styles.index_view_section_banner}
        />
        <div className={styles.index_view_section_main}>
          <h3 className={styles.index_view_section_main_name}>UNBOX</h3>
          <p className={styles.index_view_section_main_desc}>
          BECOME A UNIQUE <br/>NFT COLLECTOR
          </p>
        </div>
      </div>
      <div className={styles.index_view_actions}>
        <div className={styles.index_view_actions_item}>FUKU</div>
        <div className={styles.index_view_actions_item}>SHOP</div>
      </div>
      <div className={styles.index_view_container}>
        <img
          src={banner2}
          className={styles.index_view_container_banner}
        />
        <div className={styles.index_view_container_content}>
          <div className={styles.index_view_container_content_container}>
            <img
              src={top}
              className={styles.index_view_container_content_container_top}
            />
            <p>FEEL THE FUN OF UNPACKING BLIND BOXES ON POLYGOM</p>
            <img
              src={bottom}
              className={styles.index_view_container_content_container_bottom}
            />
            <div
              className={styles.index_view_container_content_container_action}
              onClick={(e:any)=>{goLink('/page/mine' ,e)}}
            >
              CONNECT
              <img
                src={right}
                className={styles.index_view_container_content_container_action_icon}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.index_view_info}>
        <div className={styles.index_view_info_bling}>
          <div className={styles.index_view_info_bling_main} style={{color: '#fff'}}>
          123
          </div>
          <img
            src={pic}
            className={styles.index_view_info_bling_banner}
          />
        </div>
      </div>
    </div>
  )
}
export default Index;