const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
// const profileReducer = (state, action) => {
//   if (action.type === ADD_POST) {
//     let newPost = {
//       id: 5,
//       message: this.getState().profilePage.newPostText,
//       likesCount: 0,
//     };
//     state.posts.push(newPost);
//     state.newPostText = "";
//   } else if (action.type === UPDATE_NEW_POST_TEXT) {
//     state.newPostText = action.newText;
//   }
//   return state;
// };
// export default profileReducer;
let initialState = {
  posts: [
    { id: 1, message: "Dimych", likesCount: 12 },
    { id: 2, message: "Andrey", likesCount: 20 },
    { id: 3, message: "Sveta", likesCount: 0 },
  ],
  newPostText: "",
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
  //   if (action.type === ADD_POST) {
  //     let newPost = {
  //       id: 5,
  //       message: state.newPostText,
  //       likesCount: 0,
  //     };
  //     state.posts.push(newPost);
  //     state.newPostText = "";
  //   } else if (action.type === UPDATE_NEW_POST_TEXT) {
  //     state.newPostText = action.newText;
  //   }
  //   return state;
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export default profileReducer;
