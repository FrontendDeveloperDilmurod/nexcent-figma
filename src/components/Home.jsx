import { Carousel } from "flowbite-react";
import banner1 from "../assets/banner.png";

function Home() {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto ">
          <div className=" my-28 md:my-8 py-12 flex  md:flex-row-reverse  justify-between items-center gap-12 ">
            <div>
              <img src={banner1} alt="Banner 1" />
            </div>

            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                Lessons and insights{" "}
                <span className="text-brnadPrimary leading-snug">
                  from 8 years
                </span>
              </h1>
              <p className="text-neutralGray mb-8 text-base">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          <div className=" my-28 md:my-8 py-12 flex  md:flex-row-reverse  justify-between items-center gap-12 ">
            <div>
              <img src={banner1} alt="Banner 1" />
            </div>

            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                Lessons and insights{" "}
                <span className="text-brnadPrimary leading-snug">
                  from 8 years
                </span>
              </h1>
              <p className="text-neutralGray mb-8 text-base">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          <div className=" my-28 md:my-8 py-12 flex  md:flex-row-reverse  justify-between items-center gap-12 ">
            <div>
              <img src={banner1} alt="Banner 1" />
            </div>

            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                Lessons and insights{" "}
                <span className="text-brnadPrimary leading-snug">
                  from 8 years
                </span>
              </h1>
              <p className="text-neutralGray mb-8 text-base">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="btn-primary text-brnadPrimary">
                Register
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
