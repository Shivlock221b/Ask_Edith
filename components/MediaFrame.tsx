"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "./icons";

type Media = { type: "placeholder" | "video" | "youtube" | "image"; src: string; poster?: string };

export function MediaFrame({ media, variant = "hero", label = "Prototype media placeholder", notice }: { media: Media; variant?: "hero" | "demo"; label?: string; notice?: string }) {
  const [failed, setFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const placeholder = media.type === "placeholder" || !media.src || failed;

  function keepHeroInsidePreview() {
    if (variant === "hero" && videoRef.current && videoRef.current.currentTime >= 20) {
      videoRef.current.currentTime = 0;
      void videoRef.current.play();
    }
  }

  return (
    <motion.div className={`media-frame media-${variant}`} initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .2 }}>
      <div className="media-chrome"><span>EDITH / {media.type === "image" ? "CONCEPT STUDY" : "OPTICAL INPUT"}</span><span>{media.type === "image" ? "FORM / 01" : "REC • 00:00:00"}</span></div>
      {placeholder && (
        <div className="device-stage">
          <div className="scanline" />
          <div className="device-sketch" aria-hidden="true"><span className="lens" /><span className="sensor" /><span className="touch" /></div>
          <div className="media-center"><span className="play-button"><Play className="icon" /></span><strong>{label}</strong><small>Replace with real prototype media</small></div>
          <span className="float-label label-camera">CAMERA <i /></span>
          <span className="float-label label-audio">AUDIO <i /></span>
          <span className="float-label label-context">CONTEXT <i /></span>
        </div>
      )}
      {!placeholder && media.type === "video" && (
        <>
          <video
            ref={videoRef}
            src={media.src}
            poster={media.poster}
            muted
            loop={variant === "demo"}
            autoPlay
            playsInline
            preload="metadata"
            controls={variant === "demo"}
            onTimeUpdate={keepHeroInsidePreview}
            onError={() => setFailed(true)}
            aria-label={label}
          />
        </>
      )}
      {!placeholder && media.type === "image" && <div className="media-image"><Image src={media.src} alt={label} fill sizes="(max-width: 700px) 100vw, 70vw" onError={() => setFailed(true)} />{notice && <span className="media-notice">{notice}</span>}</div>}
      {!placeholder && media.type === "youtube" && <iframe src={media.src} title={label} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />}
      <div className="media-footer"><span>{media.type === "image" ? "CONCEPT / NOT CURRENT HARDWARE" : "PROTOTYPE_00"}</span><span>INDIA / 2026</span></div>
    </motion.div>
  );
}
