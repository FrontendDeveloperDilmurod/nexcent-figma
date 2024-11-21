import React from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

const BlogSection = () => {
  const articles = [
    {
      image: blog1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      link: "#",
    },
    {
      image: blog2,
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      link: "#",
    },
    {
      image: blog3,
      title: "Revamping the Membership Model with Triathlon Australia",
      link: "#",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-16 text-center">
      <h2 className="text-3xl font-semibold mb-4">
        Caring is the new marketing
      </h2>
      <p className="text-gray-600 mb-12">
        The Nextcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's more.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <a
                href={article.link}
                className="text-green-600 font-medium flex items-center"
              >
                Readmore
                <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <h1
        style={{
          color: "#263238",
          fontSize: "64px",
          fontWeight: "bold",
          marginBottom: "20px",
          textAlign: "center",
        }}
        className=" py-10  text-5xl "
      >
        Pellentesque suscipit <br /> fringilla libero eu.
      </h1>
      <button
        style={{
          backgroundColor: "#4CAF4F",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "5px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }} className=" hover:bg-green "
      > 
        Get a Demo 
      </button>
    </div>
  );
};

export default BlogSection;
