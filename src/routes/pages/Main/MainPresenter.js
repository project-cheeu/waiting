import React, { useEffect, useState } from 'react';
import './main.css';
import CustomTextLoop from 'components/CustomTextLoop';
const MainPresenter = ({ waitList, noticeList, videoList }) => {
  /* Router */
  /* State */
  const [video_url, setVideo_url] = useState('');
  const [editable, setEditable] = useState(false);
  const [comment, setComment] = useState('안녕하세요!');

  /* Hooks */
  useEffect(() => {
    if (videoList.length >= 1) {
      setVideo_url(videoList[0].video_url);
    }
  }, [videoList]);
  /* Functions */

  const handleEditalbe = () => {
    setEditable(!editable);
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };
  /* Render */
  return (
    <div className="main-container">
      <div className="center flex flex-center">
        <div className="video flex flex-center">
          <iframe
            src={`https://www.youtube.com/embed/videoseries?list=${video_url}&autoplay=1&mute=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
        <div className="notification">
          <div className="notice">
            <h2>공지사항</h2>
            <div className="notice-content">
              <CustomTextLoop data={noticeList} />
            </div>
          </div>
          <div className="comment" onClick={handleEditalbe}>
            <h2>전달사항</h2>
            <div className="comment-content">
              {editable ? (
                <textarea
                  autoFocus
                  className="comment-input"
                  value={comment}
                  onChange={handleComment}
                />
              ) : (
                comment
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="right flex flex-center">
        <div className="wait flex flex-center">
          <div className="wait-icon">대기인원</div>
          <div className="wait-text">{waitList.length} 명</div>
        </div>
        <div className="wait-list">
          {waitList.length === 0 && (
            <div className="w-100 h-100 flex flex-center">
              대기인원이 없습니다
            </div>
          )}
          <div className="list">
            {waitList.map((item) => {
              const { medical_id, customer_nm, customer_tel } = item;
              const name = customer_nm.replace(/.$/, '*');
              const [, , tel] = customer_tel.split('-');
              return (
                <div className="list-item" key={medical_id}>
                  {name} ({tel})
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

MainPresenter.defaultProps = {
  waitList: [
    {
      medical_id: '1',
      customer_nm: '오경우',
      customer_tel: '010-3056-1616',
    },
    {
      medical_id: '2',
      customer_nm: '오진우',
      customer_tel: '010-5714-1515',
    },
    {
      medical_id: '3',
      customer_nm: '육경우',
      customer_tel: '010-3056-6666',
    },
    {
      medical_id: '4',
      customer_nm: '칠경우',
      customer_tel: '010-3056-7777',
    },
  ],
};

export default MainPresenter;
