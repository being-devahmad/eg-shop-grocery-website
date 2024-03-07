import React from 'react'
import { Link } from 'react-router-dom';
import innerBannr from "../../assets/inner-banner.jpg";

const Cart = () => {
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
            Cart
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
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Cart Table */}
          
    </>
  )
}

export default Cart
