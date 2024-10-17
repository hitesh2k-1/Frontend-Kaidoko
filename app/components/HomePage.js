import Image from "next/image";


const HomePage = () => {
    return (
        <div className=" m-auto sm:px-20 px-5 pt-20 rounded-lg flex flex-col xl:flex-row items-center xl:items-start justify-center xl:justify-between ">
            <div className="max-w-[80vw] sm:max-w-[65vw] md:max-w-[500px]">
            <div className="flex justify-between items-start" >
            <h1 className="sm:text-5xl text-3xl mb-6">
    <span className="">Skyrocket your</span> <span>career towards excellence</span>
</h1>
<Image className=" lg:hidden translate-y-[-40px] " height={110} width={110} src="/images/scroll.svg" alt="" />
</div>

                <ul className=" font-semibold font ">
                    <li className="flex items-center mb-3">
                        <span className="mr-3">
                            <Image height={36} width={36} src="/images/book.svg" alt="" />
                        </span>
                        <span >Flexible Learning</span>
                    </li>
                    <li className="flex items-center mb-3">
                        <span className="  mr-3">
                            <Image height={36} width={36} src="/images/degree.svg" alt="" />
                        </span>
                        <span>Interactive Learning Experience</span>
                    </li>
                    <li className="flex items-center">
                        <span className="mr-3">
                            <Image height={36} width={36} src="/images/career.svg" alt="" />
                        </span>
                        <span>Career Opportunities</span>
                    </li>
                </ul>
            </div>
            <div className="relative mt-24 max-w-[80vw] ">
                <Image className="sm:w-full  " height={219} width={305} src="/images/circle.svg" alt="" />
                <Image className="absolute bottom-0 left-0 sm:left-8 sm:w-[38%] xl:w-[40%]" height={162} width={135} src="/images/lawyer.svg" alt="" />
                <Image className="absolute bottom-0 right-0 sm:w-[70%] xl:w-[75%] " height={253} width={250} src="/images/kids.svg" alt="" />
                <Image className=" hidden lg:block absolute xl:top-[-130px] right-0 xl:w-[25%] lg:w-[20%] lg:top-[-70px] " height={104} width={156} src="/images/scroll.svg" alt="" />
                <Image className="hidden xl:block absolute bottom-5 left-[-170px]  " height={113} width={115} src="/images/bag.svg" alt="" />

            </div>
        </div>
    );
};

export default HomePage;
