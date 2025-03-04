import React from "react";

const ImageDisplay = ({ imageUrl }) => {
  return (
    <div className={`image-area ${imageUrl ? "image-uploaded" : ""}`}>
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
    </div>
  );
};

export default ImageDisplay;

