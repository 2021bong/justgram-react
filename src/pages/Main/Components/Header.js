import React from 'react';
import SearchToggle from './SearchToggle';
import ProfileToggle from './ProfileToggle';
import styles from '../Main.module.scss';

const Header = () => {
  return (
    <>
      <header className={`${styles.header}`}>
        <div className={`${styles['header-container']} flex-center`}>
          <a href="#">
            <h2 className={`${styles.title} mr10`}>justgram</h2>
          </a>
          <div className={`${styles.search}`}>
            <div className={`${styles['search-container']}`}>
              <img
                className={`${styles['search-icon']}`}
                src="/images/search_icon.png"
                alt="검색 아이콘"
              />
              <input id={styles.search} type="text" placeholder="검색" />
            </div>
          </div>
          <nav className={`${styles.nav} ml15`}>
            <ul>
              <li>
                <a href="#">
                  <img
                    className="icon-setting"
                    alt="홈으로"
                    src="/images/home_icon.png"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="icon-setting"
                    alt="메세지"
                    src="/images/message_icon.png"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="icon-setting"
                    alt="게시글 작성"
                    src="/images/plus_icon.png"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="icon-setting"
                    alt="탐색"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="icon-setting"
                    alt="소식"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  />
                </a>
              </li>
              <li>
                <a href="#" id={styles['profile-btn']}>
                  <img
                    className="icon-setting curcle"
                    alt="프로필"
                    src="/images/default_profile.png"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
