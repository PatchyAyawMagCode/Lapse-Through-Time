import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible && !isPlaying) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else if (!isVisible && isPlaying) {
      video.pause();
      setIsPlaying(false);
    }
  }, [isVisible]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress);
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => video.removeEventListener("timeupdate", updateProgress);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const percentage = x / bounds.width;
    video.currentTime = percentage * video.duration;
  };

  return (
    <section
      id="video"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif font-semibold text-3xl md:text-4xl mb-4" data-testid="heading-video">
            Watch Time Unfold
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the passage of time through our curated timelapse collection
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative group rounded-xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover"
              loop
              muted={isMuted}
              playsInline
              data-testid="video-player"
            >
              <source
                src="/assets/YTDown.com_YouTube_1-5-YEARS-4-minutes-Time-lapse-compilati_Media_hTPjZ-yt_3Y_001_1080p_1761317555814.mp4"
                type="video/mp4"
              />
            </video>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div
                className="w-full h-1 bg-white/30 rounded-full mb-4 cursor-pointer"
                onClick={handleProgressClick}
                data-testid="video-progress-bar"
              >
                <div
                  className="h-full bg-white rounded-full transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-white hover-elevate active-elevate-2"
                    onClick={togglePlay}
                    data-testid="button-play-pause"
                  >
                    {isPlaying ? (
                      <Pause className="h-5 w-5" data-testid="icon-pause" />
                    ) : (
                      <Play className="h-5 w-5" data-testid="icon-play" />
                    )}
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-white hover-elevate active-elevate-2"
                    onClick={toggleMute}
                    data-testid="button-mute"
                  >
                    {isMuted ? (
                      <VolumeX className="h-5 w-5" data-testid="icon-muted" />
                    ) : (
                      <Volume2 className="h-5 w-5" data-testid="icon-unmuted" />
                    )}
                  </Button>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white hover-elevate active-elevate-2"
                  onClick={toggleFullscreen}
                  data-testid="button-fullscreen"
                >
                  <Maximize className="h-5 w-5" data-testid="icon-fullscreen" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
