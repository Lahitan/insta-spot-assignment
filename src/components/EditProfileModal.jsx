import React, { useState } from 'react';
import '../App.css'; // or your own CSS file

const EditProfileModal = ({ onClose, currentName, currentTitle, currentAvatar ,onSave }) => {
  const [name, setName] = useState(currentName);
  const [title, setTitle] = useState(currentTitle);
  const [avatarPreview, setAvatarPreview] = useState(currentAvatar);
  const [avatarFile, setAvatarFile] = useState(null);

  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // For this UI demo, just use the preview image URL
    const updatedAvatar =avatarFile ? avatarPreview : currentAvatar;
    onSave(name, title, updatedAvatar);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit Profile</h2>
       <form onSubmit={handleSubmit}>
          <div className="avatar-preview-container">
            <img src={avatarPreview} alt="preview" className="avatar-preview" />
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            type="text"
          />
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
          />
          
          <div className="modal-actions">
            <button type="submit" className="save-changes-btn">Save</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
