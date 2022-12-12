import React, {useEffect, useState} from "react";
import BindBoxPlayer from '../assets/images/blindBox.mp4';
import './OpenModal.css';

const OpenModal = (props) => {
  let {
    img,
  } = props;
  const [showResult, setShowResult] = useState(false);
  useEffect(()=>{
    // setTimeout(()=>{
    //   openResult();
    // }, 20000);
    let elevideo = document.getElementById("video");
    elevideo && elevideo.addEventListener('ended', function () { //加载数据
      //视频的总长度
      // console.log(elevideo.duration);
      openResult();
    });
  }, []);

  const openResult = () => {
    setShowResult(true);
  };

  return (
    <div className="result_view">
      {
        showResult ? (
          <img
            className="result_view_img"
            src={img}
          />
        ) : (
          <video id="video" width='100%' height="100%" autoPlay="autoplay" muted >
            <source src={BindBoxPlayer} />
          </video>
        )
      }
    </div>
  )
}

export default OpenModal;