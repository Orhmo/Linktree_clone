import React from 'react';
import { Avatar } from 'primereact/avatar';

const Profile = () =>{
  return(
    <div>
    <div className="flex justify-content-center align-items-center">
      <Avatar
        image="profile.jpg"
        id="profile__img"
        shape="circle"
        size="x-large"
        />
      </div>
    <div className="flex justify-content-center">
      <p id="twitter">ooh_jhay</p>
      <p id="slack" style={{display: 'none'}}>Orhmo</p>
    </div>
    </div>
  )
}

export default Profile;
