import React, { useState } from "react";
import Comment from "./Comments";
import "./Comments.scss";
import AddComment from "./AddComment";

function compareLikes(a, b) {
  return b.score - a.score;
}

export default function CommentFeed() {
  const [didLike, setDidlike] = useState("false");
  const [AllComments, setAllComments] = useState([
    {
      id: 1,
      score: 0,
      name: "Sjouke Bosma",
      comment:
        "Voor een tientje in het Hilton overnachten is niet duur, Als hotelgast verwacht ik namelijk wel dat ik kan blijven slapen, dat is toch het idee van een hotel en de uitzonderingsregel.",
    },
    {
      id: 2,
      score: 0,
      name: "Tim de Waard",

      comment:
        "Dit is dus precies het probleem. Mensen die voor zichzelf bepalen wat wel en niet kan en de regels zo proberen te interpreteren dat ze hun eigen plan kunnen uitvoeren. Je dient je gewoon aan de regels te houden zodat we allemaal weer zo snel mogelijk zonder of met minimale regels verder kunnen.",
    },
    {
      id: 3,
      score: 0,
      name: "Robin O'toole",
      comment:
        "En dat is dus waarom we in Nederland alleen algemene regels kunnen maken die ook de verkeerde mensen treffen. Want zodra je probeert specifieke regels te maken is er wel een slimmert die ze probeert te omzeilen.Dus restaurants in hotels gewoon dicht en alleen roomservice voor gasten. Dan moeten ze dus een hotelkamer hebben om te kunnen eten.",
    },
    {
      id: 4,
      score: 0,
      name: "Rein op't Land",
      comment:
        "Ik begrijp die man niet, het gaat toch niet om regels overtredenhet gaat erom dat je zelf slim genoeg bent om zulke rare ideeën niet om te zetten. Het gaat tenslotte om je medemens en niet om hoe je de regels kunt ontduiken. Maar ik geloof dat hij het nu begrepen heeft....!!",
    },
  ]);

  const commentsSorted = [...AllComments.sort(compareLikes)];
  console.log("This is sorted", commentsSorted);

  function submitComment(reply) {
    reply.score = 0;
    reply.id = AllComments.length + 1;
    const newCommentsArray = [...AllComments, reply];
    setAllComments(newCommentsArray);
  }

  function deleteComment(id) {
    const afterDeleteArray = AllComments.filter((comment) => {
      return comment.id !== id;
    });
    setAllComments(afterDeleteArray);
  }

  function commentLiker(id) {
    if (didLike === "false") {
      const likeArray = AllComments.map((comment) => {
        return comment.id === id
          ? { ...comment, score: comment.score + 1 }
          : comment;
      });
      console.log(likeArray);
      setAllComments(likeArray);
      setDidlike("true");
    } else {
      return;
    }
  }

  return (
    <div className="CommentFeed">
      {commentsSorted.map((comment, index) => {
        return (
          <Comment
            deleteComment={deleteComment}
            commentLiker={commentLiker}
            key={comment.id}
            name={comment.name}
            comment={comment.comment}
            id={comment.id}
            score={comment.score}
          />
        );
      })}
      <AddComment submitComment={submitComment} />
    </div>
  );
}
