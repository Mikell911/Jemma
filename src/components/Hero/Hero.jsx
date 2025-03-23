import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider1 from "../../assets/Slider_1.jpg";
import Slider2 from "../../assets/Slider_3.jpg";
import { Link } from "react-router-dom";

const slides = [
    { id: 1, image: Slider1, title: "ВИТОНЧЕНІ ПРИКРАСИ", text: "Обирайте ідеальні ювелірні вироби для особливих моментів і кожного дня." },
    { id: 2, image: Slider2, title: "ЕЛЕГАНТНІСТЬ, ЩО НАДИХАЄ", text: "Ювелірні вироби, що підкреслюють вашу унікальність." }
];

const HeroSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setProgress(0);
        const progressInterval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 2 : 100));
        }, 100);
        return () => clearInterval(progressInterval);
    }, [activeIndex]);

    const handlePaginationClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <section className="relative w-full h-screen overflow-hidden">
            {slides.map((slide, index) => (
                <motion.div
                    key={slide.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === activeIndex ? 1 : 0 }}
                    transition={{ duration: 1.2 }}
                    className={`absolute inset-0 transition-opacity ease-linear duration-1000 cursor-pointer ${
                        index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                    style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                >
                    <Link to="/" className="container flex flex-col items-start pt-[184px] pl-[90px] text-Main">
                        <h1 className="font-serif text-[54px] font-normal max-w-[473px] uppercase">{slide.title}</h1>
                        <p className="mt-5 font-medium text-xl max-w-[379px]">{slide.text}</p>
                        <button className="mt-[85px] px-[50px] py-2.5 text-xl font-medium border-transparent border bg-Brown hover:bg-BrownDark hover:border-Main">
                            Купити
                        </button>
                    </Link>
                </motion.div>
            ))}

            <div className="absolute z-10 bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <motion.div
                        key={index}
                        className="relative w-20 h-1 cursor-pointer"
                        onClick={() => handlePaginationClick(index)}
                        whileHover={{ scale: 1.1 }}
                    >
                        <div
                            className={`absolute top-0 left-0 w-full h-full ${
                                index === activeIndex ? "bg-Main" : "bg-Grey"
                            }`}
                        ></div>

                        <motion.div
                            className="absolute top-0 left-0 w-full ease-in h-full bg-Brown"
                            style={{ width: `${progress}%` }}
                            initial={{ width: 0 }}
                            animate={{ width: `${index === activeIndex ? progress : 0}%` }}
                            transition={{ duration: 0.1 }}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default HeroSlider;
