import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";
import {useState} from "react";

const Header = () => {

    return (
        <header className="container flex justify-between items-center">
            {/*Logo*/}
            <Logo/>

            {/*navbar*/}
            <nav>
                <ul>
                    <li>
                        <Link to={'/catalog'}>
                            Каталог
                        </Link>
                        <Link to={'/news'}>
                            Новинки
                        </Link>
                        <Link to={'/about-us'}>
                            Про нас
                        </Link>
                        <Link to={'/contacts'}>
                            Контакти
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* utility-nav */}
            <div>
                <p>
                    utility-nav
                </p>
            </div>
        </header>
    )
}

export default Header;