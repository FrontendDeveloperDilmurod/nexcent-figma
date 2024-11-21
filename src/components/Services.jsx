import React from "react";
import companyImg1 from "../assets/company1.png";
import companyImg2 from "../assets/company2.png";
import companyImg4 from "../assets/company4.png";
import companyImg5 from "../assets/company5.png";
import companyImg6 from "../assets/company6.png";
import companyImg7 from "../assets/company7.png";
import memeber from "../assets/memeber.svg";
import ntional from "../assets/national.png";
import clubGrooups from "../assets/club-groups.png";

function Services() {
  const service = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      img: memeber,
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      img: ntional,
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      img: clubGrooups,
    },
  ];
  return (
    <div className=" md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className=" text-4xl text-neutralDGrey font-semibold mb-2 ">
          Our Clients
        </h2>
        <p className=" text-neutralGrey">
          We have been working with some Fortune 500+ clients
        </p>
        {/* Compnay logos  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
        <div className=" my-12 flex flex-wrap justify-between items-center gap-8">
          <img src={companyImg1} alt="" />
          <img src={companyImg2} alt="" />
          <img src={companyImg7} alt="" />
          <img src={companyImg4} alt="" />
          <img src={companyImg5} alt="" />
          <img src={companyImg6} alt="" />
          <img src={companyImg7} alt="" />
        </div>
      </div>
      <div className=" mt-20 md:w-1/2 mx-auto text-center">
        <h2 className=" text-4xl text-neutralDGrey font-semibold mb-2 ">
          Manage your entire community in a <br /> single system
        </h2>
        <p className=" text-neutralGrey">Who is Nextcent suitable for?</p>
      </div>

      {/* Cards ################### */}
      <div className=" mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {service.map((service) => (
          <div
            key={service.id}
            className="max-w-xs mx-auto p-4 bg-white shadow-lg rounded-lg transition-transform hover:scale-105 "
          >
            <div>
              <div className="bg-[#E8F5E9] h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl flex items-center justify-center ">
                <img className="h-8 w-8" src={service.img} alt="" />
              </div>
              <h4 className="text-2xl font-semibold text-neutralDGrey mb-2 px-2 mt-4">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGrey px-2 mb-4">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
