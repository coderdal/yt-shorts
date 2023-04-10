import "./globals.css";

import Header from "./header";
import NavigationMenu from "./navigationMenu";
import styles from "@/styles/layout.module.css";

export const metadata = {
  title: "YT Shorts | @coderdal",
  description: "Developed by @CodErdal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.app}>
        <Header />
        <NavigationMenu />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
