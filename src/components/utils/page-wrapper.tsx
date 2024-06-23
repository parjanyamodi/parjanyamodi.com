import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <UIWrappers>
      <div className="flex flex-col min-h-screen w-full">
        <Navbar />
        <div className="flex flex-col w-full h-full">
          {children}
        </div>
        <Footer />
      </div>
    </UIWrappers>
  );
}

function UIWrappers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}