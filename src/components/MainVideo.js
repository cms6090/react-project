import React, { useState, useRef, useEffect } from "react";
import "./MainVideo.css";
import a from "../assets/video/대가족.mp4";
import b from "../assets/video/레몬그라스.mp4";
import c from "../assets/video/원정빌라.mp4";

const MainVideo = () => {
  const movies = [
    {
      id: "1",
      title: "대가족",
      txt: "재미, 감동으로 꽉 채웠다<br />올 겨울 가족 코미디 맛집",
      url: a,
    },
    {
      id: "2",
      title: "레몬그라스",
      txt: "두근두근 첫사랑이 시작됐다!<br />지금 CGV에서 설렘 충전!",
      url: b,
    },
    {
      id: "3",
      title: "원정빌라",
      txt: "2024 현실 공포 도시괴담<br />네 이웃을 믿지 마라!",
      url: c,
    },
  ];

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    setSelectedMovie(randomMovie);
  }, []);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  if (!selectedMovie) return null;

  return (
    <div
      style={{ display: "flex", justifyContent: "center", background: "black" }}
    >
      <div className="video-contents">
        <div className="video-wrap">
          <div className="video-overlay"></div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <video ref={videoRef} autoPlay muted loop className="movie-video">
              <source src={selectedMovie.url} type="video/mp4" />
            </video>
          </div>
          <div className="movie-video-info-container">
            <h1 className="movie-video-title">{selectedMovie.title}</h1>
            <p
              className="movie-video-txt"
              dangerouslySetInnerHTML={{ __html: selectedMovie.txt }}
            ></p>

            <div className="video-controller-container">
              <button
                className="detail"
                onClick={() => (window.location.href = "movie.html")}
              >
                상세보기
              </button>
              <button className="playStop" onClick={togglePlay}>
                <span className="material-symbols-outlined">
                  {isPlaying ? "pause" : "play_arrow"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainVideo;
