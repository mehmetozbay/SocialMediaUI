import React from "react";
import "./rightbar.css";
const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {/* birtday start */}
        <div className="birthday">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Polo</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        {/* birtday end */}
        <img className="advertisement" src="/assets/ad.png" alt="" />
        <div className="onlineFriendsTitle">Online Friends</div>
        <div className="onlineFriends">
          {/* --------------- */}

          <div className="onlineFriendItem">
            <div className="onlineFriendItemImage">
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className="onlineFriendImage"
              />
              <div className="onlineFriendBadge"></div>
            </div>
            <span className="onlineFriendsName">Mehmet Can</span>
          </div>
          {/* ------------------------ */}
          <div className="onlineFriendItem">
            <div className="onlineFriendItemImage">
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className="onlineFriendImage"
              />
              <div className="onlineFriendBadge"></div>
            </div>
            <span className="onlineFriendsName">Mehmet Can</span>
          </div>
          {/* ------------ */}
          <div className="onlineFriendItem">
            <div className="onlineFriendItemImage">
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className="onlineFriendImage"
              />
              <div className="onlineFriendBadge"></div>
            </div>
            <span className="onlineFriendsName">Mehmet Can</span>
          </div>
          {/* ------------ */}
          {/* ------------ */}
          <div className="onlineFriendItem">
            <div className="onlineFriendItemImage">
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className="onlineFriendImage"
              />
              <div className="onlineFriendBadge"></div>
            </div>
            <span className="onlineFriendsName">Mehmet Can</span>
          </div>
          {/* ------------ */}
          {/* ------------ */}
          <div className="onlineFriendItem">
            <div className="onlineFriendItemImage">
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className="onlineFriendImage"
              />
              <div className="onlineFriendBadge"></div>
            </div>
            <span className="onlineFriendsName">Mehmet Can</span>
          </div>
          {/* ------------ */}
          {/* ------------ */}
          <div className="onlineFriendItem">
            <div className="onlineFriendItemImage">
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className="onlineFriendImage"
              />
              <div className="onlineFriendBadge"></div>
            </div>
            <span className="onlineFriendsName">Mehmet Can</span>
          </div>
          {/* ------------ */}
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
