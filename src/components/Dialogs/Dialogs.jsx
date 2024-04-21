import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElements = props.state.messagesData
    .map(message=><Message message={message.message} />)
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
}
export default Dialogs;






// import React, { Component } from "react";
// import s from "./Dialogs.module.css"
// import DialogItem from "./DialogItem/DialogItem";
// import Message from "./Message/Message";
// import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer"

// const Dialogs = (props) => {
//   let state = props.store.getState().dialogsPage;
//   let onSendMessageClick = () => { 
//     props.store.dispatch(sendMessageCreator());
//   };
//   let onNewMessageChange = (e) => {
//     let body = e.target.value;
//     props.store.dispatch(updateNewMessageBodyCreator(body));
//    };

//   let dialogsElements = state.dialogsData
//     .map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
      
//   let messagesElements = state.messagesData
//     .map(message => <Message message={message.message} />)
  
//   let newMessageBody = state.newMessageBody;
    
//   return (
//     <div className={s.dialogs}>
//       <div className={s.dialogsItems}>
//         {dialogsElements}       
//       </div>
//       <div className={s.messages}>
//         <div>{messagesElements}</div>
//         <div>
//         <div><textarea
//           value={newMessageBody}
//           onChange={onNewMessageChange}
//           placeholder="Enter your message"></textarea></div>
//         <div><button onClick={onSendMessageClick}>Send</button></div>
//       </div>
//       </div>
      
//     </div>
//   )
// }
// export default Dialogs;