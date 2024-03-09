import React from 'react'
import { Link } from 'react-router-dom';
import innerBannr from "../../assets/inner-banner.jpg";
import aboutBg from "../../assets/about-bg.jpg";
import about1 from "../../assets/about1.svg";
import about2 from "../../assets/about2.svg";
import Services from '../../components/Services/Services';

const AboutUs = () => {
    return (
        <>
            <section>
                {/* Banner */}
                <div
                    style={{
                        background: `linear-gradient(rgba(34, 46, 89, 0.7), rgba(7, 18, 62, 0.7)),url(${innerBannr})`,
                    }}
                    className="bg-cover bg-center"
                >
                    <p className="text-4xl text-center text-white font-bold pt-28">
                        About Us
                    </p>
                    {/* Breadcrumbs */}
                    <div className='pb-28'>
                        <nav class="text-center font-bold mt-4" aria-label="Breadcrumb">
                            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                <li class="inline-flex items-center">
                                    <Link to={'/'} href="#" class="inline-flex items-center text-white hover:text-gray-300 duration-300">
                                        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                        </svg>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <div class="flex items-center">
                                        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                        <Link to={'/about'} class="ms-1 text-white hover:text-gray-300 duration-300">
                                            About Us
                                        </Link>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* AboutUs Description */}

                <div class="container mx-auto ">
                    <div className='grid grid-cols-1 md:grid-cols-2 my-24 mx-12'>
                        <div className='rounded-lg'>
                            <img src={aboutBg} className='rounded-lg' alt="" />
                        </div>
                        <div className='px-14 py-8 md:mt-0 mt-4 rounded-2xl shadow-lg bg-[#F0F2F5]'>
                            <p>Welcome to EG Shop</p>
                            <p className='text-3xl font-semibold leading-10'>What can a great About <br /> Us page do for your <br />business ?</p>
                            <p>An About Us page helps your company make a good first impression, and is critical for building customer trust and loyalty. An About Us page should make sure to cover basic information about the store and its founders, explain the company's purpose and how it differs from the competition, and encourage discussion and interaction.</p>
                            <br />
                            <p>"Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus."</p>

                            <div className='mt-8 mb-4 flex gap-3'>
                                <img src={about1} alt="" />
                                <img src={about2} alt="" />
                            </div>
                            <button
                                className="bg-[#f96822] hover:bg-[#ff9763] text-xl text-[#ffff] ease-in duration-300 rounded-3xl px-12 py-4 my-3"
                                type="button"
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            {/* Services Section */}

            <section>
                <Services />
            </section>




        </>
    )
}

export default AboutUs
