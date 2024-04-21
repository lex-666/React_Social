import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store, { subscribe } from "./redux/state";
import { render } from "react-dom";
// import { rerenderEntireTree } from "./render";
import "./index.css";
// import state from "./redux/state";
import { addPost, updateNewPostText } from "./redux/state";

// let rerenderEntireTree = (state) => {
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(
//     <React.StrictMode>
//       <App
//         state={state}
//         addPost={store.addPost.bind(store)}
//         updateNewPostText={store.updateNewPostText.bind(store)}
//       />
//     </React.StrictMode>
//   );

//   reportWebVitals();
// };
// rerenderEntireTree(store.getState());
// store.subscribe(rerenderEntireTree);
const rerenderEntireTree = (state) => {
  render(
    <React.StrictMode>
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
reportWebVitals();
