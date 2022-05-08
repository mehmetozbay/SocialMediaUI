import React from "react";
import Feed from "../../components/feed/Feed";
import Post from "../../components/posts/Post";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "./../../components/rightbar/Rightbar";
import "./home.css";
const HomePage = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />

        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default HomePage;
