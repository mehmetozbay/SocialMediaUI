import React from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons";
const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="/assets/person/1.jpeg" alt="" className="postTopImg" />
            <span className="postTopText">Mehmet Ozbay</span>
            <span className="postTime">5 mins Ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Love For All, Hatred For None.</span>
          <img src="/assets/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/like.png" alt="" className="postBottomImg" />
            <img src="/assets/heart.png" alt="" className="postBottomImg" />
            <span className="postBottomLikeText">32 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postBottomCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
