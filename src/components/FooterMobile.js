const FooterMobile = () => {
    return (  
        <div>
             <section id="footer">
      <div class="md:hidden px-5 py-10 text-md bg-black text-tile font-light">
       {/* title */}
        <nav>Questions?Contact Us</nav>
        {/* <!-- List --> */}
        <div class="flex flex-row space-x-12 pt-5 pb-5">
          {/* <!-- List 1 --> */}
          <ul class="flex flex-col space-y-2">
            <li><a href="/">FAQ</a></li>
            <li><a href="/">Account</a></li>
            <li><a href="/">Investor Relations</a></li>
            <li><a href="/">Ways to Watch</a></li>
            <li><a href="/">Privacy</a></li>
            <li><a href="/">Corporate Information</a></li>
            <li><a href="/">Speed Test</a></li>
            <li><a href="/">Only on Netflix</a></li>
          </ul>
          {/* <!-- List 2 --> */}
          <ul class="flex flex-col space-y-2">
            <li><a href="/">Help Center</a></li>
            <li><a href="/">Media Center</a></li>
            <li><a href="/">Jobs</a></li>
            <li><a href="/">Terms of Use</a></li>
            <li><a href="/">Cookie Preferences</a></li>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">Legal Notices</a></li>
          </ul>
        </div>
        {/* <!-- Last text --> */}
        <p>Netflix Ghana</p>
      </div>
    </section>
        </div>
    );
}
 
export default FooterMobile;