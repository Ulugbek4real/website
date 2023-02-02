import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Sidedesk from "./Sidedesk";
import Topbar from "./Topbar";

export default function Layout({ children, posts }) {
  return (
    <div className="flex justify-between max-w-[1500px] mx-auto ">
      <Sidebar className="" />
      <div className=" flex-1">
        <Topbar />
        <main>{children}</main>
        <Footer />
      </div>
      <Sidedesk posts={posts} className="" />
    </div>
  );
}
