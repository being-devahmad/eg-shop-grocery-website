import React from 'react'
import { RiCustomerServiceFill } from 'react-icons/ri';
import { GrMoney } from 'react-icons/gr';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { FaTruck } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: <FaTruck />,
            title: 'Around the world',
            description: 'Around the world'
        },
        {
            icon: <RiCustomerServiceFill />,
            title: '24/7 Supports',
            description: 'Contact us 24 hours'
        },
        {
            icon: <GrMoney />,
            title: '100% Money Back',
            description: 'Guarantee of money return'
        },
        {
            icon: <RiSecurePaymentLine />,
            title: '100% Secure Payment',
            description: 'Your payments are safe with us'
        }
    ];
    return (
        <>
            {/* Services */}
            <section>
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mx-16 mb-20 mt-5">
                    {
                        services.map((service, index) => {
                            const { icon, title, description } = service
                            return (
                                <div key={index} className="w-[100%]">
                                    <a
                                        href="#"
                                        className="block p-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
                                    >
                                        <div className="flex justify-center gap-4 md:block">
                                            <p className="text-3xl"> {icon}</p>
                                            <p className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                                                {title}
                                            </p>
                                        </div>
                                        <p className="font-semibold text-gray-600 text-center md:text-start">
                                            {description}
                                        </p>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Services
