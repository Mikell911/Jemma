import HeroSlider from "../components/Hero/Hero";
import Heart from "../assets/collection/Heart.jpg";
import Glow from "../assets/collection/Glow.jpg"
import Spark from "../assets/collection/Spark.jpg"
import Moon from "../assets/collection/Moon.jpg"
import Ocean from "../assets/collection/Ocean.jpg"
import Banner from "../assets/Banner.jpg"
import AboutUs from "../assets/AboutUs.jpg"
import Certeficate from "../assets/Certificate.jpg"
import {Link} from "react-router-dom";
import Items from "../modules/items";
import SalesGrid from "../components/Sales/Sales";
import Feedback from "../components/Feedback/Feedback";
import FeedbackUsers from "../modules/Feedback/Feedback";

const HomePage = () => {
  return (
      <main>
          <HeroSlider />

          <section>
              <div className={'container pt-[100px] pb-[140px]'}>
                    <h2 className={'title-h2 text-BrownDark'}>
                        Наші неповторні колекції
                    </h2>

                  <div className="mt-[60px] grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Link to={'/'}
                            className="relative md:col-span-2 md:row-span-2  max-w-[650px] w-full max-h-[790px]
                            h-full group overflow-hidden max-xl:max-w-full">
                          <img
                              src={Heart}
                              alt="Heart"
                              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                          />
                          <p
                              className="absolute bottom-[20px] left-1/2 -translate-x-1/2 font-serif text-[80px] leading-[101px]
                              transition-all duration-500 ease-in-out group-hover:underline max-lg:text-[40px]"
                          >
                              HEART
                          </p>
                      </Link>

                      {[
                          { src: Glow, label: "GLOW" },
                          { src: Moon, label: "MOON" },
                          { src: Spark, label: "SPARK" },
                          { src: Ocean, label: "OCEAN" }
                      ].map((item, index) => (
                          <Link key={index} to={'/'} className="relative max-w-[315px] w-full max-h-[385px] h-full group overflow-hidden max-xl:max-w-full">
                              <img
                                  src={item.src}
                                  alt={item.label}
                                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                              />
                              <p
                                  className="absolute bottom-[20px] left-1/2 -translate-x-1/2 font-serif font-normal text-[54px] leading-[68px]
                                  transition-all duration-500 ease-in-out group-hover:underline  max-lg:text-[26px]"
                              >
                                  {item.label}
                              </p>
                          </Link>
                      ))}
                  </div>
              </div>
          </section>

          <section>
              <div className='h-screen pt-[120px] pb-[289px] flex flex-col justify-center items-center relative bg-cover bg-center max-w-image mx-auto  max-lg:pb-[145px] max-lg:pt-[60px]' style={{ backgroundImage: `url(${Banner})` }}>
                  <h2 className={'title-h2'}>
                      Знижка на перше замовлення <span className={'block'}>200 грн.</span>
                  </h2>

                  <button className="block mt-[40px] px-[50px] py-2.5 text-xl font-medium border-transparent border bg-Brown hover:bg-BrownDark hover:border-Main">
                      Купити
                  </button>
              </div>
          </section>

          <section>
              <div className={'container py-[140px] max-lg:pb-[70px]'}>
                  <SalesGrid products={Items}
                             isSale={false}
                             title="Колекція весна 2025" description={'Почни весну з блиску, який не тільки прикрашає, але і змінює настрій!'}
                  />
              </div>
          </section>

          <section>
              <div className={'container pb-[140px] max-lg:pb-[70px]'}>
                  <SalesGrid products={Items}
                             isSale={true}
                             title="Розпродаж минулої колекції" reverse={false} description={'Кращий момент для оновлення\n' +
                      'образу - знижки на розкішну колекцію!'}
                  />
              </div>
          </section>

          <section className='h-screen relative bg-cover bg-center max-w-image mx-auto' style={{ backgroundImage: `url(${Certeficate})` }}>
              <div className={'container py-20  max-lg:py-10'}>
                  <h2 className={'title-h2  max-lg:text-[36px]'}>
                      Подарункові сертифікати
                  </h2>
                  <button className="absolute bottom-[78px] left-1/2 -translate-x-1/2 px-[50px] py-2.5 text-xl font-medium border-transparent border bg-Brown hover:bg-BrownDark hover:border-Main">
                      Купити
                  </button>
              </div>
          </section>

          <section className='bg-cover bg-center max-w-image mx-auto' style={{ backgroundImage: `url(${AboutUs})` }}>
              <div className={'container pt-[120px] pb-[288px] flex flex-col justify-center items-center text-BrownDark'}>
                  <h2 className={'title-h2 text-BrownDark'}>
                      Про нас
                  </h2>

                  <div className={'flex flex-col gap-6 justify-center items-center max-w-[500px] mt-10 text-center text-[20px] leading-[26px] font-medium'}>
                      <p>
                          У нашому ювелірному магазині кожна прикраса — це поєднання бездоганної якості та унікального стилю.
                          Ми віримо, що коштовності мають не лише прикрашати, а й підкреслювати індивідуальність.
                      </p>

                      <p>
                      Ми ретельно відбираємо найкращі дорогоцінні метали та натуральні камені, щоб створювати прикраси,
                      що передають витонченість, довговічність і гармонію. Наші майстри ювелірного мистецтва працюють із
                      любов’ю до деталей, втілюючи у виробах унікальні рішення.
                      </p>
                  </div>
              </div>
          </section>

          <Feedback feedback={FeedbackUsers} />
      </main>
  )
}

export default HomePage;