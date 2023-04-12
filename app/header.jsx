import React from "react";
import styles from "@/styles/header.module.css";

import { CgMenu } from "react-icons/cg";
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
              <Logo />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
