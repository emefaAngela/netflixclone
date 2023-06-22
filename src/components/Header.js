import React from "react";
import Logo from "../images/Netflix-Logo.png";
const Header = () => {
    return ( 
        <div>
            <div className="flex flex-row justify-between md:mx-5  pt-5 pb-24  ">
        <div className=" ml-12">
          <img src={Logo} className="h-48 w-48" alt="" />
        </div>
        {/* <!-- Sign in button --> */}
        <div className="pt-8">
          <a href="/" class="rounded-lg text-white bg-red w-48 mt-10 p-2"
            >Sign In</a
          >
        </div>
      </div>
        </div>
     );
}
 
export default Header;