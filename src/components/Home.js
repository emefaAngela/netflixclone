import React from "react";
import image from "../images/newimage.png"
import Header from "./Header";
import TvAd from "./TvAd";
const Home = () => {
    return ( 
      <div className=" bg-black inset-0 bg-opacity-100 ">
       <div  
       
    className="flex flex-col w-full bg-homescreen  h-full absolute"
       >
   
        <div className="w-full inset-0 bg-homescreen bg-black bg-opacity-100 ">
            <div className="    ">
               
                <Header/>
        <div className="flex flex-col items-center justify-center   md:pl-40 md:pr-40 ">
        {/* <!-- paragraph 1 --> */}
        <nav className="text-6xl pt-12 w-80% font-bold  md:text-6xl text-white md:w-3/4 text-center">
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
            className="flex-1 py-3 h-32 w-1/4 bg-black border-2 border-white rounded-sm "
          />
          <a
            href="/"
            className="rounded-sm hidden rounded-l-none h-32 items-center py-2.5 justify-center bg-red text-white font-bold px-3 text-center md:flex"
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
       
       </div>
     );
}
 
export default Home;