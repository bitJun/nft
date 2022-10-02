import { useEffect, useState } from 'react';
import {
  Form,
  Input,
  Upload,
  message
} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import uploadIcon from '../../assets/images/upload.png';
import styles from './index.module.less';

const { TextArea } = Input;

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  useEffect(()=>{
    document.getElementById('container').setAttribute('class', 'container' );
  }, []);

  const uploadButton = (
    <div>
      <img
        src={uploadIcon}
        style={{
          width: '36px',
          height: '36px'
        }}
      />
    </div>
  );
  return (
    <div className={styles.register_view}>
      <h3 className={styles.register_view_title}>注册</h3>
      <p className={styles.register_view_desc}>成为NFT设计师</p>
      <h4 className={styles.register_view_subtitle}>上传头像</h4>
      <p className={styles.register_view_uploadtip}>( 支持JPEG、PNG图片文件，文件大小 2MB以内 )</p>
      <Upload
        name="avatar"
        listType="picture-card"
        className={styles['avatar-uploader']}
        showUploadList={false}
        action=""
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
      <h4 className={styles.register_view_subtitle}>昵称</h4>
      <Input
        placeholder='请输入您的昵称'
        width='350px'
        className={styles.register_view_nickname}
      />
      <p>注：10个字符以内。</p>
      <h4 className={styles.register_view_subtitle}>简介</h4>
      <TextArea
        placeholder='请输入您的简介'
        className={styles.register_view_intro}
      />
      <p>注：500个字符以内。</p>
      <div className={styles.register_view_action}>立即注册</div>
    </div>
  )
}
export default Register;