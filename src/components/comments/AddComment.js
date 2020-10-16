import React, { useState } from "react";

export default function AddComment(props) {
  const [Comment, setComment] = useState({ name: "", comment: "" });
  console.log("This is the new Comment", Comment);
  console.log("these are the props", props);

  function onClickSubmit() {
    props.submitComment(Comment);
    setComment({ name: "", comment: "" });
  }

  return (
    <div>
      <input
        value={Comment.name}
        onChange={(e) => {
          setComment({ ...Comment, name: e.target.value });
        }}
        placeholder="Name"
      ></input>
      <input
        onChange={(e) => {
          setComment({ ...Comment, comment: e.target.value });
        }}
        value={Comment.comment}
        placeholder="Comment"
      ></input>
      <button onClick={onClickSubmit}>Submit</button>
    </div>
  );
}
