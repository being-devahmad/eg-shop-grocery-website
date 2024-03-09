import React from 'react'
import { Link } from 'react-router-dom'
import innerBannr from "../../assets/inner-banner.jpg";

const ContactUs = () => {

  const branches = [
    {
      id: 1,
      address: "Address: 168/170, Ave 01, Mirpur DOHS",
      country: "Bangladesh",
      email: "info.example@gmail.com",
      phone: "+02 1234 567 88",
      web: "www.yourwebsite.com"
    },
    {
      id: 2,
      address: "150 lane Nagano Sitijet National Park",
      country: "Austrailia",
      email: "info.example@gmail.com",
      phone: "+02 1234 567 88",
      web: "www.yourwebsite.com"
    },
    {
      id: 3,
      address: "150/58 Fujimi Navana lane Sitijet Nagano",
      country: "Japan",
      email: "info.example@gmail.com",
      phone: "+02 1234 567 88",
      web: "www.yourwebsite.com"
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
            Contact Us
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
                    <Link to={'/contact'} class="ms-1 text-white hover:text-gray-300 duration-300">
                      Contact
                    </Link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Contact Us page */}
      <section className='container mx-auto'>
        <div className='flex justify-center my-6'>
          <p className='text-3xl font-semibold md:text-4xl text-center md:text-start md:max-w-[600px]'>NICE PROJECT? GET IN TOUCH! WILL
            CONTACT YOU SOON</p>
        </div>
        <div className='rounded-2xl shadow-2xl  p-16'>
          <p className='text-3xl font-bold'>Get In Touch</p>
          <p className='text-lg' >Your email address will not be published. Required fields are marked *</p>
          <form class="mx-auto mt-4">
            <div className='grid grid-cols-2 gap-4'>
              <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" id="email" name='email' class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Your Name" required />
              </div>
              <div class="mb-5">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type="password" id="password" name='password' class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Your Password" required />
              </div>
            </div>
            <div>
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
              <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 " placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" class="text-white mt-5 bg-[#f96822] hover:bg-[#f0824a]  font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Send Message</button>
          </form>
        </div>
      </section>

      {/* Branches */}

      <section className='container mx-auto mt-12 mb-8'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
          {
            branches.map((branch, index) => {
              const { id, name, address, country, phone, email, web } = branch
              return (
                <>
                  <div className='border shadow-lg '>
                    <div className='bg-[#f96822] py-6'>
                      <p className='text-3xl text-white font-semibold text-center'>Branch {id}</p>
                    </div>
                    <div className='px-12 my-6 text-sm'>
                      <p>Address:{address}</p>
                      <p>{country}</p>
                      <p>Email: {email}</p>
                      <p>Phone: {phone}</p>
                      <p>Web: {web}</p>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </section>

    </>
  )
}

export default ContactUs
