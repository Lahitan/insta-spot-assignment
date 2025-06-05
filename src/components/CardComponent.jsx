// src/components/CardComponent.jsx
import React, { useState } from 'react';
import ImageModal from './ImageModal';

const CardComponent = ({ image, title }) => {
  const [liked, setLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
  };

  const handleImageClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="each-card">
      <div className="cardImg-div">
        <img
          src={image}
          alt={title}
          className="card-img"
          onClick={handleImageClick}
        />
      </div>
      <div className="text-icon">
        <p>{title}</p>
        <svg
          className="heart-icon"
          onClick={handleLike}
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="30"
          viewBox="0 0 256 256"
          fill={liked ? 'purple' : 'gray'}
        >
          <path d="M128,224s-96-55.16-96-120A56,56,0,0,1,128,56a56,56,0,0,1,96,48C224,168.84,128,224,128,224Z" />
        </svg>
      </div>

      {/* Show modal if clicked */}
      {showModal && <ImageModal image={image} onClose={closeModal} />}
    </div>
  );
};

export default CardComponent;
