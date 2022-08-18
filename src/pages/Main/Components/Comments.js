import styles from '../Main.module.scss';
import Comment from './Comment';

const Comments = ({ propsComments, deleteComment }) => {
  return (
    <ul className={`${styles['new-com-container']}`}>
      {propsComments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            id={comment.id}
            userId={comment.userId}
            content={comment.content}
            deleteComment={deleteComment}
          />
        );
      })}
    </ul>
  );
};

export default Comments;
