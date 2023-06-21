import React from "react";
import logo from "../images/logo.jpg"
import Header from "./Header";
const Home = () => {
    return ( 
       <div  
       
      //  className="bg-[url('../images/logo.jpg')]" 
    className="flex flex-col"
       >
     {/* <Header/> */}
        <div>
            <div className="  bg-homescreen w-full   ">
                {/* <img src={logo} alt="" /> */}
                <Header/>
        <div className="flex flex-col items-center justify-center relative  md:pl-40 md:pr-40 ">
        {/* <!-- paragraph 1 --> */}
        <nav class="text-3xl pt-12 w-80%  md:text-6xl text-white md:w-3/4 text-center">
          Unlimited movies,TV shows, and more.
        </nav>
        {/* <!--paragraph 2  --> */}
        <p class="font-bold text-xl md:text-2xl text-white pt-5">
          Watch anywhere. Cancel anytime.
        </p>
        {/* <!-- Paragraph 3 --> */}
        <p
          className="font-bold text-md text-white font-mono pt-10 w-full text-center"
        >
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      {/* <!-- mini form --> */}
      <div className="w-full flex items-center justify-center">
        <div
          className="md:pl-40 md:pr-40 flex flex-col w-3/4 items-center justify-center md:flex-row"
        >
          <input
            type="text"
            placeholder="Email address"
            class="flex-1 py-3 h-full rounded-sm rounded-r-none"
          />
          <a
            href="/"
            class="rounded-sm hidden rounded-l-none h-full items-center py-2.5 justify-center bg-red text-white font-bold px-3 text-center md:flex"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="flex flex-row w-full items-center justify-center">
        <button className="md:hidden bg-red text-white px-4 py-3">
          Get Started
        </button>
      </div>
      </div>
      </div>
      
       </div> 
     );
}
 
export default Home;