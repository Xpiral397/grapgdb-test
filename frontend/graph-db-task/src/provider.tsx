import { ReactNode } from "react";
import Navbar from "./component/navbar";
import { TabProvider } from "./context/localContext";
import Sidebar from "./component/sidebar";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-[#FAFAFA]">
      <TabProvider>
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <main className="flex-1 p-6 ">{children}</main>
        </div>{" "}
      </TabProvider>
    </div>
  );
}


export default Layout;
