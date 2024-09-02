import React from 'react';
import './App.css';

function App() {
    const videos = [
      { id: 1, title: "Siddhu Vlogs Kovai Virunthu Ep-6", url: "https://www.youtube.com/watch?v=SQ3nIQKKSqI" },
      { id: 2, title: "Cook with Comali season 2 Ep-12", url: "https://www.youtube.com/watch?v=B3a36YL8qwo" },
      { id: 3, title: "Ini Vlogs 1day in Appa Office", url: "https://www.youtube.com/watch?v=4rHlmWb8vc0" },
      { id: 4, title: "Big Boss Telugu-8 Day2 Promo", url: "https://www.youtube.com/watch?v=n_rzmzWkPWA" },
      { id: 5, title: "Vinay Vlogs Exploring Everything in Coimbatore", url: "https://www.youtube.com/watch?v=yOVzXIgCZQ4" },
      { id: 6, title: "Vj Siddhu in College Cultural's Day", url: "https://www.youtube.com/watch?v=7g4OdWYJtUU" },
      { id: 7, title: "Venkat Prabhu interview with Baradwaj Rangan about G.O.A.T ", url: "https://www.youtube.com/watch?v=IylEa08HLKM" },
      { id: 8, title: "Nakkalites Back to School S2 Ep-11", url: "https://www.youtube.com/watch?v=h2eAZOJT6Cg" },
      { id: 9, title: "Vj Siddhu Vlogs kolkata Series Re-release", url: "https://www.youtube.com/watch?v=2hOk09iSAKM" },
      { id: 10, title: "Makka Mishi Video Song | Jayam Ravi | Priyanka Mohan | Harris Jayaraj", url: "https://www.youtube.com/watch?v=eF9LRFbkHLQ" },
      { id: 11, title: "Kadhaipoma 2 Chapter7 Thodu Vaanam", url: "https://www.youtube.com/watch?v=IhY9xhXWT2M"},
      { id: 11, title: "vj Siddhu Vlogs Virunthu Ep-1", url: "https://www.youtube.com/watch?v=1zBuKn3KXFg"}
    ];
    
  

  return (
    <div className="sktube">
      <nav className="head">
        <div className="sk">SKTube</div>
      </nav>
      <div className="content">
        {videos.map((video) => (
          <a 
            key={video.id} 
            href={video.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="video"
          >
            <div className="videos">
              <img 
                src={`https://img.youtube.com/vi/${video.url.split('v=')[1]}/0.jpg`} 
                alt={video.title} 
              />
            </div>
            <div className="title">{video.title}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;