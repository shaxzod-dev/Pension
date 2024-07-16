import React from "react";

const Comfort = () => {
  const sectionImage =
    "https://firebasestorage.googleapis.com/v0/b/forest-estate.appspot.com/o/comfort.png?alt=media&token=c9932e7c-cca3-4deb-8649-c0462eb29c2c";
  return (
    <section className="py-3">
      <div className="container">
        <div className="flex items-center gap-8">
          <div className="flex flex-col max-w-[605px]">
            <h1 className="w-full text-title text-[48px]">
              Мы стремимся создать для вас
              <span>комфортные условия проживания</span>
            </h1>
            <h5>
              Загородный пансионат предлагает комфортное пространство для
              пожилых людей и инвалидов для долговременного проживания.
            </h5>
            <h5>
              Мы помогаем людям с возрастными особенностями здоровья жить без
              стресса и боли, сохранять душевное равновесие и теплые отношения с
              близкими
            </h5>
          </div>
          <div className="">
            <img className="w-full" src={sectionImage} alt="granny blowing a flower" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comfort;
