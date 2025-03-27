import { useState } from "react";
import "./Video.css"; 

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="video-section">
      <div className="content">
        <h3 className="subtitle">Organic Only</h3>
        <h1 className="title">Fresh & Organic Everyday</h1>
        <p className="description">
          Simply dummy text of the printing and typesetting industry...
        </p>
        <button className="play-button" onClick={() => setIsOpen(true)}>
          ▶
        </button>
      </div>

      
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
           
            <iframe
              className="video-frame"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="YouTube Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>

           
            <button className="close-button" onClick={() => setIsOpen(false)}>
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
