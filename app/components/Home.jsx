import React from "react";
import Image from "next/image";
import Productcard from "./Productcard";
import Link from "next/link";

const HeroSection = () => (
  <div className="w-full h-[70vh] flex items-center justify-between shadow-2xl max-md:w-[100vw] max-md:h-full max-sm:p-1 overflow-x-hidden">
    <div className="pl-10 w-[50vw] h-full flex flex-col px-10 text-left justify-center max-md:hidden">
      <h1 className="text-8xl text-start pl-10 font-extrabold">
        Go green,
        <br /> one plate at a time
      </h1>
      <p className="text-xl mt-5 text-start pl-10">
        Experience sustainable dining with our 100% natural and <br />
        compostable palm leaf tableware.
      </p>
      <div className="flex gap-10 mt-5 pl-10">
        <Link
          href="/Products"
          className="px-5 py-3 bg-green-600 rounded-full text-white cursor-pointer hover:bg-green-700 transition-colors"
        >
          Browse Collection
        </Link>
        <Link
          href="/About"
          className="px-5 py-3 border border-green-600 rounded-full text-black cursor-pointer hover:bg-green-50 transition-colors"
        >
          Learn more
        </Link>
      </div>
    </div>
    <div className="w-[50vw] h-full flex items-center justify-center max-md:w-[100vh] max-md:bg-[url('/HeroImage.jpeg')] max-md:bg-cover max-md:rounded-2xl">
      <div className="bg-[url('/HeroImage.jpeg')] bg-cover w-[70%] h-[70%] rounded-2xl max-md:hidden"></div>
      <div className="hidden bg-black/50 w-full h-full text-white max-md:flex max-md:items-center max-md:justify-center max-md:flex-col max-md:h-[70vh]">
        <h1 className="font-bold text-2xl text-center">
          Go green, <br /> one plate at a time
        </h1>
        <p className="text-center p-3">
          Experience sustainable dining with our 100% natural and compostable
          palm leaf tableware.
        </p>
        <div className="flex gap-5 w-full items-center justify-center">
          <Link
            href="/Products"
            className="mt-5 px-3 py-3 bg-green-700 rounded-full text-sm hover:bg-green-800 transition-colors"
          >
            Browse collection
          </Link>
          <Link
            href="/About"
            className="mt-5 px-3 py-3 bg-green-700 rounded-full text-sm hover:bg-green-800 transition-colors"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="w-[20vw] h-full bg-white rounded-2xl p-7 shadow-lg max-md:w-full max-md:h-full overflow-hidden max-md:bg-green-200">
    <Image src={icon} height={30} width={30} alt={`${title} icon`} />
    <h2 className="font-bold text-xl my-2">{title}</h2>
    <p>{description}</p>
  </div>
);

const FeaturesSection = () => (
  <div className="w-full p-10 h-[30vh] bg-green-100 flex items-center justify-center gap-x-10 max-md:flex-col max-md:h-full max-md:gap-y-3 max-md:p-5 max-md:bg-white">
    <FeatureCard
      icon="/leafpic.png"
      title="100% Natural"
      description="Made from the palm leaf, our products are completely natural and chemical free"
    />
    <FeatureCard
      icon="/disposal.png"
      title="Compostable"
      description="Returns to nature within 60days. Leaving zero waste behind"
    />
    <FeatureCard
      icon="/heart.png"
      title="Eco friendly"
      description="Supporting sustainable practices, reducing plastic waste"
    />
  </div>
);

const ProcessStep = ({ number, title, description }) => (
  <div className="mb-6">
    <div className="flex gap-5 items-center">
      <span
        className="px-4 py-1 bg-green-300 rounded-full text-green-700 text-xl font-bold"
        aria-hidden="true"
      >
        {number}
      </span>
      <h2 className="text-4xl font-black max-md:text-2xl">{title}</h2>
    </div>
    <p className="text-xl mt-3 text-gray-600">{description}</p>
  </div>
);

const ManufacturingProcess = () => (
  <div className="h-full w-full flex items-center justify-center flex-col">
    <h2 className="font-bold text-7xl pt-10 max-md:text-4xl max-md:font-bold max-md:mb-5 max-md:p-5">
      From leaf to plate
    </h2>
    <p className="text-xl py-7 max-md:hidden">
      Discover our sustainable manufacturing process
    </p>

    <div className="flex w-[100vw] gap-10 items-center max-md:justify-center pb-10">
      <div className="w-[50%] h-[60vh] rounded-xl flex justify-center items-center max-md:hidden">
        <div className="bg-[url('/manufacturing.jpeg')] bg-cover w-[30vw] h-[80%] rounded-2xl shadow-2xl"></div>
      </div>

      <div className="w-[50%] h-[60vh] flex flex-col justify-center gap-y-10 max-md:w-[100%] max-md:p-5">
        <ProcessStep
          number="1"
          title="Collecting palm leaf"
          description="We carefully collect palm leaves from our sustainable farm"
        />
        <ProcessStep
          number="2"
          title="Natural Cleaning"
          description="Leaves are cleaned using pure water and sun-dried naturally."
        />
        <ProcessStep
          number="3"
          title="Shaping & Quality Check"
          description="Each piece is carefully molded and inspected for quality assurance."
        />
      </div>
    </div>
  </div>
);

const ProductsSection = () => (
  <div className="h-full w-full p-10 flex gap-5 items-center justify-center flex-col bg-green-100 text-green-800 overflow-hidden">
    <h2 className="text-7xl font-black text-center">Our products</h2>
    <p className="mb-10">Sustainable alternatives for every occasion</p>
    <div className="flex gap-x-10 max-md:flex-col max-md:gap-y-10">
      {[
        {
          name: "Square plate",
          description: "Palm areca square plates",
          image: "/squarePlate.jpeg",
        },
        {
          name: "Soup bowl",
          description: "palm areca soup bowl",
          image: "/soupBowl.jpeg",
        },
        {
          name: "Round Plate",
          description: "Plam areca Round Plate",
          image: "/roundPlate.jpeg",
        },
        {
          name: "Rectangular Tray",
          description: "Plam areca rectangular tray",
          image: "/rectangularTray.jpeg",
        },
      ].map((product) => (
        <Link key={product.name} href="/Products">
          <Productcard
            name={product.name}
            description={product.description}
            image={product.image}
            id={product.name.toLowerCase().replace(/\s+/g, "-")}
          />
        </Link>
      ))}
    </div>
  </div>
);

function Home() {
  return (
    <div>
      <main className="max-md:p-0 overflow-hidden">
        <HeroSection />
        <FeaturesSection />
        <ManufacturingProcess />
        <ProductsSection />
      </main>
    </div>
  );
}

export default Home;
