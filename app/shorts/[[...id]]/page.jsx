import React from "react";
import styles from "@/styles/player.module.css";

import Image from "next/image";

function Home() {
  return (
    <main className={styles.root}>
      <div className={styles.container}>
        <div className={styles.videoContainer}>
          <video className={styles.video} loop="true" autoplay="autoplay" muted>
            <source src="/videos/pexels-pavel-danilyuk-5495899-1080x1920-30fps.mp4" />
          </video>
        </div>
        <div className={styles.videoActions}>
          <div>
            <Image
              src="/images/logo.jpg"
              alt="sound image"
              width={40}
              height={40}
              className={styles.soundImage}
            />
          </div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </main>
  );
}

export default Home;
