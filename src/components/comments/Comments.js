import React from "react";

export default function Comments(props) {
  function onClickDelete() {
    props.deleteComment(props.id);
  }

  function onClickLike() {
    props.commentLiker(props.id);
  }

  return (
    <div>
      <h4 className="UserName">{props.name}</h4>
      <p className="UserComment">{`${props.comment} ${props.score}`}</p>

      <button onClick={onClickDelete}>Delete</button>
      <button onClick={onClickLike}>Like this comment</button>
    </div>
  );
}
