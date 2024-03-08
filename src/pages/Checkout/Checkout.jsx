import React from 'react'
import { Link } from 'react-router-dom'
import innerBannr from "../../assets/inner-banner.jpg";
import redCherry from "../../assets/redcherry.png"
import payonert from "../../assets/payonert.png";
import { FaDeleteLeft } from "react-icons/fa6"

const Checkout = () => {

    const cartProducts = [
        {
            image: redCherry,
            name: "Red cherry",
            price: "22",
        },
        {
            image: redCherry,
            name: "Red cherry",
            price: "22",
        },
        {
            image: redCherry,
            name: "Red cherry",
            price: "22",
        },
        {
            image: redCherry,
            name: "Red cherry",
            price: "22",
        }
    ]

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
                        Checkout
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
                                        <Link to={'/cart'} class="ms-1 text-white hover:text-gray-300 duration-300">
                                            cart
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex items-center">
                                        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                        <Link to={'/checkout'} class="ms-1 text-white hover:text-gray-300 duration-300">
                                            checkout
                                        </Link>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Page details */}
            <section className='container mx-auto   my-5'>

                <div className='lg:grid block lg:grid-cols-2 grid-cols-1 gap-6'>
                    <div>
                        {/* Biling Details */}
                        <div className='py-16 px-8 border shadow-md rounded-lg'>
                            <p className='text-3xl font-semibold'>Biling Details</p>
                            <form class="mx-auto mt-4">
                                <div className='grid grid-cols-2 gap-4'>
                                    <div class="mb-5">
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900"> Email</label>
                                        <input type="email" id="email" name='email' class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                                    </div>
                                    <div class="mb-5">
                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                        <input type="password" id="password" name='password' class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                                    </div>
                                </div>
                                <div>
                                    <label for="address" class="block mb-2 text-sm font-medium text-gray-900">Address</label>
                                    <input type="text" id="address" name='address' class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                                </div>
                                <div className='mt-2'>
                                    <div className='grid grid-cols-3 gap-4'>
                                        <div class="mb-5">
                                            <label for="city" class="block mb-2 text-sm font-medium text-gray-900">City</label>
                                            <input type="text" id="city" name='city' class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                                        </div>
                                        <div class="mb-5">
                                            <label for="city" class="block mb-2 text-sm font-medium text-gray-900">State</label>
                                            <select name="" className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' id="">
                                                <option value="...">Choose</option>
                                                <option value="..."> .... </option>
                                            </select>
                                        </div>
                                        <div class="mb-5">
                                            <label for="zip" class="block mb-2 text-sm font-medium text-gray-900">Zip</label>
                                            <input type="text" id="zip" name='zip' class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                                        </div>
                                    </div>
                                    <div class="flex items-start mb-5">
                                        <div class="flex items-center h-5">
                                            <input id="check" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                        </div>
                                        <label for="check" class="ms-2 text-sm font-medium text-gray-900">Check me out</label>
                                    </div>
                                </div>
                                <button type="submit" class="text-white mt-5 bg-[#f96822] hover:bg-[#f0824a]  font-medium rounded-lg text-sm sm:w-auto w-full px-5 py-2.5 text-center shadow-xl">Save Changes</button>
                            </form>
                        </div>

                        {/* Shipping Details to different address */}
                        <div className='mt-6 pt-16 pb-5 px-8 border shadow-md rounded-lg'>
                            <p className='text-3xl font-semibold'>Ship to a Different Address ?</p>
                            <form class="mx-auto mt-4">
                                <div className='grid grid-cols-2 gap-4'>
                                    <div class="mb-5">
                                        <label for="fName" class="block mb-2 text-sm font-medium text-gray-900">First name</label>
                                        <input type="text" id="fName" name='fName' class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                                    </div>
                                    <div class="mb-5">
                                        <label for="lName" class="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                                        <input type="text" id="lName" name='lName' class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                                    </div>
                                </div>
                                <div>
                                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 " placeholder="Order Notes (optional)"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div>
                        {/* Order summary */}
                        <div className='border pt-12 pb-4 px-8 mt-4'>
                            <p className='text-3xl font-semibold'>Order Summary</p>
                            {
                                cartProducts.map((product) => {
                                    const { image, name, price } = product;
                                    return (
                                        <>
                                            <div className='flex justify-between items-center p-3 mb-2'>
                                                <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-md border">
                                                    <img
                                                        src={image}
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div>
                                                    <p>{name}</p>
                                                    <p>$ {price}</p>
                                                </div>
                                                <p className='text-xl cursor-pointer'>
                                                    <FaDeleteLeft />
                                                </p>
                                            </div >

                                        </>
                                    )
                                })
                            }
                        </div>

                        {/* SubTotal  */}
                        <div className='border py-6 px-8 my-5'>
                            <div className='flex justify-between font-semibold text-xl pb-3'>
                                <p className=''>Sub Total</p>
                                <p>$ 128.70</p>
                            </div>
                            <div className='flex justify-between font-semibold text-lg pb-3'>
                                <p>Tax</p>
                                <p>$ 5</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Total (tax excl.)</p>
                                <p>$ 15</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Total (tax incl.)</p>
                                <p>$ 15</p>
                            </div>
                        </div>

                        {/* Total */}
                        <div className='border py-6 px-8 my-5'>
                            <div className='flex justify-between items-center'>
                                <p className='text-2xl font-bold'>Total</p>
                                <p>$ 128.70</p>
                            </div>
                        </div>

                        {/* payment methods */}
                        <div className='border pt-12 pb-4 px-8'>


                            <fieldset>
                                <div className='mb-4'>
                                    <div class="flex items-center ">
                                        <input checked type="radio" name='payment' class="mt-1 w-4 h-4 border-gray-300" />
                                        <label class="ms-2  font-medium text-gray-900">
                                            Check Payments
                                        </label>
                                    </div>
                                    <small class="ms-6 text-muted">
                                        Please send a check to Store Name, Store Street, Store Town,
                                        Store State / County, Store Postcode.
                                    </small>
                                </div>

                                <div className='mb-4'>
                                    <div class="flex items-center">
                                        <input type="radio" name='payment' class="mt-1 w-4 h-4 border-gray-300" />
                                        <label class="ms-2  font-medium text-gray-900">
                                            Cash on Delivery
                                        </label>
                                    </div>
                                    <small class="ms-6 text-muted">
                                        Pay with cash upon delivery.
                                    </small>
                                </div>

                                <div className='mb-4'>
                                    <div class="flex items-center">
                                        <input type="radio" name='payment' class="mt-1 w-4 h-4 border-gray-300" />
                                        <label class="ms-2  font-medium text-gray-900">
                                            Paypal
                                        </label>
                                        <img src={payonert} className='ms-2' alt="" />
                                    </div>
                                    <small class="ms-6 text-muted">
                                        Pay with cash upon delivery.
                                    </small>
                                </div>

                                <div class="flex items-center ">
                                    <input checked type="checkbox" class="mt-1 w-4 h-4 border-gray-300" />
                                    <label class="ms-2 font-medium">
                                        I've agreed to terms and conditions
                                    </label>
                                </div>


                            </fieldset>

                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Checkout
