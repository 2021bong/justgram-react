import styles from '../Main.module.scss';

const Comments = ({ propsComments }) => {
  return (
    <ul className={`${styles['new-com-container']}`}>
      {propsComments.map((comment) => {
        return (
          <li key={comment.id} className={`${styles['new-com']}`}>
            <span className="bold mr5">{comment.userId}</span>
            {comment.content}
            <span
              className={`icon-setting ${styles['heart']} ${styles['hearts']}`}
            ></span>
            <span className={`icon-setting ${styles['x-icon']}`}></span>
          </li>
        );
      })}
    </ul>
  );
};

export default Comments;
