import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";

const serviceDetailsPage = async ({ params }) => {
  // Get the service ID from the dynamic URL.
  const p = await params;

  // Find the selected service in the MongoDB collection.
  const serviceCollection = dbConnect("services");
  const data = await serviceCollection.findOne({
    _id: new ObjectId(p.id),
  });

  return (
    <main className="bg-slate-50 py-10 md:py-16">
      <div className="container mx-auto px-4">
        {/* Let the user return to the services list. */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-red-500 transition hover:text-red-700"
        >
          <span aria-hidden="true">←</span> Back to services
        </Link>

        <section className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-200/70">
          <div className="grid items-center lg:grid-cols-2">
            
            {/* Show the selected service image. */}
            <div className="relative min-h-72 bg-slate-100 lg:min-h-[460px]">
              <Image
                src={data.img}
                alt={data.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Show the service information and booking action. */}
            <div className="p-6 sm:p-10 lg:p-14">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                Car Doctor Service
              </p>
              <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
                {data.title}
              </h1>
              <div className="my-7 h-px bg-slate-200" />
              <p className="leading-7 text-slate-500">
                {data.description ||
                  "Professional care from our experienced automotive service team. We use quality parts and reliable techniques to keep your car running smoothly."}
              </p>

              <div className="mt-8 flex flex-wrap items-end justify-between gap-5">
                <div>
                  <p className="text-sm font-medium text-slate-400">Service price</p>
                  <p className="mt-1 text-4xl font-bold text-red-500">${data.price}</p>
                </div>
                <button className="btn border-0 bg-red-500 px-7 text-white hover:bg-red-600">
                  Book this service
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default serviceDetailsPage;