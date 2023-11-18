// Profile.js
import React from 'react';
import './pagecss/Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      {/* Row 1 */}
      <div className="profile-row">
        <div className="profile-image-col">
          <img
            src="https://placekitten.com/200/200"
            alt="Profile"
            className="profile-image"
          />
        </div>
        <div className="teal-box"></div>
        <div className="teal-box"></div>
      </div>

      {/* Row 2 */}
      <div className="profile-row">
        <div className="teal-box profile-details-box">
          {/* Basic Details */}
          <div className="profile-basic-details">
            <h3>John Doe</h3>
            <h5>@joemama</h5>
            <div className="profile-label">Phone:</div>
            <div className="profile-data">123-456-7890</div>
            {/* Add other basic details here */}
          </div>
        </div>

        <div className="teal-box additional-details-box">
          {/* Additional Details */}
          <div className="additional-details">
            <div className="profile-label">Bank Account Type:</div>
            <div className="profile-data">Savings</div>
            <div className="profile-label">Bank Name:</div>
            <div className="profile-data">XYZ Bank</div>
            {/* Add other additional details here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;