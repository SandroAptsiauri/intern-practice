import React from "react";
import { TPhoto } from "../../types/photo.type";
import PhotoItem from "./PhotoItem";

type TPhotoListProps = {
  photos: TPhoto[] | undefined;
};

const PhotoList: React.FC<TPhotoListProps> = ({ photos }) => {
  return (
    <div>
      {photos?.map(({ description, urls, id, views, likes }) => (
        <div key={id}>
          <PhotoItem
            key={id}
            description={description || "No description"}
            urls={urls}
            id={id}
            fullUrl={urls.full}
            downloadLink={urls.raw}
            views={views || 0}
            likes={likes || 0}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoList;
