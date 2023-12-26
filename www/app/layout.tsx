import "./globals.css";

import { colors } from "./globalTokens.stylex";
import * as stylex from "@stylexjs/stylex";

export const metadata = {
  title: "Vortex UI",
  description: "Beautiful UI components for React with Stylex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html {...stylex.props(styles.html, styles.reset)} lang="en">
      <body {...stylex.props(styles.reset, styles.body)}>{children}</body>
    </html>
  );
}

const styles = stylex.create({
  html: {
    colorScheme: "light dark",
  },
  reset: {
    minHeight: "100%",
    margin: 0,
    padding: 0,
  },
  body: {
    color: colors.primaryForeground,
    backgroundColor: colors.background,
  },
});
