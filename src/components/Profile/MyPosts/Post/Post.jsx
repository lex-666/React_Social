import React, { Component } from "react";
import s from "./Post.module.css";
const Post = (props) => {
  return (
      <div className={s.item}>  
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQUhhsDGYbDgUm2fQ04ZtWNCVtA-FlDuNilg&usqp=CAU" />
        {props.message}
      </div>
          <div>
            <span>Like: </span>{props.likesCount}
        </div>
      </div>
     )
}
export default Post;