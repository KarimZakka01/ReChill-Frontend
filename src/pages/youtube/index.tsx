import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Button } from "@components/button";
import "./youtube.styles.css";

export const VideoPage: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>("");

  const fetchRandomVideo = async () => {
    try {
      const response = await fetch(
        "http://localhost:8888/.netlify/functions/youtube"
      ); // Replace with your backend API endpoint
      const data = await response.json();
      setVideoUrl(data.url);

      setTimeout(() => {
        window.location.reload(); // Refresh the page after 1 minute
      }, 60000);
    } catch (error) {
      console.error("Error fetching random video:", error);
    }
  };

  useEffect(() => {
    fetchRandomVideo(); // Fetch initial random video
    const interval = setInterval(fetchRandomVideo, 60000); // Fetch a new random video every minute

    return () => {
      clearInterval(interval); // Cleanup the interval when the component unmounts
    };
  }, []);

  const handleNextButtonClick = () => {
    fetchRandomVideo(); // Fetch a new random video when the next button is clicked
  };

  return (
    <div className="youtube-container">
      {videoUrl ? (
        <div className="video-wrapper">
          <ReactPlayer
            className="video-player"
            url={videoUrl}
            width="100%"
            height="100%"
            controls
          />
        </div>
      ) : (
        <p className="loading-message">Loading...</p>
      )}
      <div className="next-button-container">
        <Button className="next-button" onClick={handleNextButtonClick}>
          Generate
        </Button>
      </div>
    </div>
  );
};
