import dbConnect from '@/lib/dbConnect';
import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Services = async() => {

    // const res = await fetch("http://localhost:3000/services.json")
    // const data = await res.json()

    const serviceCollection = dbConnect("services")
    const data = await serviceCollection.find({}).toArray();
    console.log(data)

    return (
        <div className='grid grid-cols-12 gap-6 container mx-auto'>
            {
                data.map(d => (
                    <div key={d._id} className='lg:col-span-4 md:col-span-6 col-span-12 rounded-lg p-4 shadow'>
                        <Image
                            src={d.img}
                            width={400}
                            height={250}
                            className='h-auto w-full rounded-lg'
                            alt={d.title}
                        />
                        <h2 className='mt-4 text-xl font-semibold'>{d.title}</h2>
                        <div className='mt-3 flex items-center justify-between'>
                            <p className='text-lg font-semibold text-red-400'>${d.price}</p>
                            <button className='btn btn-circle border-0 bg-red-100 text-red-400 hover:bg-red-200' aria-label={`View ${d.title}`}>
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Services;