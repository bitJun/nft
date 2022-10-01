import { useState } from 'react';
import logo from '../../assets/images/logo.png';
import navIcon from '../../assets/images/nav.png';
import banner1 from '../../assets/images/home/banner1.png';
import banner2 from '../../assets/images/home/banner2.png';
import top from '../../assets/images/home/right_top.png';
import bottom from '../../assets/images/home/left_bottom.png';
import right from '../../assets/images/home/right.png';
import { useNavigate } from 'react-router-dom';
import './index.less';

const Index = () => {
  const navigate = useNavigate();
  const goLink = (link:string, e:any) => {
    console.log(e);
    navigate(link);
  }
  return (
    <div className="index_view">
      <div className='index_view_header'>
        <div className='index_view_header_main'>
          <img
            src={logo}
            className='index_view_header_main_logo'
          />
          <ul className='index_view_header_main_nav'>
            <li className='index_view_header_main_nav_item'>Fortuna</li>
            <li className='index_view_header_main_nav_item'>Fortuna</li>
            <li className='index_view_header_main_nav_item'>Fortuna</li>
            <li className='index_view_header_main_nav_item'>Fortuna</li>
          </ul>
          <img
            src={navIcon}
            className='index_view_header_main_icon'
          />
        </div>
      </div>
      <div className='index_view_section'>
        <img
          src={banner1}
          className='index_view_section_banner'
        />
        <div className='index_view_section_main'>
          <h3 className='index_view_section_main_name'>UNBOX</h3>
          <p className='index_view_section_main_desc'>
          BECOME A UNIQUE <br/>NFT COLLECTOR
          </p>
        </div>
      </div>
      <div className='index_view_actions'>
        <div className='index_view_actions_item'>FUKU</div>
        <div className='index_view_actions_item'>SHOP</div>
      </div>
      <div className='index_view_section'>
        <img
          src={banner2}
          className='index_view_section_banner'
        />
        <div className='index_view_section_content'>
          <div className='index_view_section_content_container'>
            <img
              src={top}
              className='index_view_section_content_container_top'
            />
            <p>FEEL THE FUN OF UNPACKING BLIND BOXES ON POLYGOM</p>
            <img
              src={bottom}
              className='index_view_section_content_container_bottom'
            />
            <div className='index_view_section_content_container_action' onClick={(e:any)=>{goLink('/page/mine' ,e)}}>
              CONNECT
              <img
                src={right}
                className='index_view_section_content_container_action_icon'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Index;