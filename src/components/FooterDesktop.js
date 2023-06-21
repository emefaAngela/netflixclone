import React from "react";
const FooterDesktop = () => {
    return ( 
        <div>
            <section id="footer">
      <div
        class="hidden md:flex md:flex-col md:space-y-10 md:pr-40 md:pl-40 md:pt-16 md:pb-5 bg-black text-white font-light"
      >
        {/* <!-- title --> */}
        <nav>Questions?Contact Us</nav>
        {/* <!-- List --> */}
        <div class="flex flex-row space-x-24">
          {/* <!-- List 1 --> */}
          <ul class="flex flex-col space-y-3">
            <li><a href="/">FAQ</a></li>
            <li><a href="/">Investor Relations</a></li>
            <li><a href="/">Privacy</a></li>
            <li><a href="/">Speed Test</a></li>
          </ul>
          {/* <!-- List 2 --> */}
          <ul class="flex flex-col space-y-3">
            <li><a href="/">Help Center</a></li>
            <li><a href="/">Jobs</a></li>
            <li><a href="/">Cookie Preferences</a></li>
            <li><a href="/">Legal Notices</a></li>
          </ul>
          {/* <!-- List 3 --> */}
          <ul class="flex flex-col space-y-3">
            <li><a href="/">Account</a></li>
            <li><a href="/">Ways to Watch</a></li>
            <li><a href="/">Corporate Information</a></li>
            <li><a href="/">Only on Netflix</a></li>
          </ul>
          {/* <!-- List 4 --> */}
          <ul class="flex flex-row md:flex-col space-y-3">
            <li><a href="/">Media Center</a></li>
            <li><a href="/">Terms of Use</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </div>
        {/* <!-- Last text --> */}
        <p>Netflix Ghana</p>
      </div>
    </section>
        </div>
     );
}
 
export default FooterDesktop;