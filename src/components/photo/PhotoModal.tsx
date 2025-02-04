import React from "react";
import "../../styles/PhotoModalStyle.css";

type TPhotoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  photo: {
    fullUrl: string;
    downloadLink: string;
    views: number;
    likes: number;
  };
};

const PhotoModal: React.FC<TPhotoModalProps> = ({ isOpen, onClose, photo }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">
          Close
        </button>
        <div className="only-photo">
          <img src={photo.fullUrl} alt="Full view" />
        </div>
        <div className="photo-info">
          <p>Views: {photo.views}</p>
          <p>Likes: {photo.likes}</p>
          <a href={photo.downloadLink} download>
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
