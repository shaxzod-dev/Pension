import React from "react";
import { Icons } from "~/assets/icons";
export interface OffersI {
  id: number;
  title: string;
  sub: string;
}

const Offers = () => {
  const OffersData: OffersI[] = [
    {
      id: 0,
      title: "Медицинское  обслуживание",
      sub: "Квалифицированная команда врачей: невролог, реабилитолог, терапевт, психолог и психиатр",
    },
    {
      id: 1,
      title: "Справедливые  цены",
      sub: "Честные и прозрачные цены без обмана, лучшее соотношение цены и качества",
    },
    {
      id: 2,
      title: "Забота и внимание  к каждому",
      sub: "Наша резиденция для тех,кто действительно любит своих родных и близких",
    },
    {
      id: 3,
      title: "Уникальное  расположение",
      sub: "Между Новорижским и Рублево-Успенским шоссе, что обеспечивает комфортную транспортную доступность",
    },
    {
      id: 4,
      title: "Новый и современный пансионат ",
      sub: "Только открывшаяся резиденция,с авторским дизайном и безбарьерной средой",
    },
    {
      id: 5,
      title: "Окружение  района",
      sub: "Пансионат окружен лесом, располагается на территории коттеджного поселка бизнес-класса",
    },
  ];
  return (
    <section className="py-3">
      <div className="rest-container">
        <h1 className="4xl:max-5xl:text-[40px] 3xl:max-4xl:text-[38px] xl:max-3xl:text-[36px] lg:max-xl:text-[34px] mg:max-lg:text-[32px] md:max-mg:text-[30px] sd:max-md:text-[28px] sm:max-sd:text-[26px] xs:max-sm:text-2xl xs:max-sd:text-start xs:max-sm:flex-col xs:max-sm:flex text-title text-[48px] text-center">
          Мы предлагаем
          <span className="font-semibold pl-2 xs:max-sm:pl-0">
            уютные комнаты с удобной мебелью и всем необходимым для комфортного
            проживания
          </span>
        </h1>
        <div className="flex items-center gap-10 xs:max-lg:flex-col">
          <div className="fv:max-lg:mx-auto w-full xl:max-3xl:max-w-[640px] fv:max-lg:max-w-[500px] lg:max-w-[578px] relative grid grid-cols-2 grid-rows-1 gap-x-6 mt-6">
            <div className="mt-12 flex flex-col gap-y-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/forest-estate.appspot.com/o/offers-1.png?alt=media&token=44eb2255-605a-4b76-893c-74542a681a2d"
                alt=""
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/forest-estate.appspot.com/o/offers-3.png?alt=media&token=c0e55d94-b705-48ac-84e2-3ea7a870a6ff"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-y-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/forest-estate.appspot.com/o/offers-2.png?alt=media&token=0d5e9fa2-6448-4a6f-a6cd-df10abaab46a"
                alt=""
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/forest-estate.appspot.com/o/offers-4.png?alt=media&token=7093070a-ca67-4ba1-813a-69210b13fce7"
                alt=""
              />
            </div>
            <div className="6xl:left-[33%] xl:max-5xl:left-[30%] lg:max-xl:top-[40%] lg:max-xl:left-[30%] sm:max-lg:left-[30%] vf:max-sm:left-[30%] absolute fv:max-vf:top-[35%] fv:max-vf:left-[30%] top-[35%] left-[35%] ff:max-fv:top-[30%]  ff:max-fv:left-[30%] fh:max-ff:top-[30%] fh:max-ff:left-[30%]">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/forest-estate.appspot.com/o/offers-5.png?alt=media&token=7d19310f-a5de-4952-b631-3cc57cae879e"
                alt=""
                className="6xl:w-[200px] 4xl:max-6xl:w-[180px] lg:max-4xl:w-[150px] fv:max-lg:w-[180px] w-[120px] fh:max-ff:w-[150px] ff:max-fv:w-[180px]"
              />
            </div>
          </div>

          <div className="lg:max-4xl:mt-10 xs:max-lg:grid-cols-1 grid grid-cols-2 grid-rows-3 3xl:max-4xl:gap-0 lg:max-4xl:gap-0 gap-y-[50px] gap-x-[30px] xs:max-sm:gap-6">
            {OffersData.map((el) => (
              <>
                <div
                  key={el.id}
                  className="3xl:max-4xl:mt-3 flex items-start gap-8 xs:max-sm:gap-4 lg:max-xl:gap-4"
                >
                  <div className="xl:w-[70px] lg:max-xl:w-[35px] md:w-[60px] sm:max-md:w-[35px] vf:max-sm:w-[40px] xs:max-sm:w-5 fh:max-fv:w-[30px]">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/forest-estate.appspot.com/o/%D0%93%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0.png?alt=media&token=b9f359ab-dae8-41e2-97ba-67b5281f3b2a"
                      alt=""
                      className="md:max-lg:hidden xl:hidden w-full h-auto"
                    />
                    <Icons.BirdIcon className="md:max-lg:flex hidden xl:flex w-full h-auto" />
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <h3 className="xl:max-3xl:text-xl lg:max-xl:text-lg xs:max-sm:text-base xs:max-sm:leading-5 xs:max-sm:font-medium text-[24px] leading-[31px] font-semibold">
                      {el.title}
                    </h3>
                    <span className="xl:max-3xl:text-base lg:max-xl:text-sm xs:max-sm:text-[13px] xs:max-sm:leading-4 xs:max-sm:mt-[6px] mt-2 leading-5 text-base font-normal">
                      {el.sub}
                    </span>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
