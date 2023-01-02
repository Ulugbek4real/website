
import Footer from "./footer"
import Sidebar from "./sidebar"
import Sidedesk from "./sidedesk"
import Topbar from "./topbar"


export default function Layout({ children }) {
  return (
    <div className="flex justify-between max-w-[1500px] mx-auto">
      <Sidebar className="" />
      <div className=" flex-1">
      <Topbar /> 
      <main >{children}</main>
      <Footer />
      </div>
      <Sidedesk className=""/>

    </div>
  )
}