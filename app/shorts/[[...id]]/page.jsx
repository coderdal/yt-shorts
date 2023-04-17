import React from "react";
import styles from "@/styles/player.module.css";

import Image from "next/image";

import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosShareAlt } from "react-icons/io";
import { MdComment } from "react-icons/md";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

function Home() {
  return (
    <main className={styles.root}>
      <div className={styles.container}>
        <div className={styles.videoContainer}>
          <div className={styles.videoDetails}>
            <p className={styles.description}>testtesttest</p>
          </div>
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

          <div className={styles.action}>
            <button className={styles.actionButton}>
              <HiOutlineDotsHorizontal />
            </button>
          </div>

          <div className={styles.action}>
            <button className={styles.actionButton}>
              <IoIosShareAlt />
            </button>
            <span className={styles.actionText}>Share</span>
          </div>

          <div className={styles.action}>
            <button className={styles.actionButton}>
              <MdComment />
            </button>
            <span className={styles.actionText}>36</span>
          </div>

          <div className={styles.action}>
            <button className={styles.actionButton}>
              <AiFillDislike className={styles.actionReverse} />
            </button>
            <span className={styles.actionText}>Dislike</span>
          </div>

          <div className={styles.action}>
            <button className={styles.actionButton}>
              <AiFillLike />
            </button>
            <span className={styles.actionText}>190</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
