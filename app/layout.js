import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://yourdomain.com"), // change later (can leave for now)
  title: {
    default: "Adewumi Web, Design & Marketing Portfolio",
    template: "%s | Adewumi",
  },
  description:
    "Portfolio of Adewumi Web Development, Graphic Design, Email Marketing, Content Writing, and Promotional Videos.",
  openGraph: {
    title: "Adewumi — Portfolio",
    description:
      "Projects across web, Amazon, email marketing, design, and video.",
    url: "https://yourdomain.com", // change later
    siteName: "Adewumi",
    images: [
      {
        url: "/images/og-image.jpg", // public/Images/og-image.jpg
        width: 1200,
        height: 630,
        alt: "Adewumi Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adewumi — Portfolio",
    description:
      "Projects across web, Amazon, email marketing, design, and video.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}