import React, { useState } from "react";
import { TPhotoUrls } from "../../types/photo.type";
import PhotoModal from "./PhotoModal";

type TPhotoItemProps = {
  id: string;
  urls: TPhotoUrls;
  description: string;
  fullUrl: string;
  downloadLink: string;
  views: number;
  likes: number;
};

const PhotoItem: React.FC<TPhotoItemProps> = ({
  description,
  urls,
  id,
  fullUrl,
  downloadLink,
  views,
  likes,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div key={id} className="image-item" onClick={openModal}>
        <div className="image-container">
          <img src={urls?.small} alt={description} />
        </div>
      </div>

      <PhotoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        photo={{ fullUrl, downloadLink, views, likes }}
      />
    </>
  );
};

export default PhotoItem;
