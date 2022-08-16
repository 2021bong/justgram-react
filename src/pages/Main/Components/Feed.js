import React from 'react';
import styles from '../Main.module.scss';

const Feed = () => {
  return (
    <section className={`${styles.feed}`}>
      <div className={`${styles['feed-id']} vertical-center`}>
        <div className="vertical-center">
          <a href="#">
            <div className={`${styles['profile-cur']}`}></div>
          </a>
          <a href="#">
            <span className={`${styles['feed-id-uid']} bold`}>2021bong</span>
          </a>
        </div>
        <a href="#">
          <img
            className="medium-icon-setting"
            src="/images/option.png"
            alt="더보기 아이콘"
          />
        </a>
      </div>
      <div className={`${styles['feed-img-container']}`}>
        <div className={`${styles['feed-img']} flex-center`}>
          <img
            className={`${styles.img}`}
            src="/images/board_img.png"
            alt="과일스티커"
          />
        </div>
        <div className={`${styles['feed-img-menu']}`}>
          <ul className="vertical-center">
            <div className={`${styles['img-menu-group']} vertical-center`}>
              <li>
                <a href="#">
                  <img
                    className="icon-setting"
                    alt="좋아요"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="icon-setting"
                    alt="댓글"
                    src="/images/chat.png"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="icon-setting"
                    alt="공유"
                    src="/images/message_icon.png"
                  />
                </a>
              </li>
            </div>
            <li>
              <a href="#">
                <img
                  className="icon-setting"
                  alt="저장"
                  src="/images/bookmark.png"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles['feed-cont-container']}`}>
        <p className={`bold ${styles['like-count']}`}>좋아요 100개</p>
        <p className={`${styles['feed-cont']}`}>
          <span className={`bold mr5 ${['feed-cont-uid']}`}>2021Bong</span>
          <span className={`${styles['feed-cont-com']}`}>공부화이팅</span>
          <a href="#" className="color-gray ml5">
            더 보기
          </a>
        </p>
        <a href="#" className={`${styles['feed-all-comment']} color-gray`}>
          댓글 1개 모두 보기
        </a>
        <p className={`${styles['feed-cont-time']} color-gray`}>몇 시간전</p>
      </div>
      <div className={`${styles['feed-com']} vertical-center`}>
        <div className={`${styles['smile-icon']}`}></div>
        <form className={`${styles['feed-com-form']} vertical-center`}>
          <input
            className={`${styles['comment-input']}`}
            type="text"
            placeholder="댓글 달기..."
          />
          <button type="submit" className={`${styles['comment-btn']}`} disabled>
            게시
          </button>
        </form>
      </div>
    </section>
  );
};

export default Feed;
