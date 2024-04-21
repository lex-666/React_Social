// import React from "react";
// import {addPostActionCreator,updateNewPostTextActionCreator} from "../../../redux/profile-reducer"
// import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => { 
//   let addPost = () => {    
//     props.store.dispatch(addPostActionCreator());    
//   };
//   let onePostChange = (text) => {  
//     let action = updateNewPostTextActionCreator(text);
//     props.store.dispatch(action);
//   };  
//   return (<MyPosts updateNewPostText={onePostChange} addPost={addPost} posts={props.posts} />)
// }
// export default MyPostsContainer;
import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  console.log(props);
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };
  
  let onePostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onePostChange}
      addPost={addPost}
      posts={props.posts}
      newPostText={props.newPostText}
    />
  );
};

export default MyPostsContainer;









