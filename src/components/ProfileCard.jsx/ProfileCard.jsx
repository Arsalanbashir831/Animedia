import React from "react";
import Cover from "../../img/cover.png";
import Profile from "../../img/profileImg.png";
import { Link } from "react-router-dom";
import "./ProfileCard.css";

const ProfileCard = () => {
  const ProfilePage = false;
  return (
    
    <div className="ProfileCard">
 
    <div className="ProfileImages">
    <img src={Cover} alt="" />
        <img src={Profile} alt="" />   
      </div>
   
       

      <div className="ProfileName">
        <span>Arsalan</span>
        <span>Full Stack Developer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : 
        <span > <Link  style={{
              textDecoration: "none",
              color: "orange"
            }} to="/Profile">My Profile</Link></span>}
    </div>
  );
};

export default ProfileCard;
