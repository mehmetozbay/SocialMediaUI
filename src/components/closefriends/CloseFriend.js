import React from "react";
import "./closeFriend.css";
const CloseFriend = ({ user }) => {
  return (
    <>
      <li className="sideBarFriend">
        <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </>
  );
};

export default CloseFriend;
