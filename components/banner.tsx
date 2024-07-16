import React from "react";
import { Icons } from "~/assets/icons";
import { Images } from "~/assets/images";

const Banner = () => {
  const bannerData = [
    {
      id: 0,
      bannerTitle: "Для тех, кто любит своих родных и близких",
    },
    {
      id: 1,
      bannerTitle: "Безопасная среда и интересный досуг",
    },
    {
      id: 2,
      bannerTitle: "Долгосрочные и краткосрочные программы пребывания",
    },
  ];
  return (
    <section className="xs:max-6xl:relative sm:max-lg:bg-right lg:max-xl:h-[450px] sm:max-lg:h-[550px] xs:max-sm:bg-xs-banner-img xs:max-sm:h-[529px] xs:rounded-[28px] xs:max-xl:bg-cover bg-banner-img bg-contain bg-no-repeat bg-center 3xl:max-4xl:h-[600px] 4xl:max-5xl:h-[650px] 5xl:max-6xl:h-[700px] 6xl:h-[751px] xl:max-3xl:h-[550px]">
      <div className="container">
        <div className="grid grid-cols-1 grid-rows-2 pt-20 pl-10">
          <div className="w-max 6xl:translate-x-[10%] 6xl:translate-y-[40%] text-white xs:max-6xl:absolute xs:max-xl:top-7 xs:max-xl:left-8">
            <h2 className="w-max 6xl:text-[42px] text-[32px] xs:max-sm:text-lg sm:max-md:text-2xl md:max-lg:text-[28px] lg:max-xl:text-[30px]">
              Подмосковная резиденция
            </h2>
            <h1 className="w-max 6xl:leading-[71px] 6xl:text-[81px] text-[42px] xs:max-sm:text-2xl sm:max-md:text-[30px] md:max-lg:text-[36px] lg:max-xl:text-[38px]">
              ЛЕСНАЯ УСАДЬБА
            </h1>
            <h3 className="xs:max-sm:max-w-[320px] max-w-[700px] 6xl:text-[42px] text-[32px] xs:max-sm:text-lg sm:max-md:text-2xl md:max-lg:text-[28px] lg:max-xl:text-[30px]">
              Пансионат для пожилых премиум-класса
            </h3>
          </div>
          <div className="w-max 6xl:translate-y-[70%] 6xl:translate-x-[5%] 6xl:gap-[100px] xs:max-6xl:absolute xl:left-[5%] 4xl:max-6xl:bottom-10 6xl:bottom-12 xs:max-4xl:bottom-7 left-4 lg:flex lg:items-center lg:gap-[30px]">
            {bannerData.map((el) => (
              <div
                key={el.id}
                className="mt-4 flex items-start gap-x-3 text-white"
              >
                <div>
                  <Icons.BanerCircleIcon className="" />
                </div>
                <p className="sm:max-sd:max-w-[450px] lg:max-xl:w-[290px] xl:max-w-[350px] xs:max-sm:max-w-[300px] xs:max-sm:text-base sm:max-md:text-xl md:max-lg:text-[21px] lg:text-[18px]">
                  {el.bannerTitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
