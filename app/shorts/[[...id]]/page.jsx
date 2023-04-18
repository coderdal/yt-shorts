"use client";
import React from "react";
import styles from "@/styles/player.module.css";

import Video from "@/components/video";

function Home() {
  return (
    <main className={styles.root}>
      <div className={styles.videoList}>
        <Video
          details={{
            likesCount: 22,
            commentsCount: 36,
            soundImage: "/images/logo.jpg",
            profileImage: "/images/logo.jpg",
            channelName: "@CodErdal",
            videoDesc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            videoSrc:
              "/videos/pexels-pavel-danilyuk-5495899-1080x1920-30fps.mp4",
          }}
        />
        <Video
          details={{
            likesCount: 22,
            commentsCount: 36,
            soundImage: "/images/logo.jpg",
            profileImage: "/images/logo.jpg",
            channelName: "@CodErdal",
            videoDesc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            videoSrc:
              "/videos/pexels-pavel-danilyuk-5495899-1080x1920-30fps.mp4",
          }}
        />
      </div>
    </main>
  );
}

export default Home;
