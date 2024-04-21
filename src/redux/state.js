let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Dimych", likesCount: 12 },
        { id: 2, message: "Andrey", likesCount: 20 },
        { id: 3, message: "Sveta", likesCount: 0 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Buy" },
        { id: 3, message: "Yo" },
        // { id: 4, message: "Aleksey" },
        // { id: 5, message: "Tolik" }
      ],
      dialogsData: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Aleksey" },
        { id: 5, name: "Tolik" },
      ],
    },
  },
  _callSubscriber() {
    console.log("changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this.getState().profilePage.newPostText,
      likesCount: 0,
    };
    this.getState().profilePage.posts.push(newPost);
    this.getState().profilePage.newPostText = "";
    this._callSubscriber(this.getState());
  },
  updateNewPostText(newText) {
    this.getState().profilePage.newPostText = newText;
    this._callSubscriber(this.getState());
  },
};
export default store;
window.store = store;
