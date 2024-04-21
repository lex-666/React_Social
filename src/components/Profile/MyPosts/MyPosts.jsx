import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
// import {addPostActionCreator,updateNewPostTextActionCreator} from "../../../redux/state"

// export const addPostActionCreator = () => {
//   return {
//     type:"ADD-POST"
//   }
// }
// export const updateNewPostTexttActionCreator = (text) => {
//   return {
//     type: "UPDATE-NEW-POST-TEXT",
//     text: text
//   }
// }
const MyPosts = (props) => {
  let postsElements = props.posts
    .map(p => <Post message={p.message} likesCount={p.likesCount} />)
  
  let addPost = () => {
    // let text = newPostElement.current.value;
    props.addPost();
    // props.updateNewPostText("");
  };
  let onePostChange = () => {
    // let text=e.target.value
    let text = newPostElement.current.value;
    // let action = updateNewPostTextActionCreator(text);
    props.updateNewPostText(text);
  };
  let newPostElement = React.createRef();
  return (
      <div className={s.postsBlock}>
        <div>
          <h3>my posts</h3>        
        <div>
          <div><textarea
            onChange={onePostChange}
            ref={newPostElement}
            // value="AAAAAAAAA" /></div>
            value={props.newPostText} /></div>
          <div><button onClick={addPost}>Add post</button></div>
        </div>
          <div className={s.posts}>
          {postsElements}
        </div>
        </div>
      </div>)
}
export default MyPosts;








