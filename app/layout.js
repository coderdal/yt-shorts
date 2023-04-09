import "./globals.css";

export const metadata = {
  title: "YT Shorts | @coderdal",
  description: "Developed by @CodErdal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
