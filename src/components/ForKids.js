import React from "react";
import image from "../images/kidsValueProp.png"
const ForKids = () => {
    return ( 
        <div>
            {/* <!-- Children Section --> */}
    <section id="children">
      <div
        class="md:pr-20 md:pl-20 md:pt-16 md:pb-16 pt-10 flex flex-col md:flex-row-reverse w-full bg-black items-center justify-center"
      >
        {/* <!-- Text --> */}
        <div class="w-3/4 md:w-1/2 text-white text-center md:text-left">
          <p class="text-2xl md:text-5xl font-bold pb-5">
            Create Profiles for Kids.
          </p>
          <p class="text-lg md:text-xl font-bold">
            Send kids on adventures with their favourite characters in a space
            made just for them-- free with your membership.
          </p>
        </div>

        {/* <!-- children image --> */}
        <div class="w-3/4 md:w-1/2">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
    {/* <!-- End of children section --> */}

        </div>
     );
}
 
export default ForKids;