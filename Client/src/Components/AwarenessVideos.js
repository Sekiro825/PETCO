import React, { useEffect, useState } from "react";
import axios from "axios";

const AwarenessVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/video/videos").then((res) => {
      setVideos(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Pet Awareness Videos</h2>
      {videos.map((video, index) => (
        <div key={index}>
          <h3>{video.title}</h3>
          <iframe
            width="560"
            height="315"
            src={video.url.replace("watch?v=", "embed/")}
            title={video.title}
            allowFullScreen
          ></iframe>
          <p>{video.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AwarenessVideos;
