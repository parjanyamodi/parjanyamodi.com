import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PageWrapper from "@/components/utils/page-wrapper";

const jb_mono = JetBrains_Mono({
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jb_mono.className}>
        <PageWrapper>
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
