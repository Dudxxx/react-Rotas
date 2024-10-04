import { Outlet } from "react-router-dom";
import { Menu } from "../components/Menu/Menu";

export function Layout() {

  return (
    <div className="flex
    w-screen min-h-screen">
      <Menu />
      <main>
        <Outlet />
      </main>
    </div>
  )
}