import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Post muito massa, Parabéns!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'as' HH:mm'h'",
    {
      locale: ptBr,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  const isNewCommentEmpty=newCommentText.length===0

  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value);
  }
  function handleCreateNewPost() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }
  function handleNewCommentInvalid(){
    event.target.setCustomValidity('Este campo é obrigatório!')
  }
  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter(comment =>{
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeleteOne)
  }
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          datetime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewPost} className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          required
          onInvalid={handleNewCommentInvalid}
          onChange={handleNewCommentChange}
          name="comment"
          value={newCommentText}
          placeholder="Deixe um comentario"
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}      
            />
          );
        })}
      </div>
    </article>
  );
}
