import { useEffect, useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Upload,
  Input
} from 'antd'
import styles from './index.module.less';

const Casting = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
    </div>
  );
  return (
    <div className={styles.casting_view}>
      <h3 className={styles.casting_view_title}>铸造</h3>
      <p className={styles.casting_view_desc}>数量不同的NFT</p>
      <h4 className={styles.casting_view_subtitle}>上传文件</h4>
      <div className={styles.casting_view_list}>
        {
          [1,2,3,4,5,6,7,8].map((item:number)=>
            <div className={styles.casting_view_list_item} key={item}>
              <Upload
                name="avatar"
                listType="picture-card"
                className={styles['avatar-uploader']}
                showUploadList={false}
                action=""
              >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
              </Upload>
              <Input
                placeholder='NFT 名称'
                className={styles.casting_view_list_item_name}
              />
              <Input
                placeholder='数量'
                className={styles.casting_view_list_item_num}
              />
            </div>
          )
        }
      </div>
    </div>
  )
}
export default Casting;