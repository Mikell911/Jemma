import {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({product, maxWidth, maxHeight}) => {
    const [hovered, setHovered] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isInCart, setIsInCart] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setIsFavorite(favorites.some(fav => fav.id === product.id));
    }, [product.id]);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setIsInCart(cartItems.some(item => item.id === product.id));
    }, [product.id]);


    const addToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        if (!cartItems.some(item => item.id === product.id)) {
            const updatedCart = [...cartItems, product];
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            setIsInCart(true);
        }
    };

    const handleToggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        let newFavorites;

        if (isFavorite) {
            newFavorites = favorites.filter(fav => fav.id !== product.id);
        } else {
            newFavorites = [...favorites, product];
        }

        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        setIsFavorite(!isFavorite);
    };

    return (
        <div
            className={`w-full overflow-hidden cursor-pointer h-fit`}
            style={{ maxWidth}}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}

        >

            <div className={'relative overflow-hidden'}>
                <Link to={`/products/${product.id}`}>
                    <img
                        src={product?.image}
                        alt={product?.name}
                        style={{ maxWidth, maxHeight }}
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                </Link>

                <div className='absolute top-5 right-5 -translate-1/2 flex gap-3 transition-opacity duration-300'>
                    <button
                        className={'relative'}
                        onClick={handleToggleFavorite}
                    >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="16" fill="#FBFBFB" fillOpacity={isFavorite ? "0.7" : "0.3"} />
                        </svg>

                        <motion.div
                            key={isFavorite ? "filled" : "outlined"}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        >
                        {isFavorite ? (
                            <svg width="22" height="18" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <path d="M8.25206 1.87294C6.42148 0.0423543 3.45352 0.0423543 1.62294 1.87294C-0.207646 3.70352 -0.207646 6.67148 1.62294 8.50206L8.56991 15.091L9 15.4989L16.3652 8.51361C18.2076 6.67148 18.2076 3.70352 16.3771 1.87294C14.5465 0.0423543 11.5785 0.0423543 9.74794 1.87294L9 2.62087L8.25206 1.87294Z" fill="#1D110A"/>
                            </svg>
                        ) : (
                            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <path d="M10.1025 1.64752C7.90578 -0.549175 4.34422 -0.549175 2.14752 1.64752C-0.0491747 3.84422 -0.0491747 7.40578 2.14752 9.60248L10.4839 17.5092L11 17.9987L19.8383 9.61633C22.0492 7.40578 22.0492 3.84422 19.8525 1.64752C17.6558 -0.549175 14.0942 -0.549175 11.8975 1.64752L11 2.54505L10.1025 1.64752ZM3.19396 8.52797C1.59727 6.9309 1.59727 4.3191 3.20818 2.70818C4.8191 1.09727 7.4309 1.09727 9.04181 2.70818L11 4.66637L12.9582 2.70818C14.5691 1.09727 17.1809 1.09727 18.7918 2.70818C20.4027 4.3191 20.4027 6.9309 18.7918 8.54182L11 15.9313L3.19396 8.52797Z" fill="#1D110A"/>
                            </svg>
                        )}
                        </motion.div>
                    </button>


                    <button>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <foreignObject x="-16" y="-16" width="32" height="32"><div xmlns="http://www.w3.org/1999/xhtml"></div>
                            </foreignObject><circle data-figma-bg-blur-radius="16" cx="16" cy="16" r="16" fill="#FBFBFB" fillOpacity={isInCart ? "0.7" : "0.3"}/>
                            <path d="M10 6L7 10V24C7 24.5304 7.21071 25.0391 7.58579 25.4142C7.96086 25.7893 8.46957 26 9 26H23C23.5304 26 24.0391 25.7893 24.4142 25.4142C24.7893 25.0391 25 24.5304 25 24V10L22 6H10Z" stroke="#1D110A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7 10H25" stroke="#1D110A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M20 14.0005C20 15.0614 19.5786 16.0788 18.8284 16.8289C18.0783 17.5791 17.0609 18.0005 16 18.0005C14.9391 18.0005 13.9217 17.5791 13.1716 16.8289C12.4214 16.0788 12 15.0614 12 14.0005" stroke="#1D110A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <defs>
                            <clipPath id="bgblur_0_460_875_clip_path" transform="translate(16 16)"><circle cx="16" cy="16" r="16"/>
                            </clipPath></defs>
                        </svg>
                    </button>
                </div>

                <button
                    onClick={addToCart}
                    className={`absolute bottom-2.5 left-1/2 transform -translate-x-1/2 bg-Brown px-6 py-2 transition-all duration-300 ease-in-out ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                    Купити
                </button>
            </div>

            <div className="relative flex justify-between items-start pt-3 text-xl font-medium text-BrownDark max-lg:text-sm">
                <p>{product?.category}
                    <span className={hovered ? "" : "text-Grey  max-lg:block"}>“{product?.name}”</span>
                </p>
                <div className={'flex flex-col items-center justify-center'}>
                    {product.discount > 0 ? (
                        <p className="text-[18px] leading-[18px] text-Grey line-through  max-lg:text-[14px]">{product.price} грн</p>
                    ) : (
                        <p>{product.price} грн</p>
                    )}
                    {product.discount > 0 && (
                        <p className="text-[20px] leading-[26px] text-BrownDark  max-lg:text-[16px]">{product.price - product.discount} грн</p>
                    )}
                </div>
            </div>

        </div>
    );
};

export default ProductCard;
