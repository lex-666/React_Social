import { combineReducers } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import { legacy_createStore as createStore } from "redux";
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
});
let store = createStore(reducers);
export default store;
