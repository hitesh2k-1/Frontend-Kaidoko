import Image from 'next/image';
import React from 'react';

const Collaborations = () => {
    return (
        <div className="sm:bg-white  pt-10 pb-16 px-8 lg:px-20 rounded-lg">
            <div className="max-w-7xl relative bg-[#ECF8DF] rounded-2xl px-5 sm:px-10 py-14 mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-20">
                        <Image height={75} width={75}
                            src="/images/icon.svg"
                            alt="icon"
                            className="absolute left-10 top-[-50px]"/>
                {/* Left Section*/}
                <div className="lg:w-1/3">
                    <h2 className="sm:text-2xl text-lg font-semibold">Our Collaborations</h2>
                    <p className="text-gray-700 text-xs sm:text-base">
                        We have partnered with industry leaders to deliver courses that not only educate but also immerse you in real-world scenarios, fostering your career growth.
                    </p>
                </div>

                {/* Right Section*/}
                <div className="lg:w-2/3 flex flex-wrap justify-start items-center gap-10 sm:gap-14 ">
                    <Image height={36} width={110}
                        src="/images/google.svg"
                        alt="Google"
                        className="w-30 sm:w-40"/>
                    <Image height={36} width={110}
                        src="/images/microsoft.svg"
                        alt="Google"
                        className="w-30 sm:w-40"/>
                    <Image height={36} width={110}
                        src="/images/adobe.svg"
                        alt="Google"
                        className="w-30 sm:w-40"/>
                    <Image height={36} width={110}
                        src="/images/amazon.svg"
                        alt="Google"
                        className="w-30 sm:w-40"/>
                    <Image height={36} width={110}
                        src="/images/ibm.svg"
                        alt="Google"
                        className="w-30 sm:w-40"/>
                   
                </div>
            </div>
        </div>
    );
};

export default Collaborations;
