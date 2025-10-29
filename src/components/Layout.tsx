import { Outlet } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout__container">
      <SidebarMenu />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
