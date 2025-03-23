import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import Marquee from "react-fast-marquee";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [favoritesCount, setFavoritesCount] = useState(0);
    const [cartCount, setCartCount] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        setFavoritesCount(favorites.length);
        setCartCount(cart.length);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <header className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ease-in ${scrolled ? 'bg-BrownDark' : ''}`}>
            <Marquee className={'bg-Main text-BrownDark'}>
                <div className={`flex justify-around w-screen`}>
                    <p>Безкоштовна доставка кур’єром Нової Пошти!</p>
                    <p className="max-lg:hidden">Безкоштовна доставка кур’єром Нової Пошти!</p>
                    <p className="max-xl:hidden">Безкоштовна доставка кур’єром Нової Пошти!</p>
                </div>
            </Marquee>
            <div className={`container flex justify-between items-center py-5 max-lg:py-3`}>
                {/*Logo*/}
                <Logo/>

                {/*navbar*/}
                <nav>
                    <ul className={'flex gap-10'}>
                        <li className={'text-sm font-normal text-Main transition ease-in hover:text-Accent'}>
                            <Link to={'/catalog'}>
                                Каталог
                            </Link>
                        </li>

                        <li className={'text-sm font-normal text-Main transition ease-in hover:text-Accent'}>
                            <Link to={'/news'}>
                                Новинки
                            </Link>
                        </li>
                        <li className={'text-sm font-normal text-Main transition ease-in hover:text-Accent'}>
                            <Link to={'/about-us'}>
                                Про нас
                            </Link>
                        </li>
                        <li className={'text-sm font-normal text-Main transition ease-in hover:text-Accent'}>
                            <Link to={'/contacts'}>
                                Контакти
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* utility-nav */}
                <div>
                    <ul className={'flex gap-8'}>
                        <li>
                            <button>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.0887 14.9725L18.9284 19.8134C19.0509 19.9347 19.2109 19.9959 19.3709 19.9959C19.5309 19.9959 19.6909 19.9347 19.8134 19.8134C20.0572 19.5684 20.0572 19.1734 19.8134 18.9284L15.3577 14.4738C18.3336 11.0405 18.1909 5.82046 14.9297 2.55844C11.5181 -0.852813 5.96694 -0.852813 2.5578 2.55844C-0.852599 5.96969 -0.852599 11.5222 2.5578 14.9334C4.21113 16.5859 6.40808 17.4959 8.74375 17.4959C9.08866 17.4959 9.36859 17.2159 9.36859 16.8709C9.36859 16.5259 9.08866 16.2459 8.74375 16.2459C6.7405 16.2459 4.85847 15.4659 3.44133 14.0497C0.518308 11.1247 0.518308 6.36719 3.44133 3.44219C6.3631 0.517188 11.1194 0.518438 14.0462 3.44219C16.9692 6.36719 16.9692 11.1247 14.0462 14.0497C13.8025 14.2934 13.8025 14.6897 14.0462 14.9334C14.0599 14.9472 14.0741 14.9602 14.0887 14.9725Z" fill="#F0ECE9"/>
                                </svg>
                            </button>
                        </li>

                        <li>
                            <button>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10 11.25C11.3261 11.25 12.5979 10.7232 13.5355 9.78553C14.4732 8.84785 15 7.57608 15 6.25C15 4.92392 14.4732 3.65215 13.5355 2.71447C12.5979 1.77678 11.3261 1.25 10 1.25C8.67392 1.25 7.40215 1.77678 6.46447 2.71447C5.52678 3.65215 5 4.92392 5 6.25C5 7.57608 5.52678 8.84785 6.46447 9.78553C7.40215 10.7232 8.67392 11.25 10 11.25ZM10 10C10.9946 10 11.9484 9.60491 12.6517 8.90165C13.3549 8.19839 13.75 7.24456 13.75 6.25C13.75 5.25544 13.3549 4.30161 12.6517 3.59835C11.9484 2.89509 10.9946 2.5 10 2.5C9.00544 2.5 8.05161 2.89509 7.34835 3.59835C6.64509 4.30161 6.25 5.25544 6.25 6.25C6.25 7.24456 6.64509 8.19839 7.34835 8.90165C8.05161 9.60491 9.00544 10 10 10Z" fill="#F0ECE9"/>
                                    <path d="M18.75 17.8638C17.6859 16.5743 16.3494 15.5366 14.8365 14.8253C13.3235 14.114 11.6718 13.7468 10 13.75C8.3282 13.7468 6.67646 14.114 5.16353 14.8253C3.65059 15.5366 2.31405 16.5743 1.25 17.8638L2.14375 18.7512C3.08816 17.5765 4.28449 16.6291 5.64433 15.9789C7.00416 15.3287 8.49273 14.9925 10 14.995C11.5074 14.9921 12.9961 15.3281 14.3562 15.9781C15.7162 16.628 16.9128 17.5753 17.8575 18.75L18.75 17.8625V17.8638Z" fill="#F0ECE9"/>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button className={'relative'}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.25206 3.87294C7.42148 2.04235 4.45352 2.04235 2.62294 3.87294C0.792354 5.70352 0.792354 8.67148 2.62294 10.5021L9.56991 17.091L10 17.4989L17.3652 10.5136C19.2076 8.67148 19.2076 5.70352 17.3771 3.87294C15.5465 2.04235 12.5785 2.04235 10.7479 3.87294L10 4.62087L9.25206 3.87294ZM3.49497 9.60664C2.16439 8.27575 2.16439 6.09925 3.50682 4.75682C4.84925 3.41439 7.02575 3.41439 8.36818 4.75682L10 6.38864L11.6318 4.75682C12.9742 3.41439 15.1508 3.41439 16.4932 4.75682C17.8356 6.09925 17.8356 8.27575 16.4932 9.61818L10 15.7761L3.49497 9.60664Z" fill="#F0ECE9"/>
                                </svg>
                                {favoritesCount > 0 && (
                                    <span className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-red-500 text-white text-xs rounded-full px-1 py-0.5">
                                {favoritesCount}
                                </span>
                                )}
                            </button>
                        </li>
                        <li>
                            <button>
                                <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.1573 10.6138L20.7531 2.10319C20.6969 1.96281 20.5927 1.84694 20.459 1.77622C20.3254 1.7055 20.171 1.68452 20.0233 1.71702L13.1393 3.24681V0.638298C13.1393 0.469011 13.072 0.306657 12.9523 0.186953C12.8326 0.067249 12.6702 0 12.501 0C12.3317 0 12.1693 0.067249 12.0496 0.186953C11.9299 0.306657 11.8627 0.469011 11.8627 0.638298V3.53085L4.70308 5.1266C4.60165 5.14913 4.50726 5.19609 4.4281 5.26338C4.34893 5.33068 4.2874 5.41629 4.24883 5.51277L0.844573 14.0234C0.815255 14.0973 0.799749 14.1759 0.798828 14.2553C0.798828 16.5809 3.27862 17.4468 4.84138 17.4468C6.40415 17.4468 8.88393 16.5809 8.88393 14.2553C8.88367 14.1741 8.86815 14.0936 8.83819 14.0181L5.71266 6.20532L11.8627 4.8383V18.7234H9.94776C9.77848 18.7234 9.61612 18.7907 9.49642 18.9104C9.37672 19.0301 9.30947 19.1924 9.30947 19.3617C9.30947 19.531 9.37672 19.6933 9.49642 19.813C9.61612 19.9328 9.77848 20 9.94776 20H15.0541C15.2234 20 15.3858 19.9328 15.5055 19.813C15.6252 19.6933 15.6924 19.531 15.6924 19.3617C15.6924 19.1924 15.6252 19.0301 15.5055 18.9104C15.3858 18.7907 15.2234 18.7234 15.0541 18.7234H13.1393V4.55426L19.119 3.22553L16.1637 10.6138C16.1338 10.6893 16.1182 10.7698 16.118 10.8511C16.118 13.1766 18.5978 14.0426 20.1605 14.0426C21.7233 14.0426 24.2031 13.1766 24.2031 10.8511C24.2028 10.7698 24.1873 10.6893 24.1573 10.6138ZM4.84138 16.1702C4.1909 16.1651 3.5519 15.9984 2.98181 15.6851C2.41053 15.3521 2.11479 14.9213 2.07862 14.3692L4.84457 7.46383L7.61053 14.3692C7.50734 15.8351 5.54138 16.1702 4.84138 16.1702ZM20.1605 12.766C19.5101 12.7608 18.871 12.5941 18.301 12.2809C17.7297 11.9479 17.4339 11.517 17.3978 10.9649L20.1637 4.05958L22.9297 10.9649C22.8265 12.4309 20.8605 12.766 20.1605 12.766Z" fill="#F0ECE9"/>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button className={'relative'}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 1.66667L2.5 5V16.6667C2.5 17.1087 2.67559 17.5326 2.98816 17.8452C3.30072 18.1577 3.72464 18.3333 4.16667 18.3333H15.8333C16.2754 18.3333 16.6993 18.1577 17.0118 17.8452C17.3244 17.5326 17.5 17.1087 17.5 16.6667V5L15 1.66667H5Z" stroke="#F0ECE9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M2.5 5H17.5" stroke="#F0ECE9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M13.3327 8.33374C13.3327 9.2178 12.9815 10.0656 12.3564 10.6908C11.7313 11.3159 10.8834 11.6671 9.99935 11.6671C9.11529 11.6671 8.26745 11.3159 7.64233 10.6908C7.0172 10.0656 6.66602 9.2178 6.66602 8.33374" stroke="#F0ECE9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                {cartCount > 0 && (
                                    <span className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-red-500 text-white text-xs rounded-full px-1 py-0.5">
                                {cartCount}
                              </span>
                                )}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;