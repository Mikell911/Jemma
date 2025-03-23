import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
      <footer className={'w-full bg-BrownDark text-Main py-[100px]  max-lg:py-[50px]'}>
          <div className={'container mx-auto flex justify-between  max-lg:flex-col  max-lg:items-center'}>
              <div className={'flex items-center'}>
                  <Logo width={181} height={63}/>
              </div>
              <div className={'flex w-full max-w-[966px] gap-6 justify-between text-base max-lg:gap-2'}>
                  <ul className="w-full max-w-[306px] flex flex-col gap-4  max-lg:gap-2 max-lg:items-center">
                      <li>
                          <Link to={"/"} className={"transition ease-in hover:text-Accent"}>
                              Каблучки
                          </Link>
                      </li>
                      <li>
                          <Link to={"/"} className={"transition ease-in hover:text-Accent"}>
                              Сережки
                          </Link>
                      </li>
                      <li>
                          <Link to={"/"} className={"transition ease-in hover:text-Accent"}>
                              Ланцюжки
                          </Link>
                      </li>
                      <li>
                          <Link to={"/"} className={"transition ease-in hover:text-Accent"}>
                              Браслети
                          </Link>
                      </li>
                      <li>
                          <Link to={"/"} className={"transition ease-in hover:text-Accent"}>
                              Підвіски
                          </Link>
                      </li>
                  </ul>

                  <ul className="w-full max-w-[306px] flex flex-col gap-4 max-lg:items-center max-lg:gap-2">
                      <li>
                          <Link to={"/"} className={"transition ease-in hover:text-Accent"}>
                              Про нас
                          </Link>
                      </li>
                      <li>
                          <Link to={"/"} className={"transition ease-in hover:text-Accent"}>
                              Контакти
                          </Link>
                      </li>
                      <li>
                          <Link to={"/"} className={"transition ease-in hover:text-Accent"}>
                              Подарунковий сертифікат
                          </Link>
                      </li>
                      <li>
                          <Link to={"/"} className={"transition ease-in hover:text-Accent"}>
                              Публічна оферта
                          </Link>
                      </li>
                      <li>
                          <Link to={"/"} className={"transition ease-in hover:text-Accent"}>
                              Політика конфіденційності
                          </Link>
                      </li>
                  </ul>

                  <ul className="w-full max-w-[306px] flex flex-col gap-4 max-lg:items-center max-lg:gap-2">
                      <li>
                          <Link to={"/"} className={"transition ease-in hover:text-Accent"}>
                              Facebook
                          </Link>
                      </li>
                      <li>
                          <Link to={"/"} className={"transition ease-in hover:text-Accent"}>
                              Instagram
                          </Link>
                      </li>
                      <li>
                          <Link to={"/"} className={"transition ease-in hover:text-Accent"}>
                              Threads
                          </Link>
                      </li>
                      <li>
                          <Link to={"/"} className={"transition ease-in hover:text-Accent"}>
                              Telegram
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>
      </footer>
  )
}

export default Footer;