import React from "react";
const FAQ = () => {
    return ( 
        <div>
            <section id="FAQ">
      <div class="flex flex-col pb-10 pt-10 space-y-5 bg-black">
        {/* <!-- Title --> */}
        <div class="font-bold text-2xl md:text-5xl text-white text-center">
          Frequently Asked Questions
        </div>
        {/* <!-- List of Questions --> */}
        <div
          class="flex-col grid grid-cols-1 space-y-2 md:items-center md:justify-center w-full"
        >
          <div class="flex flex-col">
            <div
              class="bg-tile flex flex-row md:w-3/4 w-full mx-auto justify-between p-2 md:p-4"
            >
              <p class="text-white text-2xl px-5 pt-4">What is Netflix?</p>
              <div class="pt-2 pr-5">
                <img
                  src="images/addIcon.png"
                  onclick="openText()"
                  class="addIcon w-12 h-12"
                  alt=""
                />
              </div>
            </div>
            <div
              id="info"
              class="hidden text-white bg-tile md:w-3/4 w-full p-2 md:p-4 mx-auto"
            >
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices. You can watch as much as
              you want, whenever you want without a single commercial – all for
              one low monthly price. There's always something new to discover
              and new TV shows and movies are added every week!
            </div>
          </div>

          <div class="flex flex-col">
            <div
              class="bg-tile flex flex-row md:w-3/4 w-full mx-auto justify-between p-2 md:p-4"
            >
              <p class="text-white text-2xl px-5 pt-4">
                How much does Netflix cost?
              </p>
              <div class="pt-2 pr-5">
                <img
                  src="images/addIcon.png"
                  onclick="openText()"
                  class="addIcon w-12 h-12"
                  alt=""
                />
              </div>
            </div>
            <div
              id="info"
              class="hidden text-white bg-tile md:w-3/4 w-full p-2 md:p-4 mx-auto"
            >
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              US$3.99 to US$11.99 a month. No extra costs, no contracts.
            </div>
          </div>

          <div class="flex flex-col">
            <div
              class="bg-tile flex flex-row md:w-3/4 w-full mx-auto justify-between p-2 md:p-4"
            >
              <p class="text-white text-2xl px-5 pt-4">Where can i watch?</p>
              <div class="pt-2 pr-5">
                <img
                  src="images/addIcon.png"
                  onclick="openText()"
                  class="addIcon w-12 h-12"
                  alt=""
                />
              </div>
            </div>
            <div
              id="info"
              class="hidden text-white bg-tile md:w-3/4 w-full p-2 md:p-4 mx-auto"
            >
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles. You can also download your
              favorite shows with the iOS, Android, or Windows 10 app. Use
              downloads to watch while you're on the go and without an internet
              connection. Take Netflix with you anywhere.
            </div>
          </div>

          <div class="flex flex-col">
            <div
              class="bg-tile flex flex-row md:w-3/4 w-full mx-auto justify-between p-2 md:p-4"
            >
              <p class="text-white text-2xl px-5 pt-4">How do i cancel?</p>
              <div class="pt-2 pr-5">
                <img
                  src="images/addIcon.png"
                  onclick="openText()"
                  class="addIcon w-12 h-12"
                  alt=""
                />
              </div>
            </div>
            <div
              id="info"
              class="hidden text-white bg-tile md:w-3/4 w-full p-2 md:p-4 mx-auto"
            >
              Netflix is flexible. There are no pesky contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </div>
          </div>

          <div class="flex flex-col">
            <div
              class="bg-tile flex flex-row md:w-3/4 w-full mx-auto justify-between p-2 md:p-4"
            >
              <p class="text-white text-2xl px-5 pt-4">
                What can i watch on Netflix?
              </p>
              <div class="pt-2 pr-5">
                <img
                  src="images/addIcon.png"
                  onclick="openText()"
                  class="addIcon w-12 h-12"
                  alt=""
                />
              </div>
            </div>
            <div
              id="info"
              class="hidden text-white bg-tile md:w-3/4 w-full p-2 md:p-4 mx-auto"
            >
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </div>
          </div>

          <div class="flex flex-col">
            <div
              class="bg-tile flex flex-row md:w-3/4 w-full mx-auto justify-between p-2 md:p-4"
            >
              <p class="text-white text-2xl px-5 pt-4">
                Is Netflix good for kids?
              </p>
              <div class="pt-2 pr-5">
                <img
                  src="images/addIcon.png"
                  onclick="openText()"
                  class="addIcon w-12 h-12"
                  alt=""
                />
              </div>
            </div>
            <div
              id="info"
              class="hidden text-white bg-tile md:w-3/4 w-full p-2 md:p-4 mx-auto"
            >
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices. You can watch as much as
              you want, whenever you want without a single commercial – all for
              one low monthly price. There's always something new to discover
              and new TV shows and movies are added every week!
            </div>
          </div>
        </div>

        <div class="w-full flex flex-col justify-center">
          {/* <!-- Paragraph 3 --> */}
          <div class="w-full flex justify-center">
            <p
              class="font-bold text-md text-white pt-10 w-3/4 justify-center md:w-full text-center"
            >
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </div>

          {/* <!-- mini form --> */}
          <div
            class="md:pl-40 md:pr-40 flex w-full justify-center flex-col md:flex-row space-x-0 pt-5"
          >
            <input
              type="text"
              placeholder="Email address"
              class="h-16 w-3/4 flex m-auto md:m-none rounded-sm rounded-r-none"
            />
            <a
              href="/"
              class="md:rounded-sm md:rounded-l-none hidden md:m-0 md:w-1/4 md:bg-red md:text-white md:text-xl md:font-bold md:pt-4 md:pl-9 md:text-center md:flex"
            >
              Get Started
            </a>
          </div>
          <div class="flex flex-row w-full items-center justify-center">
            <button class="md:hidden bg-red text-white px-4 py-3 mt-4">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
        </div>
     );
}
 
export default FAQ;