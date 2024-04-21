import React, { Component } from "react";
import s from "./ProfileInfo.module.css";
const ProfileInfo = () => {
    return (
        <div>
        <div>
          <img
            src="https://bigpicture.ru/wp-content/uploads/2015/11/nophotoshop29-800x532.jpg"
            alt="photo"
          />
        </div>
        <div className={s.descriptionBlock}>ava+description</div>     
      </div>)
}
export default ProfileInfo;