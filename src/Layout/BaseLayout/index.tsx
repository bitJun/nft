import { ReactNode } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import logo from '../../assets/images/logo_white.png';
import icon from '../../assets/images/icon.png';
import coin from '../../assets/images/coin.png';
import bit from '../../assets/images/bit.png';
import './index.less';

interface LayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const goLink = (url:string, event:any) => {
    console.log(event)
    navigate(url);
  }
  return (
    <div className='container' id='container'>
      <div className='container-layout'>
        <div className='container-layout-header'>
          <div className='container-layout-header-main'>
            <img
              src={coin}
              className='container-layout-header-main-coin'
            />
            NFT：000.00
            <img
              src={bit}
              className='container-layout-header-main-bit'
            />
            TYCHE：000.00
          </div>
          <img
            src={icon}
            className='container-layout-header-icon'
          />
        </div>
        <div className='container-layout-logo'>
          <img
            src={logo}
            className='container-layout-logo-img'
          />
        </div>
        <div className='container-layout-nav'>
          <div className='container-layout-nav-item' onClick={(e:any)=>{goLink('/page/mine', e)}}>
            我的作品
          </div>
          <div className='container-layout-nav-item' onClick={(e:any)=>{goLink('/page/identity', e)}}>
            全部作品
          </div>
          <div className='container-layout-nav-item' onClick={(e:any)=>{goLink('/page/casting', e)}}>
            商城
          </div>
          <div className='container-layout-nav-item' onClick={(e:any)=>{goLink('/page/exchange', e)}}>
            Tyche交换池
          </div>
          <div className='container-layout-nav-item' onClick={(e:any)=>{goLink('/page/unique', e)}}>
            DAO社区
          </div>
          <div className='container-layout-nav-item' onClick={(e:any)=>{goLink('/page/register', e)}}>
            投票
          </div>
        </div>
        <div className='container-layout-other'>
          <div className='container-layout-other-main'>
            <div
              className='container-layout-other-main-item'
              onClick={(e:any)=>{goLink('/page/register', e)}}
            >
              加入公会
            </div>
            <div className='container-layout-other-main-item'>隐私条约</div>
          </div>
        </div>
        <div className='container-layout-actions'>
          <div className='container-layout-actions-item'>链接钱包</div>
        </div>
      </div>
      <div className='container-main'>
        {children}
      </div>
    </div>
  );
};

export default BaseLayout;
