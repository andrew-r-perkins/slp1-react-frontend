import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import ImageDisplay from "./components/ImageDisplay";
import QuestionForm from "./components/QuestionForm";
import "./App.css"; // Make sure to import your CSS file

const App = () => {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div className="app-container">
      <div className="upload-and-qa">
        <div className="upload-area">
          <FileUpload setImageUrl={setImageUrl} />
        </div>
        <div className="qa-area">
          {imageUrl && <QuestionForm imageUrl={imageUrl} />}
        </div>
      </div>
      <div className="image-area">
        <ImageDisplay imageUrl={imageUrl} />
      </div>
    </div>
  );
};

export default App;

