import AiHeader from "@/components/shared/AiHeader";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <div className="root-container">
        <AiHeader />
        <div>{children}</div>
        <Toaster />
      </div>
    </main>
  );
};

export default Layout;
