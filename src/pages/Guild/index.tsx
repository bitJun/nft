import { useEffect, useState } from 'react';
import {
  Input,
  Switch,
  Button
} from 'antd';
import {
  SearchOutlined,
  DownOutlined,
  UpOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import coinIcon from '../../assets/images/cionIcon.png';
import styles from './index.module.less';
const Author = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [list, setList] = useState<Array<any>>([
    {
      id: 0,
      earn: '00.00',
      rate: '00.00%',
      total: '000.000.0000',
      days: 15,
      show: false,
      hasEarn: '0.00000'
    },
    {
      id: 1,
      earn: '00.00',
      rate: '00.00%',
      total: '000.000.0000',
      days: 15,
      show: false,
      hasEarn: '0.00000'
    },
    {
      id: 2,
      earn: '00.00',
      rate: '00.00%',
      total: '000.000.0000',
      days: 15,
      show: false,
      hasEarn: '0.00000'
    },
    {
      id: 3,
      earn: '00.00',
      rate: '00.00%',
      total: '000.000.0000',
      days: 15,
      show: false,
      hasEarn: '0.00000'
    },
    {
      id: 4,
      earn: '00.00',
      rate: '00.00%',
      total: '000.000.0000',
      days: 15,
      show: false,
      hasEarn: '0.00000'
    }
  ]);
  const navigate = useNavigate()
  useEffect(()=>{
    const container = document.body;
    if (container != null) {
      container.className = 'guild_container';
    }
  });
  const isMobile = () => {
    let flag = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    return flag;
  }
  const onChange = (event:any) => {
    let value = event?.target?.value;
    setKeyword(value);
  }
  const handleChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  const showDetail = (id:number, e:any) => {
    let obj = JSON.parse(JSON.stringify(list));
    obj = obj.map((item:any)=>{
      if (item.id === id) {
        item.show = !item.show;
      }
      return item;
    });
    setList(obj);
  }
  return (
    <div className={styles.guild_view}>
      <div className={styles.guild_view_main}>
        <h3 className={styles.guild_view_title}>??????</h3>
        <div className={styles.guild_view_sub}>
          <p className={styles.guild_view_desc}>??????Fortuna????????????????????????????????????</p>
          <div className={styles.guild_view_sub_actions}>
            <Button className={styles.guild_view_sub_actions_item}>????????????</Button>
            <Button className={styles.guild_view_sub_actions_item}>Fortuna ??????</Button>
          </div>
        </div>
      </div>
      <div className={styles.guild_view_rule}>
        <img
          src={coinIcon}
          className={styles.guild_view_rule_icon}
        />
        <div className={styles.guild_view_rule_info}>
          <div className={styles.animate}>
            <span className={styles.guild_view_rule_info_tip}>???????????????</span>
            ??????????????????????????????Fortuna???????????????????????????????????????????????????????????????????????????????????????????????????.
          </div>
        </div>
      </div>
      <div className={styles.guild_view_filter}>
        <div className={styles.guild_view_filter_switch}>
          <Switch defaultChecked onChange={handleChange} />
          <span className={styles.guild_view_filter_switch_label}>???????????????</span>
        </div>
        <div className={styles.guild_view_filter_search}>
          <SearchOutlined
            className={styles.guild_view_filter_search_icon}
            color='#ffffff'
          />
          <Input
            className={styles.guild_view_filter_search_value}
            placeholder='??????'
            value={keyword}
            onInput={(e:any)=>{onChange(e)}}
          />
        </div>
      </div>
      <div className={styles.guild_view_container}>
        <div className={styles.guild_view_list}>
          {
            list.map(item=>
              <div
                className={styles.guild_view_list_item}
                key={item.id}
              >
                <div className={styles.guild_view_list_item_info} onClick={(e)=>{showDetail(item.id, e)}}>
                  <div className={styles.guild_view_list_item_info_logo}>
                    ??????logo
                  </div>
                  <div className={styles.guild_view_list_item_info_name}>????????????</div>
                  <div className={styles.guild_view_list_item_info_earn}>
                    <h4 className={styles.guild_view_list_item_info_title}>?????????</h4>
                    <p className={styles.guild_view_list_item_info_desc}>${item.earn}</p>
                  </div>
                  <div className={styles.guild_view_list_item_info_rate}>
                    <h4 className={styles.guild_view_list_item_info_title}>?????????</h4>
                    <p className={styles.guild_view_list_item_info_desc}>{item.rate}</p>
                  </div>
                  <div className={styles.guild_view_list_item_info_total}>
                    <h4 className={styles.guild_view_list_item_info_title}>????????????</h4>
                    <p className={styles.guild_view_list_item_info_desc}>${item.total}</p>
                  </div>
                  <div className={styles.guild_view_list_item_info_days}>
                    <h4 className={styles.guild_view_list_item_info_title}>????????????</h4>
                    <p className={styles.guild_view_list_item_info_desc}>{item.days}</p>
                  </div>
                  {
                    item.show ? (
                      <UpOutlined className={styles.guild_view_list_item_info_icon}/>
                    ) : (
                      <DownOutlined className={styles.guild_view_list_item_info_icon}/>
                    )
                  }
                </div>
                {
                  item.show &&
                  <div className={styles.guild_view_list_item_detail}>
                    <div className={styles.guild_view_list_item_detail_left}>
                      <div className={styles.guild_view_list_item_detail_title}>Fortuna?????????</div>
                      <div className={styles.guild_view_list_item_detail_hasEarn}>{item.hasEarn}</div>
                    </div>
                    <div className={styles.guild_view_list_item_detail_actions}>
                      <p className={styles.guild_view_list_item_detail_actions_tip}>????????????</p>
                      <Button className={styles.guild_view_list_item_detail_actions_tiqu}>??????</Button>
                      <Button className={styles.guild_view_list_item_detail_actions_zhiya}>??????Fortuna</Button>
                    </div>
                  </div>
                }
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
export default Author;