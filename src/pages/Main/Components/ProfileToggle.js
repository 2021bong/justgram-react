import React from 'react';
import { Link } from 'react-router-dom';

const ProfileToggle = () => {
  return (
    <ul id="profile-menu" class="flex-column" style="visibility: hidden">
      <li class="menu-list width80">
        <a href="#" class="vertical-center-left">
          <img
            class="small-icon-setting mr10"
            src="./img/user.png"
            alt="프로필 아이콘"
          />
          <p>프로필</p>
        </a>
      </li>
      <li class="menu-list width80">
        <a href="#" class="vertical-center-left">
          <img
            class="small-icon-setting mr10"
            src="./img/bookmark.png"
            alt="저장됨 아이콘"
          />
          <p>저장됨</p>
        </a>
      </li>
      <li class="menu-list width80">
        <a href="#" class="vertical-center-left">
          <img
            class="small-icon-setting mr10"
            src="./img/settings.png"
            alt="설정 아이콘"
          />
          <p>설정</p>
        </a>
      </li>
      <li class="menu-list width80">
        <a href="#" class="vertical-center-left">
          <img
            class="small-icon-setting mr10"
            src="./img/change.png"
            alt="계정 전환 아이콘"
          />
          <p>계정 전환</p>
        </a>
      </li>
      <li class="menu-list">
        <Link to="/">
          <a href="#"> 로그아웃 </a>
        </Link>
      </li>
    </ul>
  );
};

export default ProfileToggle;
