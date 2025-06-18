import type { Metadata } from "next";
import Provider from "@/components/provider/Provider";
import LayoutContainer from "@/components/layout/LayoutContainer";
import "./globals.css";

export const metadata: Metadata = {
  title: "재고 카운터",
  description: "재고 파악을 쉽고 간편하게",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="mx-auto max-w-md h-[100dvh] overflow-y-hidden border-2">
        <Provider>
          <LayoutContainer>{children}</LayoutContainer>
        </Provider>
      </body>
    </html>
  );
}
