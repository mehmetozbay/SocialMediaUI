import React from "react";
import "./share.css";
import { PhotoLibrary, LocalOffer, LocationOn, Mood } from "@material-ui/icons";
const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />

          <input
            type="text"
            className="shareInput"
            placeholder="Whats in your mind Mehmet"
          />
        </div>
        <hr className="shareHr" />

        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PhotoLibrary className="photoIcon" />
              <span className="shareOptionDsc">Photo or Video</span>
            </div>
            <div className="shareOption">
              <LocalOffer className="tagIcon" />
              <span className="shareOptionDsc">Tag</span>
            </div>
            <div className="shareOption">
              <LocationOn className="locationIcon" />
              <span className="shareOptionDsc">Location</span>
            </div>
            <div className="shareOption">
              <Mood className="feelingsIcon" />
              <span className="shareOptionDsc">Feelings</span>
            </div>
          </div>
          <button className="shareButton"> Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
