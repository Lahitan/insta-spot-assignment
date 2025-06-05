import React, { useState } from 'react';
import EditProfileModal from './EditProfileModal';
import NewPostModal from './NewPostModal';
import defaultAvatar from '../assets/Images/Avatar.png';
import add from '../assets/Icons/Icon_add.svg';


const HeroSection = ({ onAddPost}) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showNewPostModal, setShowNewPostModal] = useState(false);

  const [name, setName] = useState('Bessie Coleman');
  const [title, setTitle] = useState('Civil Aviator');
  const [avatar, setAvatar] = useState(defaultAvatar);

  return (
    <section className="hero-section">
      <div className="avatar-container"> 
        <img src={avatar} alt="avatar" className="avatar" />
        <div className="avatar-info">
          <div className="avatar-text">
            <h2>{name}</h2>
            <p>{title}</p>
          </div>
          <button
            className="edit-profile-btn"
            onClick={() => setShowEditModal(true)}
          >
            <svg
                width="16"
                height="16"
                viewBox="0 0 18 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="13.0676"
                  y="4.5451"
                  width="11.6506"
                  height="3.21396"
                  transform="rotate(135 13.0676 4.5451)"
                  fill="#212121"
                />
                <path
                  d="M14.2036 1.13628C14.8312 1.76384 14.8312 2.78132 14.2036 3.40889L13.6354 3.97704L11.3628 1.70443L11.931 1.13628C12.5586 0.508714 13.576 0.508714 14.2036 1.13628Z"
                  fill="#212121"
                />
                <path
                  d="M1.54021 13.1538L2.55674 10.5108L4.82935 12.7834L2.18637 13.8C1.782 13.9555 1.38468 13.5582 1.54021 13.1538Z"
                  fill="#212121"
                />
              </svg>
             Edit Profile
          </button>
        </div>
      </div>
 

       {showEditModal && (
        <EditProfileModal
          currentName={name}
          currentTitle={title}
          currentAvatar={avatar}
          onClose={() => setShowEditModal(false)}
          onSave={(newName, newTitle, newAvatar) => {
            setName(newName);
            setTitle(newTitle);
            setAvatar(newAvatar);
            setShowEditModal(false);
          }}
        />
      )}


      <button className="newPostBtn" onClick={() => setShowNewPostModal(true)}>
        <span><img src={add} alt="add" /></span>
        <span>New Post</span>
      </button>

      {showNewPostModal && (
      <NewPostModal
      onClose={() => setShowNewPostModal(false)}
      onAddPost={onAddPost} 
  />
)}

    </section>
  );
};

export default HeroSection;
