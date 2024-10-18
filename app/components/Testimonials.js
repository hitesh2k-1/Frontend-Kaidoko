"use client"
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Simran Kalra',
            role: 'Software Engineer',
            image: '/images/simran.svg',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 2,
            name: 'Suhani Jain',
            role: 'Student',
            image: '/images/suhani.svg',
            quote: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
        },
        {
            id: 3,
            name: 'Simran Kalra',
            role: 'Software Engineer',
            image: '/images/simran.svg',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const scrollRef = useRef(null);

    // Handle the scroll event to detect which slide is in view
    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const scrollWidth = scrollRef.current.clientWidth;
            const currentSlideIndex = Math.round(scrollLeft / scrollWidth);
            setCurrentSlide(currentSlideIndex);
        }
    };

    const handleNextSlide = () => {
        if (scrollRef.current) {
            const nextSlide = (currentSlide + 1) % testimonials.length;
            scrollRef.current.scrollTo({
                left: scrollRef.current.clientWidth * nextSlide,
                behavior: 'smooth',
            });
            setCurrentSlide(nextSlide);
        }
    };

    const handlePrevSlide = () => {
        if (scrollRef.current) {
            const prevSlide = currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1;
            scrollRef.current.scrollTo({
                left: scrollRef.current.clientWidth * prevSlide,
                behavior: 'smooth',
            });
            setCurrentSlide(prevSlide);
        }
    };

    useEffect(() => {
        const scrollableDiv = scrollRef.current;
        if (scrollableDiv) {
            scrollableDiv.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (scrollableDiv) {
                scrollableDiv.removeEventListener('scroll', handleScroll);
            }
        };
    }, [currentSlide]);

    return (
        <div className="bg-[#ECF8DF] py-12 md:px-10 relative">
            <Image className='absolute top-[-40px] right-10' height={120} width={100} src="/images/pencil.svg" alt="" />
            <div className="max-w-7xl mx-auto   flex flex-col   md:flex-row gap-8 px-6">
                {/* Left Side */}
                <div className="lg:w-1/3 flex flex-col justify-evenly">
                <div>
                    <h2 className="text-3xl font-semibold mb-4">Testimonials</h2>
                    <div className="flex items-center mb-4">
                        <div className='flex items-center md:flex-col md:items-start gap-2'>
                            <span><Image height={10} width={100} src="/images/stars.svg" alt="Stars Rating" /></span>
                            <span className="font-semibold font-lg">  4.5 by 1,724 students</span>
                        </div>
                    </div>
                    </div>
                    <div className="gap-3 cursor-pointer hidden md:flex">
                            <Image
                                onClick={handlePrevSlide}
                                height={36}
                                width={36}
                                src="/images/leftarrow.svg"
                                alt="Previous"
                            />
                            <Image
                                onClick={handleNextSlide}
                                height={36}
                                width={36}
                                src="/images/rightarrow.svg"
                                alt="Next"
                            />
                        </div>
                </div>

                <div className='hidden md:block border-2 mr-10 border-gray-300 h-96' ></div>

                {/* Right Side: Scrollable Testimonials */}
                <div
                    ref={scrollRef}
                    className="md:w-2/3 overflow-x-scroll flex gap-8 scrollbar-hide snap-x snap-mandatory">
                    {/* Testimonial Cards */}
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="min-w-[90vw] sm:min-w-[300px] snap-center">
                            <div className="flex flex-col">
                                <Image height={40} width={40} src="/images/coma.svg" alt="" />
                                <p className="my-4 sm:text-2xl mb-4">“{testimonial.quote}”</p>
                                <div className="flex items-center">
                                    <Image height={48} width={48}
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 bg-green-500 rounded-full mr-4"
                                    />
                                    <div>
                                        <p className="text-black font-semibold">{testimonial.name}</p>
                                        <p className="text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Dots */}
            <div className="flex justify-center mt-6">
                {testimonials.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-2 mx-1 rounded-full ${index === currentSlide ? "bg-black" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
