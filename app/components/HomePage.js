"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const HomePage = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <div className="m-auto sm:px-20 px-5 pt-20 rounded-lg flex flex-col xl:flex-row items-center xl:items-start justify-center xl:justify-between">
            <div className={`max-w-[80vw] sm:max-w-[65vw] md:max-w-[500px] transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>
                <div className="flex justify-between items-start">
                    <h1 className="sm:text-5xl text-3xl mb-6">
                        <span className="font-thin">Skyrocket your</span>{" "}
                        <span>career towards excellence</span>
                    </h1>
                    <Image height={110} width={110} priority
                     className={`lg:hidden -translate-y-14 duration-1000 ${loaded ? "translate-x-0 opacity-100" : "translate-x-[100%] opacity-0"}`}  src="/images/scroll.svg" alt="" />
                </div>

                <ul className="font-semibold font">
                    <li className="flex items-center mb-3">
                        <span className="mr-3">
                            <Image height={36} width={36} priority
                             className={`transition-transform duration-1000 ${loaded ? "translate-x-0 opacity-100" : "translate-x-[-100%] opacity-0"}`} src="/images/book.svg" alt="" />
                        </span>
                        <span>Flexible Learning</span>
                    </li>
                    <li className="flex items-center mb-3">
                        <span className="mr-3">
                            <Image height={36} width={36} priority
                            className={`transition-transform duration-1000 ${loaded ? "translate-x-0 opacity-100" : "translate-x-[-100%] opacity-0"}`} src="/images/degree.svg" alt="" />
                        </span>
                        <span>Interactive Learning Experience</span>
                    </li>
                    <li className="flex items-center">
                        <span className="mr-3">
                            <Image height={36} width={36} priority
                             className={`transition-transform duration-1000 ${loaded ? "translate-x-0 opacity-100" : "translate-x-[-100%] opacity-0"}`} src="/images/career.svg" alt="" />
                        </span>
                        <span>Career Opportunities</span>
                    </li>
                </ul>
            </div>

            <div className="relative mt-24 max-w-[80vw]">
                <Image height={219} width={305} priority
                 className={`sm:w-full transition-transform duration-1000 ${loaded ? "translate-y-0 opacity-100" : "translate-y-[100%] opacity-0"}`} src="/images/circle.svg" alt="" />
                <Image height={162} width={135} priority
                 className={`absolute bottom-0 left-0 sm:left-8 sm:w-[38%] xl:w-[40%] transition-transform duration-1000 ${loaded ? "translate-x-0 opacity-100" : "translate-x-[-100%] opacity-0"}`} src="/images/lawyer.svg" alt="" />
                <Image height={253} width={250} priority
                 className={`absolute bottom-0 right-0 sm:w-[70%] xl:w-[75%] transition-transform duration-1000 ${loaded ? "translate-x-0 opacity-100" : "translate-x-[100%] opacity-0"}`} src="/images/kids.svg" alt="" />
                <Image height={104} width={156} priority
                 className={`hidden lg:block absolute xl:top-[-130px] right-0 xl:w-[25%] lg:w-[20%] lg:top-[-70px] transition-transform duration-1000 ${loaded ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0"}`} src="/images/scroll.svg" alt="" />
                <Image height={113} width={115} priority
                 className={`hidden xl:block absolute bottom-5 left-[-170px] transition-transform duration-1000 ${loaded ? "translate-x-0 opacity-100" : "translate-x-[-100%] opacity-0"}`} src="/images/bag.svg" alt="" />
            </div>
        </div>
    );
};

export default HomePage;
