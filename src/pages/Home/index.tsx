import { useState } from 'react';
import { Carousel } from 'antd';
import logo from '../../assets/images/logo.png';
import navIcon from '../../assets/images/nav.png';
import banner1 from '../../assets/images/home/banner1.png';
import banner2 from '../../assets/images/home/banner2.png';
import top from '../../assets/images/home/right_top.png';
import bottom from '../../assets/images/home/left_bottom.png';
import right from '../../assets/images/home/right.png';
import pic from '../../assets/images/home/pic.png';
import tu from '../../assets/images/home/tu.png';
import coin from '../../assets/images/T1Coin.png';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Index = () => {
  const navigate = useNavigate();
  const goLink = (link:string, e:any) => {
    console.log(e);
    navigate(link);
  }
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <div className={styles.index_view}>
      <div className={styles.index_view_banner}>
        <div className={styles.index_view_banner_header}>
          <div className={styles.index_view_banner_header_main}>
            <img
              src={logo}
              className={styles.index_view_banner_header_main_logo}
            />
            <ul className={styles.index_view_banner_header_main_nav}>
              <li className={styles.index_view_banner_header_main_nav_item}>Fortuna</li>
              <li className={styles.index_view_banner_header_main_nav_item}>Fortuna</li>
              <li className={styles.index_view_banner_header_main_nav_item}>Fortuna</li>
              <li className={styles.index_view_banner_header_main_nav_item}>Fortuna</li>
            </ul>
            <img
              src={navIcon}
              className={styles.index_view_banner_header_main_icon}
            />
          </div>
        </div>
        <div className={styles.index_view_banner_main}>
          <h3 className={styles.index_view_banner_main_name}>UNBOX</h3>
          <p className={styles.index_view_banner_main_desc}>
          BECOME A UNIQUE <br/>NFT COLLECTOR
          </p>
        </div>
      </div>
      <div className={styles.index_view_actions}>
        <div className={styles.index_view_actions_item}>FUKU</div>
        <div className={styles.index_view_actions_item}>SHOP</div>
      </div>
      <div className={styles.index_view_feels}>
        <div className={styles.index_view_feels_content}>
          <div className={styles.index_view_feels_content_container}>
            <img
              src={top}
              className={styles.index_view_feels_content_container_top}
            />
            <p>FEEL THE FUN OF UNPACKING BLIND BOXES ON POLYGOM</p>
            <img
              src={bottom}
              className={styles.index_view_feels_content_container_bottom}
            />
            <div
              className={styles.index_view_feels_content_container_action}
              onClick={(e:any)=>{goLink('/page/mine' ,e)}}
            >
              CONNECT
              <img
                src={right}
                className={styles.index_view_feels_content_container_action_icon}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.index_view_info}>
        <div className={styles.index_view_info_bling}>
          <div className={styles.index_view_info_bling_main}>
            <h3 className={styles.index_view_info_bling_main_title}><span>BLIND</span>BOX</h3>
            <p className={styles.index_view_info_bling_main_desc}>Opening the Fuku blind box will give you the opportunity to collect NFTs. 
            Each set is composed of 200 Fuku blind boxes. The price of each blind box 
            is the same. In order to increase the fun, the blind boxes contain extremely 
            valuable NFTs, as well as the number of There are different NFT fragments, 
            but each NFT will only be obtained by one person, so the winner will have 
            unlimited value, and the fragments will be exchanged for your favorite NFT 
            in the mall.</p>
            <p className={styles.index_view_info_bling_main_desc}>What is even more mysterious is that there is a blind box in the Fuku blind 
            box that has a high probability of getting double tokens, which means that 
            when you open the blind box, the player has a high probability of earning 
            double Tyche.</p>
            <div className={styles.index_view_info_bling_main_btn}>
              Enter Fortuna Metaverse
            </div>
          </div>
          <img
            src={pic}
            className={styles.index_view_info_bling_banner}
          />
        </div>
        <div className={styles.index_view_author}>
          <div className={styles.index_view_author_swiper}>
            <Carousel afterChange={onChange}>
              {
                [1,2,3,4,5,6].map((item:number)=>
                  <img
                    src='https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics7.baidu.com%2Ffeed%2F03087bf40ad162d99cceb8fcaea5a0e78b13cdb0.jpeg%3Ftoken%3D5b50aec78619ebf9158c666e8a73ef1f&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1664816400&t=4bc4bab899c142a89ce9f811ac9dd504'
                    className={styles.index_view_author_swiper_img}
                    key={item}
                  />
                )
              }
            </Carousel>
          </div>
          <div className={styles.index_view_author_detail}>
            <h3 className={styles.index_view_author_detail_title}>
              <span>AUT</span>HOR
            </h3>
            <p className={styles.index_view_author_detail_desc}>Authors are at the heart of the Fortuna platform, they come from industry brands, artists, leaders and whale collectors who mint and sell NFTs through the platform.</p>
            <p className={styles.index_view_author_detail_desc}>The platform provides authors with mint NFT tools for free. The author's creativity and imagination will easily become reality here, and the value of NFT will spread to the metaverse infinitely.</p>
            <div className={styles.index_view_author_detail_action}>
              <div className={styles.index_view_author_detail_action_item}>
              Author Metaverse
              </div>
            </div>
          </div>
        </div>
        <div className={styles.index_view_commodity}>
          <h3 className={styles.index_view_commodity_title}>
            <span>COM</span>MODITY
          </h3>
          <ul className={styles.index_view_commodity_list}>
            {[1,2,3,4,5,6,7,8,9].map((item:number)=>
              <li
                className={styles.index_view_commodity_list_item}
                key={item}
              >
                <img
                  src='https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics7.baidu.com%2Ffeed%2F03087bf40ad162d99cceb8fcaea5a0e78b13cdb0.jpeg%3Ftoken%3D5b50aec78619ebf9158c666e8a73ef1f&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1664816400&t=4bc4bab899c142a89ce9f811ac9dd504'
                  className={styles.index_view_commodity_list_item_img}
                />
                <div className={styles.index_view_commodity_list_item_main}>
                  <div className={styles.index_view_commodity_list_item_main_info}>
                    # 666008 NFT name
                    <span>18/50</span>
                  </div>
                  <p className={styles.index_view_commodity_list_item_main_desc}>DOOOFJUCNUDOA</p>
                  <div className={styles.index_view_commodity_list_item_main_action}>
                    <div className={styles.index_view_commodity_list_item_main_action_item}>Explore more</div>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
        <div className={styles.index_view_token}>
          <h3 className={styles.index_view_token_title}>
            <span>TYCHE</span>TOKEN
          </h3>
          <p className={styles.index_view_token_desc}>The native token of our ecosystem is Tyche, which is a stablecoin based 
          on the POLYGOM chain, 1:1 anchored to USDT.</p>
          <p className={styles.index_view_token_desc}>Players buy Tyche through usdt, and Tyche will be used as a Fuku blind 
          box draw.</p>
          <p className={styles.index_view_token_desc}>Of course, Tyche can also be exchanged back to usdt at any time.</p>
          <img
            src={coin}
            className={styles.index_view_token_img}
          />
        </div>
        <div className={styles.index_view_guide}>
          <h3 className={styles.index_view_guide_title}>
            <span>GUI</span>DE
          </h3>
          <img
            src={tu}
            className={styles.index_view_guide_img}
          />
        </div>
        <div className={styles.index_view_others}>
          <div className={styles.index_view_others_apply}>
            <h3 className={styles.index_view_others_apply_title}>APPLY</h3>
            <p className={styles.index_view_others_apply_desc}><span>From here </span>is to start applying for a guild, anyone, team or organization can form a guild,</p>
            <p className={styles.index_view_others_apply_desc}>Guilds are part of the Fortuna Metaverse and have the right to create mining pools on their own and allow partial profits from authors you invite yourself.</p>
          </div>
          <div className={styles.index_view_others_contact}>
            <div className={styles.index_view_others_contact_main}>
              <h3 className={styles.index_view_others_contact_title}>CONTACT</h3>
              <p className={styles.index_view_others_contact_label}>create a guild</p>
              <input
                type='text'
                className={styles.index_view_others_contact_value}
              />
              <p className={styles.index_view_others_contact_label}>invite author</p>
              <input
                type='text'
                className={styles.index_view_others_contact_value}
              />
              <p className={styles.index_view_others_contact_label} style={{marginBottom: '50px'}}>hold events</p>
              <input
                type='text'
                className={styles.index_view_others_contact_value}
              />
              <div className={styles.index_view_others_contact_action}>send message</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Index;