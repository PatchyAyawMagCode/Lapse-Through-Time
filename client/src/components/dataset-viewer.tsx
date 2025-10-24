import { useState, useRef } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";

interface DatasetViewerProps {
  title: string;
  subtitle: string;
  contentTitle: string;
  contentDescription: string;
  placeholderImage?: string;
}

export function DatasetViewer({
  title,
  subtitle,
  contentTitle,
  contentDescription,
  placeholderImage,
}: DatasetViewerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [progress, setProgress] = useState([0]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setProgress([0]);
    setIsPlaying(false);
  };

  const handleSpeedChange = (newSpeed: number) => {
    setSpeed(newSpeed);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2" data-testid="heading-dataset-title">
          {title}
        </h1>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>

      <div className="bg-muted rounded-lg aspect-video flex items-center justify-center mb-8 relative overflow-hidden">
        <video
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          autoPlay
          data-testid="dataset-video"
        >
          <source
            src="/assets/YTDown.com_YouTube_1-5-YEARS-4-minutes-Time-lapse-compilati_Media_hTPjZ-yt_3Y_001_1080p_1761317555814.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4" data-testid="heading-content-title">
          {contentTitle}
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          {contentDescription}
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-center gap-4">
          <Button
            size="icon"
            variant="ghost"
            onClick={handleReset}
            data-testid="button-reset"
          >
            <RotateCcw className="h-5 w-5" />
          </Button>

          <Button
            size="default"
            variant="default"
            onClick={handlePlayPause}
            className="min-w-[100px]"
            data-testid="button-play-pause"
          >
            {isPlaying ? (
              <>
                <Pause className="h-4 w-4 mr-2" />
                Pause
              </>
            ) : (
              <>
                <Play className="h-4 w-4 mr-2" />
                Play
              </>
            )}
          </Button>

          <div className="flex items-center gap-2">
            {[0.5, 1, 2].map((speedOption) => (
              <Button
                key={speedOption}
                size="sm"
                variant={speed === speedOption ? "default" : "secondary"}
                className="min-w-[60px]"
                onClick={() => handleSpeedChange(speedOption)}
                data-testid={`button-speed-${speedOption}x`}
              >
                {speedOption}x
              </Button>
            ))}
          </div>
        </div>

        <div className="px-4">
          <Slider
            value={progress}
            onValueChange={setProgress}
            max={100}
            step={1}
            className="w-full"
            data-testid="slider-progress"
          />
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Navigate through decades of change - Interactive exploration
        </p>
      </div>

      <div className="mt-16 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-center">
        <p className="text-white text-lg font-medium">
          This is a demonstration with placeholder content
        </p>
      </div>
    </div>
  );
}
