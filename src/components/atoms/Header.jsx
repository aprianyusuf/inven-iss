import React from "react";
import Logo from "../../assets/Logo.png"

const Header = () => {
    return (
        <div class="bg-primary border-y w-full px-4 py-3 flex fixed top-0 z-[9999] justify-between items-center">
          <div>
            <img src={Logo} class="h-9 pl-12 w-auto"/>
          </div>
          <div></div>
        </div>
      );
};

export default Header;
