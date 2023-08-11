import { React } from "react";
import Header from "../components/atoms/header";
import Sidebar from "../components/atoms/Sidebar";

const WrapperNavbar =
  ({ Component }) =>
  () => {
    const items = [{ label: "Home", icon: "pi pi-fw pi-home" }];
    return (
      <>
        <Header />
        <div class="relative w-full">
          <Sidebar />
          <div class="absolute top-[3.75rem] right-0 min-h-[calc(100vh-3.75rem)] w-[calc(100vw-12.25rem)] ">
            <Component />
          </div>
        </div>
      </>
    );
  };

export default WrapperNavbar;
