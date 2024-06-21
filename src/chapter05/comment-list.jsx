import React from "react";
import Comment from "./comment";

const comments = [
    {
        name : "정해석",
        comment : "안녕하세요, 정해서기입니다.",
    },
    {
        name : "강OO",
        comment : "제설은 작전이다..",
    },
    {
        name : "정OO",
        comment : "형 돈좀 빌려줘",
    },
    {
        name : "이OO",
        comment : "석아 전화좀해",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;