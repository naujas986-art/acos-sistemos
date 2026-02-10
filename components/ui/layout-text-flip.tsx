"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LayoutTextFlip = ({
  text = "Build Amazing",
  words = ["Landing Pages", "Component Blocks", "Page Sections"],
  duration = 3000,
  className = "",
  wordClassName = "",
}: {
  text: string;
  words: string[];
  duration?: number;
  className?: string;
  wordClassName?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);
  const measureRef = useRef<HTMLDivElement>(null);

  // Measure the widest word once on mount to set fixed container width
  useEffect(() => {
    if (measureRef.current) {
      const spans = measureRef.current.querySelectorAll("span");
      let widest = 0;
      spans.forEach((span) => {
        const w = span.getBoundingClientRect().width;
        if (w > widest) widest = w;
      });
      setMaxWidth(widest);
    }
  }, [words]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <>
      {/* Hidden measurement container — renders all words off-screen to find the widest */}
      <div
        ref={measureRef}
        aria-hidden="true"
        className="absolute overflow-hidden"
        style={{ visibility: "hidden", height: 0, whiteSpace: "nowrap" }}
      >
        {words.map((word, i) => (
          <span key={i} className={wordClassName} style={{ display: "inline-block", padding: "0 1.5rem" }}>
            {word}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {/* Static text — absolutely no animation, stays in place */}
        <span className={className} style={{ flexShrink: 0 }}>
          {text}
        </span>

        {/* Flipping word — FIXED WIDTH container so layout never shifts */}
        <div
          className={`relative overflow-hidden rounded-xl border border-[#BFF549]/30 bg-[#BFF549]/10 px-5 py-2 sm:px-6 sm:py-3 text-center ${wordClassName}`}
          style={{
            flexShrink: 0,
            width: maxWidth > 0 ? `${maxWidth + 48}px` : "auto",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              exit={{ y: -30, opacity: 0, filter: "blur(8px)" }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block whitespace-nowrap text-[#BFF549]"
            >
              {words[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};
