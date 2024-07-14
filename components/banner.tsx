import React from "react";
import { Icons } from "~/assets/icons";
import { Images } from "~/assets/images";

const Banner = () => {
  const bannerData = [
    {
      id: 0,
      bannerTitle: "Для тех, кто любит своих родных и близких",
      width: "344",
    },
    {
      id: 1,
      bannerTitle: "Безопасная среда и интересный досуг",
      width: "252",
    },
    {
      id: 2,
      bannerTitle: "Долгосрочные и краткосрочные программы пребывания",
      width: "418",
    },
  ];
  return (
    <section className="xs:max-sm:h-[529px] sm:h-[450px] xs:max-xl:rounded-[28px] xs:max-sm:bg-xs-banner-img relative bg-banner-img w-full h-[751px] bg-no-repeat bg-cover xs:max-xl:bg-right 4xl:bg-contain bg-center ">
      <div className="container">
        <div className="4xl:translate-x-[100%] w-max xl:translate-x-[40%] text-white flex flex-col sd:max-xl:translate-x-5 xs:max-sd:translate-x-1 xl:translate-y-[20%] xs:max-xl:translate-y-[40%] translate-x-[10%] translate-y-[50%]">
          <h2 className="block w-max xl:text-[28px] text-4xl sd:max-mg:text-xl xs:max-xl:text-lg leading-[110%]">
            Подмосковная резиденция
          </h2>
          <h1 className="block w-max xl:text-[30px] text-[74px] leading-[89px] sd:max-mg:text-[35px] xs:max-xl:text-[30px] sd:max-mg:leading-[120%] xs:max-xl:leading-[110%]">
            ЛЕСНАЯ УСАДЬБА
          </h1>
          <h3 className="block w-max xl:text-[25px] text-[32px] leading-[39px] max-w-[450px] xl:w-full sd:max-mg:mt-4  xs:max-xl:mt-3 mt-6 sd:max-mg:text-xl xs:max-xl:text-lg xs:max-xl:leading-[110%]">
            Пансионат для пожилых премиум-класса
          </h3>
        </div>
        <div className="4xl:translate-x-[25%] 4xl:flex  4xl:translate-y-[150%] xs:max-xl:gap-y-[26px] xl:gap-[30px] xs:max-mg:grid-cols-1 xs:max-mg:grid-rows-3 grid grid-cols-3 grid-rows-1 sd:max-mg:gap-2 xs:max-4xl:absolute xl:left-[15%] sd:max-xl:left-12 xs:max-sd:left-7 bottom-5 left-[12%]">
          {bannerData.map((el) => (
            <div key={el.id} className="flex gap-x-7 xs:max-xl:gap-x-4">
              <div>
                <Icons.BanerCircleIcon className="w-full" />
              </div>
              <p className="4xl:w-[230px] xl:max-xl:w-[230px] xl:text-base sd:max-mg:text-base xs:max-xl:text-base text-[22px] max-w-[280px] w-full text-white">
                {el.bannerTitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
