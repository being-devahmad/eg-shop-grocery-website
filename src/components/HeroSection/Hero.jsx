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
  return (
    <>
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
      <section>
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
    </>
  );
};

export default Hero;
