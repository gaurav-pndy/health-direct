import React, { useState } from "react";
import { Camera, ChevronDown } from "lucide-react";
import "./Profile.css";
import { FaCamera } from "react-icons/fa";
import { IoCamera } from "react-icons/io5";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    dateOfBirth: "",
    authorizedPerson: "",
    address: "",
    healthInsurance: "",
    gender: "Male",
    email: "",
    age: "",
    snils: "",
  });

  const [profileImage, setProfileImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    console.log("Form data:", formData);
    console.log("Profile image:", profileImage);
    // Handle save logic here
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        {/* Profile Photo Section */}
        <div className="photo-section">
          <div className="photo-circle">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="profile-image-select"
              />
            ) : (
              <div className="photo-placeholder">
                <IoCamera size={36} className="camera-icon" />
                <span className="photo-text">Click to change photo</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="photo-input"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="form-section">
          <h2 className="form-title">Service Recipient Details</h2>

          <div className="form-grid">
            {/* Row 1 */}
            <div className="form-group">
              <label className="form-label">
                Name of the service recipient{" "}
                <span className="required">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Surname"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Gender</label>
              <div className="select-wrapper">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <ChevronDown size={20} className="select-icon" />
              </div>
            </div>

            {/* Row 2 */}
            <div className="form-group">
              <label className="form-label">ID</label>
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleInputChange}
                placeholder="ID Number"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="form-input"
              />
            </div>

            {/* Row 3 */}
            <div className="form-group">
              <label className="form-label">
                Date of birth of the service recipient{" "}
                <span className="required">*</span>
              </label>
              <input
                type="text"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                placeholder="Place Holder"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Age</label>
              <input
                type="text"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Place Holder"
                className="form-input"
              />
            </div>

            {/* Row 4 */}
            <div className="form-group">
              <label className="form-label">Authorized Person</label>
              <input
                type="text"
                name="authorizedPerson"
                value={formData.authorizedPerson}
                onChange={handleInputChange}
                placeholder="+123 456 789"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">SNILS</label>
              <input
                type="text"
                name="snils"
                value={formData.snils}
                onChange={handleInputChange}
                placeholder="+123 456 789"
                className="form-input"
              />
            </div>

            {/* Row 5 - Full Width */}
            <div className="form-group form-group-full">
              <label className="form-label">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Your Address"
                className="form-input"
              />
            </div>

            {/* Row 6 - Full Width */}
            <div className="form-group form-group-full">
              <label className="form-label">Health Insurance</label>
              <input
                type="text"
                name="healthInsurance"
                value={formData.healthInsurance}
                onChange={handleInputChange}
                placeholder="Place Holder"
                className="form-input"
              />
            </div>
          </div>

          {/* Save Button */}
          <button onClick={handleSave} className="save-button">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
