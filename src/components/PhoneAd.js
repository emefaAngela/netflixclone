import React from "react";
import image from "../images/mobile-0819.jpg";
const PhoneAd = () => {
    return ( 
        <div>
             {/* <!-- Phone ad --> */}
    <section id="Phone-ad">
      <div
        class="md:pr-8 md:pl-8 md:pt-12 md:pb-24 h-72 flex-col flex md:flex-row-reverse w-full bg-black items-center justify-center"
      >
        {/* <!-- Text --> */}
        <div class="w-3/4 md:w-1/2 mt-4 text-white text-center md:text-left">
          <p class="text-2xl md:text-5xl font-bold pb-5">
            Download your shows to watch offline.
          </p>
          <p class="text-lg md:text-xl font-bold">
            Save your favourites easily and always have something to watch.
          </p>
        </div>

        {/* <!-- Phone image --> */}
        <div class="w-3/4 md:w-1/2 mb-5">
          <img src={image} alt="" />
          <div
            class="w-80 h-16 md:h-20 left-36 md:left-48 -mt-20 md:-mt-32 absolute bg-black rounded-lg flex flex-row space-x-5 border-solid border-2 border-slate-700 p-2"
          >
            <img src="images/boxshot.png" alt="" />
            <div class="flex flex-col space-y-2">
              <p class="text-white font-bold text-lg">Stranger Things</p>
              <p class="font-semibold text-sm text-blue-800">Downloading...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- End of Phone ad --> */}

        </div>
     );
}
 
export default PhoneAd;