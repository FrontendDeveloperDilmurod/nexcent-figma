import React from "react";
import about1 from "../assets/rafiki.svg";
import pana from "../assets/pana.svg";

function About() {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-3/5 mb-8 lg:mb-0">
          <img
            src={about1}
            alt=""
            className="w-full h-auto max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
          />
        </div>
        <div className="w-full lg:w-2/5">
          <h2 className="text-neutralDGrey text-[36px] font-semibold leading-[50px] mb-6 font-poppins">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="text-[#64748B] text-[18px] font-normal leading-[26px] mb-6 font-poppins">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="bg-brnadPrimary text-white py-3 px-6 rounded-md text-[18px] font-semibold font-poppins transition-all duration-300 ease-in-out hover:bg-neutralGrey hover:text-white mx-2">
            Learn More
          </button>
        </div>
      </div>

      <div className=" py-20">
        <div class="text-center py-8">
          <h1 class="text-4xl md:text-5xl font-bold text-neutralDGrey mb-4 leading-tight font-poppins">
            Helping a local business reinvent itself
          </h1>
          <p class="text-lg md:text-xl text-neutralGrey font-light font-poppins">
            We reached here with our hard work and dedication
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-3/5 mb-8 lg:mb-0">
          <img
            src={pana}
            alt=""
            className=" w-full h-auto max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
          />
        </div>
        <div className="w-full lg:w-2/5">
          <h2 className="text-neutralDGrey text-[36px] font-semibold leading-[50px] mb-6 font-poppins">
            How to design your site footer like we did
          </h2>
          <p className="text-[#64748B] text-[18px] font-normal leading-[26px] mb-6 font-poppins">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button className="bg-brnadPrimary text-white py-3 px-6 rounded-md text-[18px] font-semibold font-poppins transition-all duration-300 ease-in-out hover:bg-neutralGrey hover:text-white mx-2">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
