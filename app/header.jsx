import React from "react";
import styles from "@/styles/header.module.css";

import { CgMenu, CgProfile } from "react-icons/cg";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { TfiSearch } from "react-icons/tfi";

import Logo from "@/app/logo.jsx";

import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.appLogo}>
        <button className={styles.menuButton}>
          <CgMenu size={23} />
        </button>

        <div className={styles.logo}>
          <div className={styles.image}>
            <Link href={"/"} className={styles.link}>
              <Logo size={23} />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.searchContainer}>
        <div className={styles.searchInput}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className={styles.input}
          />
          <button className={styles.searchBtn}>
            <TfiSearch size={22} />
          </button>
        </div>
        <button className={styles.voiceSearchBtn}>
          <FaMicrophone size={20} />
        </button>
      </div>

      <div className={styles.actions}>
        <button className={styles.action}>
          <RiVideoAddLine size={23} />
        </button>
        <button className={styles.action}>
          <IoMdNotificationsOutline size={24} />
        </button>
        <button className={styles.action}>
          <CgProfile size={28} />
        </button>
      </div>
    </header>
  );
}
