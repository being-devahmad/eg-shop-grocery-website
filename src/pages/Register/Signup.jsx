import React from 'react'
import innerBannr from "../../assets/inner-banner.jpg";
import { Link } from 'react-router-dom'

const Signup = () => {
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
                        Signup
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
                                        <Link to={'/signup'} class="ms-1 text-white hover:text-gray-300 duration-300">
                                            Signup
                                        </Link>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Registeration form - signup */}
            <section className='container mx-auto flex justify-center flex-col items-center'>
                <div className='flex justify-center items-center gap-3 mt-20 mb-8'>
                    <Link to={'/signup'}
                        className="bg-[#f96822] hover:bg-[#ff9763] text-xl text-[#ffff] ease-in duration-300 rounded-xl px-12 py-4 my-3 shadow-2xl"
                        type="button"
                    >
                        Register
                    </Link>
                    <Link to={'/login'}
                        className="bg-[white] hover:bg-[#f96822] hover:text-white text-xl text-black ease-in duration-300 rounded-xl px-12 py-4 my-3 shadow-2xl"
                        type="button"
                    >
                        Login
                    </Link>
                </div>

                <div className='rounded-xl shadow-2xl lg:w-[75%] w-[100%] px-9 py-5 mb-5'>
                    <form class="mx-auto mt-4">
                        <div>
                            <p className='text-3xl font-semibold text-center pb-5'>REGISTER YOUR ACCOUNT</p>
                            <div class="mb-5">
                                <label class="block mb-2 text-sm font-medium text-gray-900">Username</label>
                                <input name='username' class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                            </div>
                            <div class="mb-5">
                                <label class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                <input name='email' class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                            </div>
                            <div class="mb-5">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" name='password' class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                            </div>
                            <div class="mb-5">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
                                <input type="password" name='confirmPassword' class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                            </div>

                            <div class="flex items-center ">
                                <input type="checkbox" class="mt-1 w-4 h-4 border-gray-300" />
                                <label class="ms-2 font-medium">
                                    I've agreed to terms and conditions
                                </label>
                            </div>
                        </div>

                        <button type="submit" class="text-white mt-5 bg-[#f96822] hover:bg-[#f0824a] rounded-lg text-lg w-full px-5 py-6 text-center shadow-xl">Create an account</button>


                    </form>
                </div>
            </section>
        </>
    )
}

export default Signup
