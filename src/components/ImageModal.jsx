// src/components/ImageModal.jsx
import React from 'react';

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Enlarged view" />
        <button className="close-btn" onClick={onClose}>✖</button>
      </div>
    </div>
  );
};

export default ImageModal;



// import React from 'react';
// import '../App.css';

// const ImageModal = ({ imageSrc, title, onClose }) => {
//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal image-modal" onClick={(e) => e.stopPropagation()}>
//         <img src={imageSrc} alt={title} />
//         <h3>{title}</h3>
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default ImageModal;
