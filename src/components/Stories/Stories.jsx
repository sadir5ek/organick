import React, { useState, useEffect, useRef } from "react";
import qr from '../../assets/homeee/Banana.png';
import video1 from '../../assets/homeee/video1.mp4';
import video2 from '../../assets/homeee/fruct1.jpg';
import video3 from '../../assets/homeee/brown.png';
import tama from '../../assets/homeee/storis2.mp4';
import './stories.css';

export default function Stories() {
  const [activeStory, setActiveStory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  const [storyDuration, setStoryDuration] = useState(5000); // Default 5 секунд сүрөттөр үчүн

  const stories = [
    { id: 1, type: "image", src: qr, title: "Сторис 1" },
    { id: 2, type: "video", src: video1, title: "Сторис 2" },
    { id: 3, type: "image", src: video2, title: "Сторис 3" },
    { id: 4, type: "image", src: video3, title: "Сторис 4" },
    { id: 5, type: "video", src: tama, title: "Сторис 5" },
  ];

  useEffect(() => {
    if (activeStory !== null) {
      setProgress(0);
      let duration = 3500; 
      if (stories[currentIndex].type === "video" && videoRef.current) {
        duration = videoRef.current.duration * 1000; 
      }
      setStoryDuration(duration);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            if (currentIndex < stories.length - 1) {
              setCurrentIndex(currentIndex + 1);
            } else {
              setActiveStory(null);
            }
          }
          return prev + (100 / (duration / 100)); 
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [activeStory, currentIndex]);

  return (
    <div className="stories-container">
      <div className="stories-list">
        {stories.map((story, index) => (
          <div
            key={story.id}
            className={`story-item ${activeStory === story ? "active" : ""}`}
            onClick={() => {
              setActiveStory(story);
              setCurrentIndex(index);
            }}
          >
            <img src={story.src} className="story-img" />
          </div>
        ))}
      </div>

      {activeStory && (
        <div className="story-overlay">
          <div className="story-display">
            <div className="progress-container">
              {stories.map((_, index) => (
                <div key={index} className="progress-segment">
                  <div
                    className="progress-fill"
                    style={{
                      width: index < currentIndex ? "100%" : index === currentIndex ? `${progress}%` : "0%",
                    }}
                  ></div>
                </div>
              ))}
            </div>

            {stories[currentIndex].type === "image" ? (
              <img src={stories[currentIndex].src} className="story-content" />
            ) : (
              <video
                ref={videoRef}
                src={stories[currentIndex].src}
                className="story-content"
                autoPlay
                onLoadedMetadata={(e) => setStoryDuration(e.target.duration * 1000)}
                onEnded={() => {
                  if (currentIndex < stories.length - 1) {
                    setCurrentIndex(currentIndex + 1);
                  } else {
                    setActiveStory(null);
                  }
                }}
              />
            )}
            <button className="close-button" onClick={() => setActiveStory(null)}>x</button>
            <div className="left-nav" onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}></div>
            <div className="right-nav" onClick={() => currentIndex < stories.length - 1 && setCurrentIndex(currentIndex + 1)}></div>
          </div>
        </div>
      )}
    </div>
  );
}
