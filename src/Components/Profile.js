import React from 'react';


const Profile = () =>{
  return(
    <div>
    <div className=" flex justify-content-center align-items-center profile__image">
      <img
        className="profile-img"
        src="profile.jpg"
        id="profile__img"
        alt="profile"
        />
        <div className="dark-overlay">
            <img
              className="camera-img"
              src="camera.png"
              alt="camera-img"
              />
          </div>
      </div>
    <div className="flex justify-content-center">
    <div className="profile__links">
          <div id="twitter-profile" className="twitter-profile">
            <a href="https://twitter.com/ooh_jhay">ooh_jhay</a>
          </div>
          <div id="slack-profile" className="slack-profile" style={{display: 'none'}}>
            <a href="https://slack.com/">Orhmo</a>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Profile;
