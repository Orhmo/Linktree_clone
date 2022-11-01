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
            <p id="twitter"><strong>ooh_jhay</strong></p>
          </div>
          <div id="slack-profile" className="slack-profile" style={{display: 'none'}}>
            <p id="slack">Orhmo</p>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Profile;
