import React from "react";

import styles from "@/styles/player.module.css";

import Image from "next/image";

import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosShareAlt } from "react-icons/io";
import { MdComment, MdVolumeUp } from "react-icons/md";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaPlay, FaPause } from "react-icons/fa";

export default function Video({ details }) {
  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <div className={styles.videoLayer}>
          <div className={styles.videoControls}>
            <button className={styles.button}>
              <FaPlay />
            </button>
            {/* <button className={styles.button}>
          <FaPause />
        </button> */}
            <button className={styles.button}>
              <MdVolumeUp size={22} />
            </button>
          </div>
          <div className={styles.videoDetails}>
            <p className={styles.description}>{details.videoDesc}</p>
            <div className={styles.channel}>
              <div className={styles.channelName}>
                <Image
                  src={details.profileImage}
                  width={24}
                  height={24}
                  alt="channel logo"
                  className={styles.channelLogo}
                />
                <span className={styles.nameText}>{details.channelName}</span>
              </div>
              <div className={styles.subscribe}>Subscribe</div>
            </div>
          </div>
        </div>
        <video className={styles.video} loop={true} autoPlay={true} muted>
          <source src={details.videoSrc} />
        </video>
      </div>
      <div className={styles.videoActions}>
        <div>
          <Image
            src={details.soundImage}
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
          <span className={styles.actionText}>{details.commentsCount}</span>
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
          <span className={styles.actionText}>{details.likesCount}</span>
        </div>
      </div>
    </div>
  );
}