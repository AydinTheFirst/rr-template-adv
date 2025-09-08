import { Outlet } from "react-router";

import NavbarComponent from "./navbar";

export default function LandingLayout() {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
    </div>
  );
}
