import { ArrowRight, Pause, Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const VideoPlayer = () => {
  const videos = ["/video1.mp4", "/video2.mp4", "/video3.mp4"];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    const nextIndex = (currentVideoIndex + 1) % videos.length;
    setCurrentVideoIndex(nextIndex);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videos[currentVideoIndex];
      videoRef.current.load();
      if (isPlaying) {
        videoRef.current.play().catch(err => console.log("Autoplay prevented:", err));
      }
    }
  }, [currentVideoIndex]);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(err => console.log("Autoplay prevented:", err));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="relative group rounded-lg overflow-hidden aspect-[9/9] md:aspect-[3/4] lg:aspect-video bg-gray-900 shadow-xl">
      <video
        ref={videoRef}
        src={videos[currentVideoIndex]}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <button
        onClick={togglePlay}
        className="absolute bottom-4 left-4 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-2.5 transition-all duration-200 opacity-0 group-hover:opacity-100"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <Pause className="h-5 w-5 text-white fill-white" />
        ) : (
          <Play className="h-5 w-5 text-white fill-white" />
        )}
      </button>
    </div>
  );
};



export default VideoPlayer