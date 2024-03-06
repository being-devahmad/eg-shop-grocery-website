import React from "react";
import innerBannr from "../../assets/inner-banner.jpg";
import brocli from "../../assets/brocli.png";
import cabage from "../../assets/cabage.png";
import cherry from "../../assets/cherry.png";
import choco from "../../assets/choco.png";
import coconut from "../../assets/coconut.png";
import cookies from "../../assets/cookies.png";
import dryGinger from "../../assets/dry-ginger.png";
import egg from "../../assets/egg.png";
import eggPlant from "../../assets/egg-plant.png";
import ginger from "../../assets/ginger.png";
import guava from "../../assets/guava3.png";
import honey from "../../assets/honey.png";
import pineapple from "../../assets/pineapp.png";
import mango from "../../assets/mango.png";
import nuts from "../../assets/product-sm3.png";
import pomgera from "../../assets/pomegra.png";
import stawberry from "../../assets/stawberry.png";
import redcherry from "../../assets/redcherry.png";
import redChilli from "../../assets/red-chilli.png";
import rex from "../../assets/rex.png";
import tomatoes from "../../assets/tomato.png";
import vegetable from "../../assets/veg.png";
import watermelon from "../../assets/waterm.png";
import orange from "../../assets/orange.png";

const Products = () => {
  const products = [
    {
      image: brocli,
      name: "Brocli",
      originalPrice: "12",
      discountedPrice: "12",
    },
    {
      image: cabage,
      name: "Cabage",
      originalPrice: "12",
      discountedPrice: "12",
    },
    {
      image: choco,
      name: "Choco",
      originalPrice: "12",
      discountedPrice: "12",
    },
    {
      image: coconut,
      name: "Coconut",
      originalPrice: "12",
      discountedPrice: "12",
    },
    {
      image: cherry,
      name: "Cherry",
      originalPrice: "12",
      discountedPrice: "12",
    },
    {
      image: cookies,
      name: "Cookies",
      originalPrice: "12",
      discountedPrice: "12",
    },
    {
      image: dryGinger,
      name: "Dry Ginger",
      originalPrice: "12",
      discountedPrice: "12",
    },
    {
      image: egg,
      name: "Egg",
      originalPrice: "12",
      discountedPrice: "12",
    },
    {
      image: eggPlant,
      name: "Eggplant",
      originalPrice: "12",
      discountedPrice: "12",
    },
    {
      image: ginger,
      name: "Ginger",
      originalPrice: "12",
      discountedPrice: "12",
    },
    {
      image: guava,
      name: "Guava",
      originalPrice: "12",
      discountedPrice: "12",
    },
    {
      image: honey,
      name: "Honey",
      originalPrice: "12",
      discountedPrice: "12",
    },
    {
      image: mango,
      name: "Mango",
      originalPrice: "12",
      discountedPrice: "12",
    },
    {
      image: nuts,
      name: "Nuts",
      originalPrice: "12",
      discountedPrice: "12",
    },
    {
      image: pineapple,
      name: "Pineapple",
      originalPrice: "12",
      discountedPrice: "12",
    },
    {
      image: pomgera,
      name: "Pomgera",
      originalPrice: "12",
      discountedPrice: "12",
    },
    {
      image: redcherry,
      name: "Red Cherry",
      originalPrice: "12",
      discountedPrice: "12",
    },
    {
      image: stawberry,
      name: "Stawberry",
      originalPrice: "12",
      discountedPrice: "12",
    },
    {
      image: redChilli,
      name: "Red Chilli",
      originalPrice: "12",
      discountedPrice: "12",
    },
    {
      image: rex,
      name: "Rex",
      originalPrice: "12",
      discountedPrice: "12",
    },
    {
      image: tomatoes,
      name: "Tomato",
      originalPrice: "12",
      discountedPrice: "12",
    },
    {
      image: vegetable,
      name: "Vegetable",
      originalPrice: "12",
      discountedPrice: "12",
    },
    {
      image: watermelon,
      name: "Watermelon",
      originalPrice: "12",
      discountedPrice: "12",
    },
    {
      image: orange,
      name: "Orange",
      originalPrice: "12",
      discountedPrice: "12",
    },
  ];

  return (
    <>
      {/* Products */}
      <section className="mt-[80px]">
        <div>
          <p className="text-4xl font-semibold text-center">
            What do you looking for ?
          </p>
          <p className="text-lg text-center">
            Mauris vitae ultricies leo integer malesuada nunc vel in arcu cursus
          </p>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-[60px] mb-20 mt-5">
            {products
              .map((product) => {
                const { image, name, discountedPrice, originalPrice } = product;
                return (
                  <>
                    <div class="mx-2 mt-2 flex flex-col items-center bg-white hover:bg-gray-100 border border-gray-200 rounded-lg shadow-md cursor-pointer">
                      <img src={image} className="w-[200px] h-[250px]" alt="" />

                      <p class=" text-black text-lg font-bold">{name}</p>
                      <div className="flex gap-4">
                        <p class="font-semibold text-black text-md">
                          <del> ${originalPrice} /KG</del>
                        </p>
                        <p class="font-bold text-black text-lg">
                          ${discountedPrice} /KG
                        </p>
                      </div>
                      <button
                        className="bg-[#f96822] text-lg text-[#ffff] ease-in duration-300 rounded-3xl px-5 py-2 my-3"
                        type="button"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </>
                );
              })
              .splice(0, 12)}
          </div>
        </div>
      </section>

      {/* Banner */}

      <section>
        <div
          style={{
            background: `linear-gradient(rgba(34, 46, 89, 0.7), rgba(7, 18, 62, 0.7)),url(${innerBannr})`,
          }}
          className="bg-cover bg-center"
        >
          <p className="text-5xl text-center text-white font-bold py-28">
            Weekly Special Offers on Vegetable
          </p>
        </div>
      </section>

      {/* Products */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-[60px] mb-20 mt-5">
        {products
          .map((product) => {
            const { image, name, discountedPrice, originalPrice } = product;
            return (
              <>
                <div class="mx-2 mt-2 flex flex-col items-center bg-white hover:bg-gray-100 cursor-pointer border border-gray-200 rounded-lg shadow-md">
                  <img src={image} className="w-[200px] h-[250px]" alt="" />

                  <p class=" text-black text-lg font-bold">{name}</p>
                  <div className="flex gap-4">
                    <p class="font-semibold text-black text-md">
                      <del> ${originalPrice} /KG</del>
                    </p>
                    <p class="font-bold text-black text-lg">
                      ${discountedPrice} /KG
                    </p>
                  </div>
                  <button
                    className="bg-[#f96822] text-lg text-[#ffff] ease-in duration-300 rounded-3xl px-5 py-2 my-3"
                    type="button"
                  >
                    Add to Cart
                  </button>
                </div>
              </>
            );
          })
          .splice(12, 24)}
      </div>
    </>
  );
};

export default Products;
