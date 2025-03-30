import React from 'react';
import '../Styles/AVVideo.css'; // Ensure correct path

const AwarenessVideos = () => {
  const videoLinks = [
    "https://www.youtube.com/watch?v=JUdiKi20p5o&utm_source=chatgpt.com",
    "https://www.youtube.com/watch?v=qUTymjLmoyk&utm_source=chatgpt.com",
    "https://m.youtube.com/watch?t=0s&v=RW15LkCGU1o"
  ];

  const videoDescriptions = [
    "Learn about pet care essentials in this informative video.",
    "Discover tips for keeping your pets healthy and happy.",
    "Explore the importance of pet adoption and rescue."
  ];

return (
    <div className="awareness-container">
        <br /><br /><br /><br /><br />
        <h2 className="heading"><b>Pet Awareness Videos</b></h2>
        <div className="video-list">
            {videoLinks.map((link, index) => (
                <div key={index} className="video-card">
                    <iframe
                        width="560"
                        height="315"
                        src={link}
                        title={`YouTube Video ${index + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <p className="video-description">{videoDescriptions[index]}</p>
                    <br /><br /><br /><br /><br />
                </div>
            ))}
        </div>
    </div>
);
};

export default AwarenessVideos;
