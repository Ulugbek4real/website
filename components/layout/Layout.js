import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import Sidedesk from "../sidedesk/Sidedesk";
import Topbar from "../topbar/Topbar";

export default function Layout({ children, posts }) {
  return (
    <div className="flex justify-between max-w-[1500px] mx-auto ">
      <Sidebar className="" />
      <div className=" flex-1">
        <Topbar />
        <main>{children}</main>
        <Footer posts={posts} />
      </div>
      <Sidedesk posts={posts} className="" />
    </div>
  );
}
