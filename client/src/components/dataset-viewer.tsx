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
        {placeholderImage ? (
          <img
            src={placeholderImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <div className="w-0 h-0 border-l-[40px] border-l-foreground border-t-[25px] border-t-transparent border-b-[25px] border-b-transparent" />
            </div>
            <p className="text-sm text-muted-foreground">Image/Video Holder</p>
          </div>
        )}
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
