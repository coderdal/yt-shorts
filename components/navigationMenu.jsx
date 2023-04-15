import React from "react";

import styles from "@/styles/navigationMenu.module.css";

import { CgHome } from "react-icons/cg";
import { BiMovie } from "react-icons/bi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import {
  MdOutlineSubscriptions,
  MdOutlineFeaturedPlayList,
} from "react-icons/md";

export default function NavigationMenu() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.items}>
        <li className={styles.item}>
          <CgHome size={22} />
          <span>Home</span>
        </li>

        <li className={styles.item}>
          <MdOutlineSubscriptions size={22} />
          <span>Subscriptions</span>
        </li>

        <a
          href="https://github.com/coderdal"
          target="_blank"
          className={styles.link}
        >
          <li className={styles.item}>
            <FiGithub size={22} />
            <span>Github</span>
          </li>
        </a>

        <a
          href="https://www.linkedin.com/in/muhammederdal/"
          target="_blank"
          className={styles.link}
        >
          <li className={styles.item}>
            <SlSocialLinkedin size={22} />
            <span>Linkedin</span>
          </li>
        </a>
      </ul>
    </nav>
  );
}
