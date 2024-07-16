import React from "react";

const Comfort = () => {
  const sectionImage =
    "https://firebasestorage.googleapis.com/v0/b/forest-estate.appspot.com/o/comfort.png?alt=media&token=c9932e7c-cca3-4deb-8649-c0462eb29c2c";
  return (
    <section className="py-3">
      <div className="rest-container">
        <div className="flex items-center xs:max-lg:flex-col">
          <div className="hidden flex-col 4xl:max-w-[50%] 3xl:max-4xl:max-w-[675px] lg:flex xl:max-3xl:max-w-[640px] max-w-[450px]">
            <h1 className="text-title xl:max-3xl:text-[35px] lg:max-xl:text-[26px] text-[48px] leading-0">
              Мы стремимся создать для вас
              <span className="font-semibold pl-2">
                комфортные условия проживания
              </span>
            </h1>
            <div className="mt-6 lg:max-xl:text-lg lg:max-xl:mt-3 text-[rgb(116,116,116)] text-2xl">
              <h5>
                Загородный пансионат предлагает комфортное пространство для
                пожилых людей и инвалидов для долговременного проживания.
              </h5>
              <h5 className="mt-10 lg:max-xl:mt-5">
                Мы помогаем людям с возрастными особенностями здоровья жить без
                стресса и боли, сохранять душевное равновесие и теплые отношения
                с близкими
              </h5>
            </div>
          </div>
          <div className="lg:hidden xs:max-lg:order-1">
            <h1 className="text-title mg:max-lg:text-[30px] text-[48px] leading-0 xs:max-sm:text-[24px] sm:max-md:text-[26px] xs:max-lg:my-10 md:max-mg:text-[28px]">
              Мы стремимся создать для вас
              <span className="font-semibold pl-1">
                комфортные условия проживания
              </span>
            </h1>
          </div>
          <div className="lg:hidden xs:max-lg:order-3 md:max-mg:text-[22px] xs:max-sm:mt-3 sm:max-md:text-xl xs:max-sm:text-lg mt-6 text-[rgb(116,116,116)] text-2xl">
            <h5 className="">
              Загородный пансионат предлагает комфортное пространство для
              пожилых людей и инвалидов для долговременного проживания.
            </h5>
            <h5 className="mt-10 xs:max-sm:mt-5">
              Мы помогаем людям с возрастными особенностями здоровья жить без
              стресса и боли, сохранять душевное равновесие и теплые отношения с
              близкими
            </h5>
          </div>
          <div className="xs:max-lg:order-2 lg:ml-auto">
            <img
              className= "3xl:max-4xl:max-w-[675px] xl:max-3xl:max-w-[640px] lg:max-xl:max-w-[600px] w-full h-auto sm:max-lg:max-w-[600px] sm:max-xl:mx-auto"
              src={sectionImage}
              alt="granny blowing a flower"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comfort;
