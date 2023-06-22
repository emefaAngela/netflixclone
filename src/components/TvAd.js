import React from "react";
const TvAd = () => {
    return ( 
        <div className=" ">
            {/* <!-- TV ad --> */}
    <section id="Tv-ad">
      <div
        class="md:pr-24 md:pl-24    md:pb-24 md:pt-24 flex flex-row md:flex-row w-full bg-black items-center justify-center"
      >
        {/* <!-- Text --> */}
        <div class="w-3/4 text-center md:w-1/2 text-white md:text-left ">
          <p class="text-2xl md:text-5xl font-bold pb-5 pt-5">
            Enjoy on your TV.
          </p>
          <p class="md:text-lg font-bold">
            Watch on Smart TV's, Playstations,Xbox,Chromecast,Apple TV,Blu-ray
            players,and more.
          </p>
        </div>

        {/* <!-- TV image --> */}
        <div class="w-1/2 " 
        // style={"background-image: url(.images/tv.png)"}
        >
          <img src="images/tv.png" alt="" class="" />
          {/* <video
            class=""
            controls
            width="100"
            height="100"
            autoplay="yes"
            loop="loop"
          > */}
            {/* <source
            className="p-12"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              type="video/mp4"
            /> */}
          {/* </video> */}

{/* <!-- test --> */}
      <div>
        <div class="test  bg-black">
          <img src="./images/tv.png" alt="" />
        </div>
        <div class="top-100 left-100  ">
          <video controls width="350" height="350" autoplay="yes" loop="loop">
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      {/* <!-- test --> */}

        </div>
      </div>

      {/* <!-- test --> */}
      {/* <div>
        <div class="test relative bg-black">
          <img src="./images/tv.png" alt="" />
        </div>
        <div class="top-100 left-100 absolute">
          <video controls width="300" height="300" autoplay="yes" loop="loop">
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div> */}
      {/* <!-- test --> */}
    </section>
    {/* <!-- End of TV ad --> */}

        </div>
     );
}
 
export default TvAd;