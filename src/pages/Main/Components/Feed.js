import React, { useRef, useState } from 'react';
import Comments from './Comments';
import styles from '../Main.module.scss';

const Feed = ({
  userName,
  imageSrc,
  imageAlt,
  likeCount,
  content,
  allComment,
  createdTime,
}) => {
  const [disabled, setDisabled] = useState(true);
  const [id, setid] = useState(3);
  const [commentInputValue, setCommentInputValue] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      userId: '2021bong',
      content: '공부를 합시다!',
    },
    { id: 2, userId: 'happy2022', content: 'good :)' },
  ]);
  const [like, setLike] = useState(true);
  const [heartUrl, setHeartUrl] = useState('images/heart_empty.png');

  const commentRef = useRef();

  const writeComment = () => {
    setCommentInputValue(commentRef.current.value);
    commentRef.current.value ? setDisabled(false) : setDisabled(true);
  };

  const addComment = (e) => {
    setid(id + 1);
    const newComment = {
      id,
      userId: 'guest1',
      content: commentInputValue,
    };

    setComments((prevComments) => [...prevComments, newComment]);
    commentRef.current.value = '';
  };

  const deleteComment = (e) => {
    if (window.confirm('정말 삭제 하시겠습니까?')) {
      const deleteIndex = e.nativeEvent.target.id;
      setComments((prevComments) => {
        const deletedComments = prevComments.filter((comment) => {
          if (comment.id != deleteIndex) return comment;
        });
        return deletedComments;
      });
    } else {
      return;
    }
  };

  const blockRefresh = (e) => {
    e.preventDefault();
  };

  const likeFeed = () => {
    setLike((like) => !like);
    setHeartUrl(like ? 'images/heart_full.png' : 'images/heart_empty.png');
  };

  return (
    <section
      className={`${styles.feed}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          if (e.nativeEvent.isComposing === false) {
            e.preventDefault();
            addComment();
          }
        }
      }}
    >
      <div className={`${styles['feed-id']} vertical-center`}>
        <div className="vertical-center">
          <div className={`${styles['profile-cur']}`}></div>

          <span className={`${styles['feed-id-uid']} bold`}>{userName}</span>
        </div>

        <img
          className="medium-icon-setting"
          src="/images/option.png"
          alt="더보기 아이콘"
        />
      </div>
      <div className={`${styles['feed-img-container']}`}>
        <div className={`${styles['feed-img']} flex-center`}>
          <img className={`${styles.img}`} src={imageSrc} alt={imageAlt} />
        </div>
        <div className={`${styles['feed-img-menu']}`}>
          <ul className="vertical-center">
            <div className={`${styles['img-menu-group']} vertical-center`}>
              <li onClick={likeFeed}>
                <img className="icon-setting" alt="좋아요" src={heartUrl} />
              </li>
              <li>
                <img
                  className="icon-setting"
                  alt="댓글"
                  src="/images/chat.png"
                />
              </li>
              <li>
                <img
                  className="icon-setting"
                  alt="공유"
                  src="/images/message_icon.png"
                />
              </li>
            </div>
            <li>
              <img
                className="icon-setting"
                alt="저장"
                src="/images/bookmark.png"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles['feed-cont-container']}`}>
        <p
          className={`bold ${styles['like-count']}`}
        >{`좋아요 ${likeCount}개`}</p>
        <p className={`${styles['feed-cont']}`}>
          <span className={`bold mr5 ${['feed-cont-uid']}`}>{userName}</span>
          <span className={`${styles['feed-cont-com']}`}>{content}</span>
          <span className="color-gray ml5 pointer">더 보기</span>
        </p>
        <span className="color-gray pointer">{`댓글 ${allComment}개 모두 보기`}</span>
        <Comments propsComments={comments} deleteComment={deleteComment} />
        <p
          className={`${styles['feed-cont-time']} color-gray`}
        >{`${createdTime}시간전`}</p>
      </div>
      <div className={`${styles['feed-com']} vertical-center`}>
        <div className={`${styles['smile-icon']}`}></div>
        <form
          className={`${styles['feed-com-form']} vertical-center`}
          onSubmit={blockRefresh}
        >
          <input
            className={`${styles['comment-input']}`}
            type="text"
            placeholder="댓글 달기..."
            onChange={writeComment}
            ref={commentRef}
          />
          <button
            type="button"
            className={`${styles['comment-btn']}`}
            onClick={addComment}
            disabled={disabled}
          >
            게시
          </button>
        </form>
      </div>
    </section>
  );
};

export default Feed;
