
import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Home from "./components/Home";
import BreakLine from "./components/BreakLine";
import FooterDesktop from "./components/FooterDesktop";
import TvAd from "./components/TvAd";
import PhoneAd from "./components/PhoneAd";
import WatchEverywhere from "./components/WatchEverywhere";
import ForKids from "./components/ForKids";
import FAQ from "./components/FAQ";
import SignIn from "./components/auth/SignIn";
import './styles/main.css';
function App() {
  return (
    <div className="">
       {/* <Header/> */}
       <Home/>
       <BreakLine/>
       <TvAd className="hidden"/>
       <TvAd className="hidden"/>
       <TvAd/>
       
       <BreakLine/>
       <PhoneAd/>
       <BreakLine/>
       <WatchEverywhere/>
       <BreakLine/>
       <ForKids/>
       <BreakLine/>
       <FAQ/>
       <BreakLine/>
       <FooterDesktop/>
       <SignIn/>
       
       
    </div>
    
    // <div className="App">
    //   <div
    //   class="pr-10 pl-10 md:pr-24 md:pl-24 md:pb-24 space-y-16"
    //   // style={{
    //   //   backgroundimage: linear-gradient(
    //   //       rgba(0, 0, 0, 0.7),
    //   //       rgba(0, 0, 0, 0.7)
    //   //     ),
    //   //     url(./images/netflix.jpg);
    //   // }}
    //  >
    //   {/* <!-- header --> */}
    //   <div class="flex flex-row justify-between pt-5">
    //     <div>
    //       <img src="images/Netflix-Logo.png" class="h-20 w-100" alt="" />
    //     </div>
    //     {/* <!-- Sign in button --> */}
    //     <div class="pt-8">
    //       <a href="/" class="rounded-lg text-white bg-red w-48 mt-10 p-2"
    //         >Sign In</a
    //       >
    //     </div>
    //   </div>
    //   {/* <!-- Text Area --> */}
    //   <div class="flex flex-col items-center justify-center md:pl-40 md:pr-40">
    //     {/* <!-- paragraph 1 --> */}
    //     <nav class="text-3xl w-80% md:text-6xl text-white md:w-3/4 text-center">
    //       Unlimited movies,TV shows, and more.
    //     </nav>
    //     {/* <!--paragraph 2  --> */}
    //     <p class="font-bold text-xl md:text-2xl text-white pt-5">
    //       Watch anywhere. Cancel anytime.
    //     </p>
    //     {/* <!-- Paragraph 3 --> */}
    //     <p
    //       class="font-bold text-md text-white font-mono pt-10 w-full text-center"
    //     >
    //       Ready to watch? Enter your email to create or restart your membership.
    //     </p>
    //   </div>
    //   {/* <!-- mini form --> */}
    //   <div class="w-full flex items-center justify-center">
    //     <div
    //       class="md:pl-40 md:pr-40 flex flex-col w-3/4 items-center justify-center md:flex-row"
    //     >
    //       <input
    //         type="text"
    //         placeholder="Email address"
    //         class="flex-1 py-3 h-full rounded-sm rounded-r-none"
    //       />
    //       <a
    //         href="/"
    //         class="rounded-sm hidden rounded-l-none h-full items-center py-2.5 justify-center bg-red text-white font-bold px-3 text-center md:flex"
    //       >
    //         Get Started
    //       </a>
    //     </div>
    //   </div>
    //   <div class="flex flex-row w-full items-center justify-center">
    //     <button class="md:hidden bg-red text-white px-4 py-3">
    //       Get Started
    //     </button>
    //   </div>
    // </div>
    // {/* <!-- End of hero section --> */}

    // {/* <!-- break line --> */}
    // <div class="w-full h-2 bg-break"></div>
    // {/* <!-- End of braek line --> */}

    // {/* <!-- TV ad --> */}
    // <section id="Tv-ad">
    //   <div
    //     class="md:pr-24 md:pl-24 md:pt-24 md:pb-24 flex flex-col md:flex-row w-full bg-black items-center justify-center"
    //   >
    //     {/* <!-- Text --> */}
    //     <div class="w-3/4 text-center md:w-1/2 text-white md:text-left">
    //       <p class="text-2xl md:text-5xl font-bold pb-5 pt-5">
    //         Enjoy on your TV.
    //       </p>
    //       <p class="md:text-lg font-bold">
    //         Watch on Smart TV's, Playstations,Xbox,Chromecast,Apple TV,Blu-ray
    //         players,and more.
    //       </p>
    //     </div>

    //     {/* <!-- TV image --> */}
    //     <div class="w-1/2" 
    //     // style={"background-image: url(.images/tv.png)"}
    //     >
    //       <img src="images/tv.png" alt="" class="" />
    //       <video
    //         class="top-200"
    //         controls
    //         width="100"
    //         height="100"
    //         autoplay="yes"
    //         loop="loop"
    //       >
    //         <source
    //           src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
    //           type="video/mp4"
    //         />
    //       </video>
    //     </div>
    //   </div>

    //   {/* <!-- test --> */}
    //   <div>
    //     <div class="test relative bg-black">
    //       <img src="./images/tv.png" alt="" />
    //     </div>
    //     <div class="top-50 left-100 absolute">
    //       <video controls width="300" height="300" autoplay="yes" loop="loop">
    //         <source
    //           src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
    //           type="video/mp4"
    //         />
    //       </video>
    //     </div>
    //   </div>
    //   {/* <!-- test --> */}
    // </section>
    // {/* <!-- End of TV ad --> */}

    // {/* <!-- break line --> */}
    // <div class="w-full h-2 bg-break"></div>
    // {/* <!-- End of braek line --> */}

    // {/* <!-- Phone ad --> */}
    // <section id="Phone-ad">
    //   <div
    //     class="md:pr-8 md:pl-8 md:pt-12 md:pb-24 flex-col flex md:flex-row-reverse w-full bg-black items-center justify-center"
    //   >
    //     {/* <!-- Text --> */}
    //     <div class="w-3/4 md:w-1/2 mt-4 text-white text-center md:text-left">
    //       <p class="text-2xl md:text-5xl font-bold pb-5">
    //         Download your shows to watch offline.
    //       </p>
    //       <p class="text-lg md:text-xl font-bold">
    //         Save your favourites easily and always have something to watch.
    //       </p>
    //     </div>

    //     {/* <!-- Phone image --> */}
    //     <div class="w-3/4 md:w-1/2 mb-5">
    //       <img src="images/mobile-0819.jpg" alt="" />
    //       <div
    //         class="w-80 h-16 md:h-20 left-36 md:left-44 -mt-20 md:-mt-32 absolute bg-black rounded-lg flex flex-row space-x-5 border-solid border-2 border-slate-700 p-2"
    //       >
    //         <img src="images/boxshot.png" alt="" />
    //         <div class="flex flex-col space-y-2">
    //           <p class="text-white font-bold text-lg">Stranger Things</p>
    //           <p class="font-semibold text-sm text-blue-800">Downloading...</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    // {/* <!-- End of Phone ad --> */}

    // {/* <!-- break line --> */}
    // <div class="w-full h-2 bg-break"></div>
    // {/* <!-- End of braek line --> */}

    // {/* <!-- Watch Everywhere --> */}
    // <section id="Watch-everywher">
    //   <div
    //     class="pt-10 pb-12 md:pr-24 md:pl-24 md:pt-12 md:pb-12 flex flex-col md:flex-row w-full bg-black text-center"
    //   >
    //     {/* <!-- Text --> */}
    //     <div class="w-full md:w-1/2 text-white text-center md:text-left">
    //       <p class="text-2xl md:text-5xl font-bold pb-5">Watch Everywhere.</p>
    //       <p class="text-xl font-bold">
    //         Stream unlimited movies and TV shows on your phone,tablet,laptop,
    //         and TV.
    //       </p>
    //     </div>
    //   </div>
    // </section>
    // {/* <!-- End of Watch Everywhere --> */}

    // {/* <!-- break line --> */}
    // <div class="w-full h-2 bg-break"></div>
    // {/* <!-- End of braek line --> */}

    // {/* <!-- Children Section --> */}
    // <section id="children">
    //   <div
    //     class="md:pr-20 md:pl-20 md:pt-16 md:pb-16 pt-10 flex flex-col md:flex-row-reverse w-full bg-black items-center justify-center"
    //   >
    //     {/* <!-- Text --> */}
    //     <div class="w-3/4 md:w-1/2 text-white text-center md:text-left">
    //       <p class="text-2xl md:text-5xl font-bold pb-5">
    //         Create Profiles for Kids.
    //       </p>
    //       <p class="text-lg md:text-xl font-bold">
    //         Send kids on adventures with their favourite characters in a space
    //         made just for them-- free with your membership.
    //       </p>
    //     </div>

    //     {/* <!-- children image --> */}
    //     <div class="w-3/4 md:w-1/2">
    //       <img src="images/kidsValueProp.png" alt="" />
    //     </div>
    //   </div>
    // </section>
    // {/* <!-- End of children section --> */}

    // {/* <!-- break line --> */}
    // <div class="w-full h-2 bg-break"></div>
    // {/* <!-- End of braek line --> */}

    // {/* <!--FAQ  --> */}
    // <section id="FAQ">
    //   <div class="flex flex-col pb-10 pt-10 space-y-5 bg-black">
    //     {/* <!-- Title --> */}
    //     <div class="font-bold text-2xl md:text-5xl text-white text-center">
    //       Frequently Asked Questions
    //     </div>
    //     {/* <!-- List of Questions --> */}
    //     <div
    //       class="flex-col grid grid-cols-1 space-y-2 md:items-center md:justify-center w-full"
    //     >
    //       <div class="flex flex-col">
    //         <div
    //           class="bg-tile flex flex-row md:w-1/2 w-full mx-auto justify-between p-2 md:p-4"
    //         >
    //           <p class="text-white text-2xl px-5 pt-4">What is Netflix?</p>
    //           <div class="pt-2 pr-5">
    //             <img
    //               src="images/addIcon.png"
    //               onclick="openText()"
    //               class="addIcon w-12 h-12"
    //               alt=""
    //             />
    //           </div>
    //         </div>
    //         <div
    //           id="info"
    //           class="hidden text-white bg-tile md:w-1/2 w-full p-2 md:p-4 mx-auto"
    //         >
    //           Netflix is a streaming service that offers a wide variety of
    //           award-winning TV shows, movies, anime, documentaries, and more on
    //           thousands of internet-connected devices. You can watch as much as
    //           you want, whenever you want without a single commercial – all for
    //           one low monthly price. There's always something new to discover
    //           and new TV shows and movies are added every week!
    //         </div>
    //       </div>

    //       <div class="flex flex-col">
    //         <div
    //           class="bg-tile flex flex-row md:w-1/2 w-full mx-auto justify-between p-2 md:p-4"
    //         >
    //           <p class="text-white text-2xl px-5 pt-4">
    //             How much does Netflix cost?
    //           </p>
    //           <div class="pt-2 pr-5">
    //             <img
    //               src="images/addIcon.png"
    //               onclick="openText()"
    //               class="addIcon w-12 h-12"
    //               alt=""
    //             />
    //           </div>
    //         </div>
    //         <div
    //           id="info"
    //           class="hidden text-white bg-tile md:w-1/2 w-full p-2 md:p-4 mx-auto"
    //         >
    //           Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
    //           streaming device, all for one fixed monthly fee. Plans range from
    //           US$3.99 to US$11.99 a month. No extra costs, no contracts.
    //         </div>
    //       </div>

    //       <div class="flex flex-col">
    //         <div
    //           class="bg-tile flex flex-row md:w-1/2 w-full mx-auto justify-between p-2 md:p-4"
    //         >
    //           <p class="text-white text-2xl px-5 pt-4">Where can i watch?</p>
    //           <div class="pt-2 pr-5">
    //             <img
    //               src="images/addIcon.png"
    //               onclick="openText()"
    //               class="addIcon w-12 h-12"
    //               alt=""
    //             />
    //           </div>
    //         </div>
    //         <div
    //           id="info"
    //           class="hidden text-white bg-tile md:w-1/2 w-full p-2 md:p-4 mx-auto"
    //         >
    //           Watch anywhere, anytime. Sign in with your Netflix account to
    //           watch instantly on the web at netflix.com from your personal
    //           computer or on any internet-connected device that offers the
    //           Netflix app, including smart TVs, smartphones, tablets, streaming
    //           media players and game consoles. You can also download your
    //           favorite shows with the iOS, Android, or Windows 10 app. Use
    //           downloads to watch while you're on the go and without an internet
    //           connection. Take Netflix with you anywhere.
    //         </div>
    //       </div>

    //       <div class="flex flex-col">
    //         <div
    //           class="bg-tile flex flex-row md:w-1/2 w-full mx-auto justify-between p-2 md:p-4"
    //         >
    //           <p class="text-white text-2xl px-5 pt-4">How do i cancel?</p>
    //           <div class="pt-2 pr-5">
    //             <img
    //               src="images/addIcon.png"
    //               onclick="openText()"
    //               class="addIcon w-12 h-12"
    //               alt=""
    //             />
    //           </div>
    //         </div>
    //         <div
    //           id="info"
    //           class="hidden text-white bg-tile md:w-1/2 w-full p-2 md:p-4 mx-auto"
    //         >
    //           Netflix is flexible. There are no pesky contracts and no
    //           commitments. You can easily cancel your account online in two
    //           clicks. There are no cancellation fees – start or stop your
    //           account anytime.
    //         </div>
    //       </div>

    //       <div class="flex flex-col">
    //         <div
    //           class="bg-tile flex flex-row md:w-1/2 w-full mx-auto justify-between p-2 md:p-4"
    //         >
    //           <p class="text-white text-2xl px-5 pt-4">
    //             What can i watch on Netflix?
    //           </p>
    //           <div class="pt-2 pr-5">
    //             <img
    //               src="images/addIcon.png"
    //               onclick="openText()"
    //               class="addIcon w-12 h-12"
    //               alt=""
    //             />
    //           </div>
    //         </div>
    //         <div
    //           id="info"
    //           class="hidden text-white bg-tile md:w-1/2 w-full p-2 md:p-4 mx-auto"
    //         >
    //           Netflix has an extensive library of feature films, documentaries,
    //           TV shows, anime, award-winning Netflix originals, and more. Watch
    //           as much as you want, anytime you want.
    //         </div>
    //       </div>

    //       <div class="flex flex-col">
    //         <div
    //           class="bg-tile flex flex-row md:w-1/2 w-full mx-auto justify-between p-2 md:p-4"
    //         >
    //           <p class="text-white text-2xl px-5 pt-4">
    //             Is Netflix good for kids?
    //           </p>
    //           <div class="pt-2 pr-5">
    //             <img
    //               src="images/addIcon.png"
    //               onclick="openText()"
    //               class="addIcon w-12 h-12"
    //               alt=""
    //             />
    //           </div>
    //         </div>
    //         <div
    //           id="info"
    //           class="hidden text-white bg-tile md:w-1/2 w-full p-2 md:p-4 mx-auto"
    //         >
    //           Netflix is a streaming service that offers a wide variety of
    //           award-winning TV shows, movies, anime, documentaries, and more on
    //           thousands of internet-connected devices. You can watch as much as
    //           you want, whenever you want without a single commercial – all for
    //           one low monthly price. There's always something new to discover
    //           and new TV shows and movies are added every week!
    //         </div>
    //       </div>
    //     </div>

    //     <div class="w-full flex flex-col justify-center">
    //       {/* <!-- Paragraph 3 --> */}
    //       <div class="w-full flex justify-center">
    //         <p
    //           class="font-bold text-md text-white pt-10 w-3/4 justify-center md:w-full text-center"
    //         >
    //           Ready to watch? Enter your email to create or restart your
    //           membership.
    //         </p>
    //       </div>

    //       {/* <!-- mini form --> */}
    //       <div
    //         class="md:pl-40 md:pr-40 flex w-full justify-center flex-col md:flex-row space-x-0 pt-5"
    //       >
    //         <input
    //           type="text"
    //           placeholder="Email address"
    //           class="h-16 w-3/4 flex m-auto md:m-none rounded-sm rounded-r-none"
    //         />
    //         <a
    //           href="/"
    //           class="md:rounded-sm md:rounded-l-none hidden md:m-0 md:w-1/4 md:bg-red md:text-white md:text-xl md:font-bold md:pt-4 md:pl-9 md:text-center md:flex"
    //         >
    //           Get Started
    //         </a>
    //       </div>
    //       <div class="flex flex-row w-full items-center justify-center">
    //         <button class="md:hidden bg-red text-white px-4 py-3 mt-4">
    //           Get Started
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    // {/* <!-- break line --> */}
    // <div class="w-full h-2 bg-break"></div>
    // {/* <!-- End of braek line --> */}

    // {/* <!-- Footer for desktop view --> */}
    // <section id="footer">
    //   <div
    //     class="hidden md:flex md:flex-col md:space-y-10 md:pr-40 md:pl-40 md:pt-16 md:pb-5 bg-black text-white font-light"
    //   >
    //     {/* <!-- title --> */}
    //     <nav>Questions?Contact Us</nav>
    //     {/* <!-- List --> */}
    //     <div class="flex flex-row space-x-24">
    //       {/* <!-- List 1 --> */}
    //       <ul class="flex flex-col space-y-3">
    //         <li><a href="/">FAQ</a></li>
    //         <li><a href="/">Investor Relations</a></li>
    //         <li><a href="/">Privacy</a></li>
    //         <li><a href="/">Speed Test</a></li>
    //       </ul>
    //       {/* <!-- List 2 --> */}
    //       <ul class="flex flex-col space-y-3">
    //         <li><a href="/">Help Center</a></li>
    //         <li><a href="/">Jobs</a></li>
    //         <li><a href="/">Cookie Preferences</a></li>
    //         <li><a href="/">Legal Notices</a></li>
    //       </ul>
    //       {/* <!-- List 3 --> */}
    //       <ul class="flex flex-col space-y-3">
    //         <li><a href="/">Account</a></li>
    //         <li><a href="/">Ways to Watch</a></li>
    //         <li><a href="/">Corporate Information</a></li>
    //         <li><a href="/">Only on Netflix</a></li>
    //       </ul>
    //       {/* <!-- List 4 --> */}
    //       <ul class="flex flex-row md:flex-col space-y-3">
    //         <li><a href="/">Media Center</a></li>
    //         <li><a href="/">Terms of Use</a></li>
    //         <li><a href="/">Contact Us</a></li>
    //       </ul>
    //     </div>
    //     {/* <!-- Last text --> */}
    //     <p>Netflix Ghana</p>
    //   </div>
    // </section>

    // {/* <!-- footer for mobile view --> */}
    // <section id="footer">
    //   <div class="md:hidden px-5 py-10 text-md bg-black text-tile font-light">
    //    {/* title */}
    //     <nav>Questions?Contact Us</nav>
    //     {/* <!-- List --> */}
    //     <div class="flex flex-row space-x-12 pt-5 pb-5">
    //       {/* <!-- List 1 --> */}
    //       <ul class="flex flex-col space-y-2">
    //         <li><a href="/">FAQ</a></li>
    //         <li><a href="/">Account</a></li>
    //         <li><a href="/">Investor Relations</a></li>
    //         <li><a href="/">Ways to Watch</a></li>
    //         <li><a href="/">Privacy</a></li>
    //         <li><a href="/">Corporate Information</a></li>
    //         <li><a href="/">Speed Test</a></li>
    //         <li><a href="/">Only on Netflix</a></li>
    //       </ul>
    //       {/* <!-- List 2 --> */}
    //       <ul class="flex flex-col space-y-2">
    //         <li><a href="/">Help Center</a></li>
    //         <li><a href="/">Media Center</a></li>
    //         <li><a href="/">Jobs</a></li>
    //         <li><a href="/">Terms of Use</a></li>
    //         <li><a href="/">Cookie Preferences</a></li>
    //         <li><a href="/">Contact Us</a></li>
    //         <li><a href="/">Legal Notices</a></li>
    //       </ul>
    //     </div>
    //     {/* <!-- Last text --> */}
    //     <p>Netflix Ghana</p>
    //   </div>
    // </section>
    // </div>
  );
}

export default App;
