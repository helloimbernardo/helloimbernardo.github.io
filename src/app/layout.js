import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "bernardo",
  description: ":3",
  openGraph: {
    title: "bernardo",
    description: ":3",
    url: "helloimbernardo.github.io",
    siteName: "bernardo",
    images: [
      {
        url: "https://helloimbernardo.github.io/og.png",
        width: 1920,
        height: 1080,
        alt: 'Terminal window saying "Hello, I\'m bernardo"',
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "bernardo&apos;s site",
    description: "Personal site for hellobernardo",
    creator: "@helloimbernardo",
    creatorId: "1145366758376841216",
    images: {
      url: "https://helloimbernardo.github.io/og.png",
      alt: 'Terminal window saying "Hello, I\'m bernardo"',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
