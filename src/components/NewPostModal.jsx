import React, { useState } from 'react';
import '../App.css';

const NewPostModal = ({ onClose, onAddPost }) => {
  const [caption, setCaption] = useState('');
  const [previewURL, setPreviewURL] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) =>{
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewURL(URL.createObjectURL(file));
    }
  };

  const handlePost = (e) => {
    e.preventDefault();

    if (!caption || !previewURL) return;

    const newPost = {
      id: Date.now(),
      image: previewURL,
      title: caption,
    };

    onAddPost(newPost); 
    onClose()
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>New Post</h2>

        <form onSubmit={handlePost}>

          <input
             type="file" 
             accept="image/*"
             onChange={handleImageChange}
              />
            {previewURL && <img src={previewURL} 
            alt="Preview" 
            className="preview-img" 
            />}

          <textarea
            placeholder="Enter a caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
          <div className="modal-actions">
            <button type="submit" class="save-changes-btn">Post</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPostModal;
