import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const LayoutContainer = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="w-full h-[calc(100dvh-18dvh)] px-6 py-8 overflow-y-auto overflow-x-hidden scrollbar-hide antialiased border-2">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default LayoutContainer;
