import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import './youtube.styles.css';
import { Button } from '@components/button';

export const VideoPage: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>("");

  const fetchRandomVideo = async () => {
    try {
      const response = await fetch("http://localhost:8888/.netlify/functions/youtube"); // Replace with your backend API endpoint
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
  console.log(videoUrl);
  
  return (
    <div>
      
      {videoUrl ? (
        // <div className="youtube">
        //   <ReactPlayer url={videoUrl} width="1000px" height="450px" controls />
        // </div>
        <div>
        <div className="div-style">
          <iframe src={videoUrl} className="inframe"  allow="autoplay; fullscreen; picture-in-picture">
            </iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
        <p><a href="https://vimeo.com/825970185">Soft Animals</a> from <a href="https://vimeo.com/reneezhan">Renee Zhan</a> on <a href="https://vimeo.com">Vimeo</a>.</p></div>
      ) : (
        <p>Loading...</p>
      )}
      <div className="next-button-container">
      <Button onClick={handleNextButtonClick}>Generate</Button> {/* Add Next button */}
      </div>
    </div>
  );
};
