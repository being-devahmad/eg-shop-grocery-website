import React from "react";
// import headerBg from "../../assets/headerBg.jpg";
import oliveoil from "../../assets/olive-oil.png";
import cashew from "../../assets/cashew.png";
import diet from "../../assets/diet.png";
import cupcake from "../../assets/cupcake.png";
import cheers from "../../assets/cheers.png";

import bannerFirst from "../../assets/banner1.jpg";
import bannerSecond from "../../assets/offer-banner-2.jpg";
import bannerThird from "../../assets/offer-banner3.jpg";

import blog1 from "../../assets/blog-h3-1.png";
import blog2 from "../../assets/blog-h3-2.png";
import blog3 from "../../assets/blog-h3-3.png";
import blog4 from "../../assets/blog-h3-4.png";
import Products from "../Products/Products";

const Hero = () => {
  const categories = [
    {
      image: oliveoil,
      name: "Olive Oil",
    },
    {
      image: cashew,
      name: "Cashew",
    },
    {
      image: diet,
      name: "Diet",
    },
    {
      image: cupcake,
      name: "Cupcake",
    },
    {
      image: cheers,
      name: "Cheers",
    },
    {
      image: oliveoil,
      name: "Fresh Fruits",
    },
  ];

  const blogs = [
    {
      image: blog1,
      title: "How people are shopping during covid-19",
      type: "Fresh",
      date: "August 15, 2021",
    },
    {
      image: blog2,
      title: "Getting safe delivery during this pandemic",
      type: "New",
      date: "August 15, 2021",
    },
    {
      image: blog3,
      title: "Picking right grocery sites for reliable delivery",
      type: "Old",
      date: "August 15, 2021",
    },
    {
      image: blog4,
      title: "Picking right grocery sites for reliable delivery",
      type: "Latest",
      date: "August 15, 2021",
    },
  ];

  return (
    <>
      {/* Header */}
      <section
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
        className="w-[100%] h-[100vh] bg-cover bg-center"
      >
        <div className="md:pt-[20%] pt-[40%] border-white ml-8 md:block flex flex-col items-center">
          <p className="text-4xl md:text-5xl text-white font-bold">
            Bengal Vegetable Farm Organic 100%
          </p>
          <p className="text-xl sm:text-2xl hidden sm:block sm:mt-5 text-white font-semibold">
            Up to 50% off, Only This Week Don't Miss!
          </p>

          <button
            className="bg-[white] hover:bg-[#00896f] text-lg text-[#00896f] hover:text-white ease-in duration-300 rounded-3xl px-5 py-2 mt-3"
            type="button"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Search */}
      <section className="mt-2 mb-[80px]">
        <form class="mx-auto flex justify-center">
          <div className=" w-[70%] flex  ">
            <input
              type="search"
              class="block w-full text-lg rounded-full text-gray-900 border border-gray-300 bg-gray-50 focus:border-gray-500 py-3"
              placeholder="Search your products"
            />
            <button class="bg-[#00896f] text-[white] text-lg ease-in duration-300 py-2 rounded-3xl px-4">
              Subscribe
            </button>
          </div>
        </form>
      </section>

      {/* Category*/}
      <section className="mt-2 mb-[80px]">
        <div>
          <p className="text-4xl font-semibold text-center">
            What do you looking for ?
          </p>
          <p className="text-lg text-center">
            Mauris vitae ultricies leo integer malesuada nunc vel in arcu cursus
          </p>
          <div className="flex flex-wrap justify-center mb-20 mt-5">
            {categories.map((cat) => {
              const { image, name } = cat;
              return (
                <>
                  <div class="w-[200px] mx-2 mt-2 flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                    <img src={image} className="w-20 h-20" alt="" />

                    <p class="font-normal  text-black text-lg">{name}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

      {/* Offer Banner */}
      <section>
        <div className="flex flex-wrap justify-center">
          <div className="w-[400px] h-[200px] mr-3">
            <img src={bannerFirst} alt="" />
          </div>
          <div className="w-[400px] h-[200px] mr-3">
            <img src={bannerSecond} alt="" />
          </div>
          <div className="w-[400px] h-[200px]">
            <img src={bannerThird} alt="" />
          </div>
        </div>
      </section>

      <Products />

      {/* Blogs */}
      <section className="lg:mx-28">
        <p className="text-4xl font-semibold">Fresh News</p>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gird-cols-1 mb-20 mt-5">
          {blogs.map((blog) => {
            const { title, image, type, date } = blog;
            return (
              <>
                <div class="mr-5 mt-3 bg-white flex justify-center items-center flex-col rounded-lg md:shadow">
                  <a href="#">
                    <img class="rounded-t-lg" src={image} alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                        {title}
                      </h5>
                    </a>
                    <div className="flex gap-4">
                      <p class="mb-3 font-semibold text-gray-900 ">{type}</p>
                      <div className="text-gray-400">|</div>
                      <p class="mb-3 font-semibold text-gray-900 ">{date}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>

      {/* Services */}
      <section className="mx-36 mb-16">
        <div className="flex justify-center gap-4">
          <a
            href="#"
            class="block max-w-sm p-6 px-12 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
              <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
              <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
            </svg>

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Fast Free Shipping
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Arround the world
            </p>
          </a>

          <a
            href="#"
            class="block max-w-sm p-6 px-12 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path
                fill-rule="evenodd"
                d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                clip-rule="evenodd"
              />
              <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
            </svg>

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              24/7 Supports
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Contact us 24 hours
            </p>
          </a>
          <a
            href="#"
            class="block max-w-sm p-6 px-12 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z"
                clipRule="evenodd"
              />
            </svg>

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              100% Money Back
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Guarantee of money retun
            </p>
          </a>

          <a
            href="#"
            class="block max-w-sm p-6 px-12 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path
                fillRule="evenodd"
                d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              100% Secure Payment
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Your payment are safe with us.
            </p>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
