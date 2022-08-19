import React, { forwardRef, useState } from "react";
import styles from "../Main.module.scss";
import SearchItem from "./SearchItem";
import SearchLoading from "./SearchLoading";

const SearchToggle = forwardRef(
  (
    {
      searchVisibility,
      buttonVisibility,
      nowSearching,
      onClearInput,
      searchKeyword,
    },
    ref
  ) => {
    const [userInfo, setUserInfo] = useState([
      {
        id: 1,
        profileImg: "/images/default_profile.png",
        userId: "justcode",
        desc: "> 저스트코드 | 부트캠프",
      },
      {
        id: 2,
        profileImg: "/images/default_profile.png",
        userId: "justuser",
        desc: "걍 유저입니다",
      },
      {
        id: 3,
        profileImg: "/images/default_profile.png",
        userId: "just_do_it!",
        desc: "나이키를 좋아합니다",
      },
      {
        id: 4,
        profileImg: "/images/default_profile.png",
        userId: "happy2022",
        desc: "홍길동(hong gil dong)",
      },
      {
        id: 5,
        profileImg: "/images/bongprofile.png",
        userId: "2021bong",
        desc: "봉원희입니다",
      },
      {
        id: 6,
        profileImg: "/images/bongprofile.png",
        userId: "bong_bong",
        desc: "봉보로봉봉",
      },
      {
        id: 7,
        profileImg: "/images/default_profile.png",
        userId: "yahoho",
        desc: "",
      },
      {
        id: 8,
        profileImg: "/images/default_profile.png",
        userId: "alkjgjlsgls",
        desc: "#f4f",
      },
      {
        id: 9,
        profileImg: "/images/heart_full.png",
        userId: "__._.__",
        desc: "2000.02.02",
      },
      {
        id: 10,
        profileImg: "/images/heart_full.png",
        userId: "poyilb",
        desc: "오목을 좋아하는 changyoung park",
      },
      {
        id: 11,
        profileImg: "/images/heart_full.png",
        userId: "yewon_J",
        desc: "justcode 6기",
      },
      {
        id: 12,
        profileImg: "/images/heart_full.png",
        userId: "ioni19",
        desc: "맞팔을 기다리는 yewon jung",
      },
    ]);

    const selectView = () => {
      let filterData = userInfo
        .filter((info) => {
          if (searchKeyword == false) {
            return;
          } else if (info.userId.includes(searchKeyword)) {
            return info;
          }
        })
        .map((info) => {
          console.log(info, "map info");
          return (
            <SearchItem
              key={info.id}
              userId={info.userId}
              profileImg={info.profileImg}
              desc={info.desc}
            />
          );
        });
      if (filterData.length == 0) {
        return <SearchLoading textKR={"검색 결과 없음"} textEN={"No Result"} />;
      } else {
        return filterData;
      }
    };

    return (
      <>
        <ul
          id={`${styles["search-list-container"]}`}
          style={{ visibility: searchVisibility }}
        >
          {nowSearching ? null : (
            <div className='vertical-center'>
              <h3 className='bold'>최근 검색 항목</h3>
              <span className='bold color-blue'>모두 지우기</span>
            </div>
          )}
          {nowSearching
            ? selectView()
            : userInfo.slice(0, 4).map((info) => {
                return (
                  <SearchItem
                    key={info.id}
                    userId={info.userId}
                    profileImg={info.profileImg}
                    desc={info.desc}
                  />
                );
              })}
        </ul>
        <div>
          <button
            id={`${styles["searchBtn"]}`}
            onClick={onClearInput}
            style={{ visibility: buttonVisibility }}
          >
            <img
              className={`${styles["delete-icon"]}`}
              src='/images/delete.png'
              alt='삭제 버튼'
            />
          </button>
        </div>
      </>
    );
  }
);

export default SearchToggle;
