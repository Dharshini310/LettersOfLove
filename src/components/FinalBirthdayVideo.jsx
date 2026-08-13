import React, { useState } from "react";
import "./FinalBirthdayVideo.css";
import finalvideo from "../assets/chandana_video.mp4"

const FinalBirthdayVideo = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  const handleOpenVideo = () => {
    setShowVideo(true);
    setVideoEnded(false);
  };

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <section className="final-birthday-section">

      {/* Initial Surprise Screen */}
      {!showVideo && (
        <div className="birthday-intro">

          <div className="intro-heart">♡</div>

          <p className="small-intro-text">
            We've saved something special for you...
          </p>

          <h1>
            And now...
            <br />
            It's all about <span>YOU</span> 💗
          </h1>

          <p className="intro-description">
            One last little surprise, made especially for you.
          </p>

          <button
            className="birthday-surprise-button"
            onClick={handleOpenVideo}
          >
            Open Your Birthday Surprise 🎁
          </button>

        </div>
      )}

      {/* Video */}
      {showVideo && !videoEnded && (
        <div className="birthday-video-container">

          <div className="video-heading">
            <span>🎂</span>
            <h2>Happy Birthday, Beautiful</h2>
            <span>❤️</span>
          </div>

          <div className="video-wrapper">
            <video
              className="birthday-video"
              controls
              autoPlay
              playsInline
              onEnded={handleVideoEnd}
            >
              <source
                src={finalvideo}
                type="video/mp4"
              />

              Your browser does not support the video tag.
            </video>
          </div>

          <p className="video-hint">
            Watch until the end... 💗
          </p>

        </div>
      )}

      {/* Message Automatically Appears After Video */}
      {videoEnded && (
        <div className="birthday-final-message">

          <div className="final-sparkle">✦</div>

          <p className="final-small-text">
            A little message for you...
          </p>

          <h1>
            Happy Birthday,
            <br />
            <span>Beautiful ❤️</span>
          </h1>

          <div className="message-divider">
            <span>♡</span>
            <span>♡</span>
            <span>♡</span>
          </div>

          <p className="birthday-message">
            Today is all about celebrating <strong>YOU</strong>.
            <br />
            Your smile, your happiness, and all the beautiful
            moments that make you who you are.
          </p>

          <p className="birthday-message">
            I hope this little journey brought a smile to your face
            and reminded you just how loved you are. 🥺❤️
          </p>

          <div className="memory-card">
            <span className="memory-heart">♡</span>

            <p>
              Keep this memory forever.
            </p>

            <span className="memory-heart">♡</span>
          </div>

          <p className="final-love-text">
            With all the love in the world ❤️
          </p>

          <div className="floating-hearts">
            <span>♡</span>
            <span>♡</span>
            <span>♡</span>
            <span>♡</span>
            <span>♡</span>
          </div>

        </div>
      )}

    </section>
  );
};

export default FinalBirthdayVideo;