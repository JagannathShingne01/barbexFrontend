import React from "react";
import Image from "next/image";
import about1 from "../../public/about1.jpg";
import about2 from "../../public/about2.jpg";
import about3 from "../../public/about3.jpg";
const About = () => {
  return (
    <div className="lg:h-screen bg-white">
      <div className="grid grid-col-1 lg:grid-cols-2 pt-2 md:pt-10 lg:pt-20">
        <div className="flex relative mx-auto">
          <div className=" mt-10 ml-4 md:ml-14 overflow-hidden">
            <Image
              src={about3}
              alt="About hair dry"
              width={320}
              height={400}
              objectFit="cover"
              className="rounded-md shadow-lg h-[450px] w-auto md:w-auto lg:h-auto"
            />
          </div>
          <div className="mt-10 p-7">
            <div className="">
              <Image
                src={about1}
                alt="hair blow girl"
                width={220}
                height={170}
                objectFit="cover"
                className="rounded-md shadow-lg hidden md:block"
              />
            </div>
            <div className=" mt-10 absolute z-10 left-[11rem]  md:left-64 border-8 border-white">
              <Image
                src={about2}
                alt="About image tru"
                width={400}
                height={170}
                objectFit="cover"
                className="rounded-md shadow-lg h-[300px] w-[200px] md:w-[300px] lg:w-[400px] xl:w-auto md:h-[300px]  "
              />
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center text-black px-6 md:px-12 xl:mr-20 mb-20">
          <div>
            <div className="relative">
              <div className="absolute z-10 top-20">
                <h1 className="text-primary text-lg">About Us</h1>
                <h2 className=" text-3xl md:text-5xl mt-2 ">
                  Best Haircut Salons For Men and Women
                </h2>
              </div>

              <h2 className="text-7xl md:text-8xl font-extrabold text-black/10 relative top-16">
                About Us
              </h2>
            </div>

            <p className="text-base sm:mt-24 mt-32 md:mt-32">
              Haircut&quot; is a term used to describe when a person removes the hair
              on their head. This is done to allow for better access to the part
              of the body that needs cutting.
            </p>
            <p className="border-l-2 border-primary text-lg my-5 pl-4">
              We&apos;re a leading independent salon in Dubai offering everything
              from haircuts to exfoliation and
            </p>
            <button className="px-10 py-4 text-lg bg-primary text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
