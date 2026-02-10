"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const TOTAL_FRAMES = 192;

interface StoryBeat {
  id: string;
  title: string;
  subtitle: string;
  startProgress: number;
  endProgress: number;
}

const storyBeats: StoryBeat[] = [
  {
    id: "beat-a",
    title: "Klientai rašo. Jūs miegate.",
    subtitle: "Pokalbių robotas dirba 24/7 — atsakinėja, konsultuoja ir surenka užsakymus už jus.",
    startProgress: 0,
    endProgress: 0.2,
  },
  {
    id: "beat-b",
    title: "Naujas užsakymas? Sutartis jau išsiųsta.",
    subtitle:
      "Sistema automatiškai paruošia ir išsiunčia sutartį klientui. Jums nereikia nieko daryti.",
    startProgress: 0.25,
    endProgress: 0.45,
  },
  {
    id: "beat-c",
    title: "Baldai pristatyti? Atsiliepimas jau prašomas.",
    subtitle:
      "Kai projektas pažymimas kaip baigtas, klientas automatiškai gauna kvietimą palikti atsiliepimą.",
    startProgress: 0.5,
    endProgress: 0.7,
  },
  {
    id: "beat-d",
    title: "Jūs kuriate baldus. Sistema rūpinasi visa kita.",
    subtitle: "Nuo pirmo kontakto iki atsiliepimo — viskas automatizuota.",
    startProgress: 0.75,
    endProgress: 0.9,
  },
];

function StoryBeatOverlay({
  beat,
  scrollProgress,
}: {
  beat: StoryBeat;
  scrollProgress: number;
}) {
  const midPoint = (beat.startProgress + beat.endProgress) / 2;
  const fadeInEnd = beat.startProgress + (midPoint - beat.startProgress) * 0.6;
  const fadeOutStart = midPoint + (beat.endProgress - midPoint) * 0.4;

  let opacity = 0;
  let y = 30;
  let blur = 0;

  if (scrollProgress >= beat.startProgress && scrollProgress <= fadeInEnd) {
    const t = (scrollProgress - beat.startProgress) / (fadeInEnd - beat.startProgress);
    opacity = t;
    y = 30 * (1 - t);
    blur = 0;
  } else if (scrollProgress > fadeInEnd && scrollProgress < fadeOutStart) {
    opacity = 1;
    y = 0;
    blur = 0;
  } else if (scrollProgress >= fadeOutStart && scrollProgress <= beat.endProgress) {
    const t = (scrollProgress - fadeOutStart) / (beat.endProgress - fadeOutStart);
    opacity = 1 - t;
    y = 0;
    blur = 10 * t;
  }

  if (scrollProgress < beat.startProgress || scrollProgress > beat.endProgress) {
    return null;
  }

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-20"
      style={{
        opacity,
        transform: `translateY(${y}px)`,
        filter: `blur(${blur}px)`,
      }}
    >
      {/* Dark backdrop behind text */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      <h1
        className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-[1.1]"
        style={{ textShadow: '0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)' }}
      >
        {beat.title}
      </h1>
      <p
        className="relative text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed"
        style={{ textShadow: '0 2px 20px rgba(0,0,0,0.9), 0 1px 5px rgba(0,0,0,0.8)' }}
      >
        {beat.subtitle}
      </p>
    </motion.div>
  );
}

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Preload all images
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises: Promise<HTMLImageElement>[] = [];

      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const promise = new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            setLoadingProgress((prev) => Math.min(prev + 1 / TOTAL_FRAMES, 1));
            resolve(img);
          };
          img.onerror = reject;
          img.src = `/sequence/frame_${i}.jpg`;
        });
        imagePromises.push(promise);
      }

      try {
        const loadedImages = await Promise.all(imagePromises);
        setImages(loadedImages);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Failed to load images:", error);
      }
    };

    loadImages();
  }, []);

  // Render current frame
  useEffect(() => {
    if (!imagesLoaded || images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvas = () => {
      const progress = smoothProgress.get();
      const frameIndex = Math.min(
        Math.floor(progress * (TOTAL_FRAMES - 1)),
        TOTAL_FRAMES - 1
      );

      const img = images[frameIndex];
      if (!img) return;

      // Set canvas size
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Calculate cover dimensions
      const imgRatio = img.width / img.height;
      const canvasRatio = canvas.width / canvas.height;

      let drawWidth, drawHeight, drawX, drawY;

      if (canvasRatio > imgRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        drawX = 0;
        drawY = (canvas.height - drawHeight) / 2;
      } else {
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgRatio;
        drawX = (canvas.width - drawWidth) / 2;
        drawY = 0;
      }

      // Clear and draw
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);

      // Add vignette overlay
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.7
      );
      gradient.addColorStop(0, "transparent");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.6)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const unsubscribe = smoothProgress.on("change", updateCanvas);
    updateCanvas();

    const handleResize = () => updateCanvas();
    window.addEventListener("resize", handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, [imagesLoaded, images, smoothProgress]);

  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (v) => {
      setCurrentProgress(v);
    });
    return unsubscribe;
  }, [smoothProgress]);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Loading Screen */}
        {!imagesLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-50">
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
              <motion.div
                className="h-full bg-[#BFF549] rounded-full"
                style={{ width: `${loadingProgress * 100}%` }}
              />
            </div>
            <p className="text-[#99A1AF] text-sm tracking-widest uppercase">
              Kraunama...
            </p>
          </div>
        )}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none" />

        {/* Story Beats */}
        {storyBeats.map((beat) => (
          <StoryBeatOverlay
            key={beat.id}
            beat={beat}
            scrollProgress={currentProgress}
          />
        ))}

        {/* Scroll Indicator */}
        {currentProgress < 0.1 && (
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <span className="text-[#99A1AF] text-xs tracking-[0.3em] uppercase">
              Slinkite žemyn
            </span>
            <motion.div
              className="w-5 h-8 border-2 border-[#99A1AF]/50 rounded-full flex justify-center pt-2"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <motion.div className="w-1 h-2 bg-[#BFF549] rounded-full" />
            </motion.div>
          </motion.div>
        )}

        {/* Progress Bar */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 h-32 w-0.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="w-full bg-[#BFF549] rounded-full origin-top"
            style={{ height: `${currentProgress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
