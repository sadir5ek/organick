import { useState } from "react";
import "./Video.css"; 
import art1 from '../../assets/servicess/Photo(4).svg'

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="video-section">
     {/* <img src={art1} className="surot1"/> */}
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
              src="https://youtu.be/ZzjqgEw9HxI?si=hylELsVvnC9W4PX3"
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
