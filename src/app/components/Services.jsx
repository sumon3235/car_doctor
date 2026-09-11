import dbConnect from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Services = async () => {
  const serviceCollection = dbConnect("services");
  const data = await serviceCollection.find({}).toArray();

  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="text-sm font-bold uppercase text-red-500">Service</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
          Our Service Area
        </h2>
        <p className="mt-4 text-sm leading-6 text-slate-500">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1500px] grid-cols-12 gap-6">
        {data.map((d) => (
          <div
            key={d._id}
            className="col-span-12 rounded-lg p-4 shadow md:col-span-6 lg:col-span-4"
          >
            <Image
              src={d.img}
              width={400}
              height={250}
              className="h-auto w-full rounded-lg"
              alt={d.title}
            />
            <h2 className="mt-4 text-xl font-semibold">{d.title}</h2>
            <div className="mt-3 flex items-center justify-between">
              <p className="text-lg font-semibold text-red-400">${d.price}</p>
              <Link
                href={`/services/${d._id}`}
                className="btn btn-circle border-0 bg-red-100 text-red-400 hover:bg-red-200"
                aria-label={`View ${d.title}`}
              >
                <FaArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
