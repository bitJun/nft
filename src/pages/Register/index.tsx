import { useEffect, useState } from 'react';
import {
  Form,
  Input,
  Upload,
  message
} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import './index.less';

const { TextArea } = Input;

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const Exchange = (props) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, url => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      {/* <div style={{ marginTop: 8 }}>Upload</div> */}
    </div>
  );
  return (
    <div className='register_view'>
      <h3 className='register_view_title'>注册</h3>
      <p className='register_view_desc'>成为NFT设计师</p>
      <h4 className='register_view_subtitle'>上传头像</h4>
      <p className='register_view_uploadtip'>( 支持JPEG、PNG图片文件，文件大小 2MB以内 )</p>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
      <h4 className='register_view_subtitle'>昵称</h4>
      <Input
        placeholder='请输入您的昵称'
        width='350px'
      />
      <p>注：10个字符以内。</p>
      <h4 className='register_view_subtitle'>简介</h4>
      <TextArea
        placeholder='请输入您的简介'
      />
      <p>注：500个字符以内。</p>
      <div className='register_view_action'>立即注册</div>
    </div>
  )
}
export default Exchange;