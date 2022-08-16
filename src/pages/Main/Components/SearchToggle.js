import React from 'react';

const SearchToggle = () => {
  return (
    <>
      <ul id="search-list-container" style={{ visibility: 'hidden' }}>
        <div class="vertical-center">
          <h3 class="bold">최근 검색 항목</h3>
          <span class="bold color-blue">모두 지우기</span>
        </div>
      </ul>

      <div>
        <button id="searchBtn" style={{ visibility: 'hidden' }}>
          <img class="delete-icon" src="./img/delete.png" alt="삭제 버튼" />
        </button>
      </div>
    </>
  );
};

export default SearchToggle;
