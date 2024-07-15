"use client";
import React, { useState } from "react";
import { Icons } from "~/assets/icons";
import { Sheet, SheetContent, SheetHeader } from "~/components/ui/sheet";
import CallOrder from "./modals/call-order";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);

  const handleChange = () => {
    setOpen(!open);
  };

  const handleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  const handleClose = () => {
    setAlert(false);
  };

  return (
    <header
      className={
        burgerOpen == false
          ? `xs:max-sm:py-2.5 py-5`
          : "xs:max-sm:py-[25.5px] py-5 md:max-xl:py-[55.5px] sm:max-md:py-[35.5px]"
      }
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {burgerOpen == false && (
            <div className="xs:max-md:flex hidden">
              <Icons.SmallLogoIcon />
            </div>
          )}
          {burgerOpen == false && (
            <div className="md:flex hidden">
              <Icons.MainLogoIcon />
            </div>
          )}
          <nav className="xs:max-xl:hidden flex items-center xl:max-2xl:gap-x-6 gap-x-12">
            <a
              href="#!"
              className=" xl:max-2xl:text-base text-[22px] font-medium text-title leading-7"
            >
              О нас
            </a>
            <a
              href="#!"
              className="xl:max-2xl:text-base text-[22px] font-medium text-title leading-7"
            >
              Услуги
            </a>
            <a
              href="#!"
              className="xl:max-2xl:text-base text-[22px] font-medium text-title leading-7"
            >
              Специалисты
            </a>
            <a
              href="#!"
              className="xl:max-2xl:text-base text-[22px] font-medium text-title leading-7"
            >
              Контакты
            </a>
          </nav>
          <div className="flex items-center gap-x-6">
            <div className="xs:max-xl:hidden flex flex-col">
              <h3 className="xl:max-2xl:text-base text-title font-medium leading-5">
                Есть номер! Звоните
              </h3>
              <a
                href="tel:+74957977735"
                className="xl:max-2xl:text-xl text-title text-[25px] font-medium leading-8"
              >
                +7 495 797 77 35
              </a>
            </div>
            <CallOrder
              alert={alert}
              burgerOpen={burgerOpen}
              handleChange={handleChange}
              handleClose={handleClose}
              open={open}
              setAlert={setAlert}
              setOpen={setOpen}
            />
            {burgerOpen == false && (
              <button className="gap-2 xl:hidden" onClick={handleBurger}>
                <Icons.BurgerMenuIcon />
              </button>
            )}
            <Sheet open={burgerOpen}>
              <SheetContent
                side={"right"}
                className=" overflow-y-auto pb-[145px] min-h-screen bg-[rgba(252,252,252,0.87)] size-full "
              >
                <SheetHeader>
                  <div className="flex items-center justify-between">
                    <div className="xs:max-xl:flex hidden">
                      <Icons.SmallLogoIcon />
                    </div>
                    <div className="flex items-center gap-x-6">
                      <button
                        onClick={handleChange}
                        className="hidden xs:max-xl:flex"
                      >
                        <Icons.CallIcon />
                      </button>
                      <button onClick={handleBurger}>
                        <Icons.XIcons />
                      </button>
                    </div>
                  </div>
                </SheetHeader>
                <nav className="flex flex-col gap-y-8 mt-8">
                  <a
                    href="#!"
                    className="pb-7 border-[rgb(214,214,214)] border-b xl:max-2xl:text-base text-[22px] font-medium text-title leading-7"
                  >
                    О нас
                  </a>
                  <a
                    href="#!"
                    className="pb-7 border-[rgb(214,214,214)] border-b xl:max-2xl:text-base text-[22px] font-medium text-title leading-7"
                  >
                    Услуги
                  </a>
                  <a
                    href="#!"
                    className="pb-7 border-[rgb(214,214,214)] border-b xl:max-2xl:text-base text-[22px] font-medium text-title leading-7"
                  >
                    Специалисты
                  </a>
                  <a
                    href="#!"
                    className="pb-7 border-[rgb(214,214,214)] border-b xl:max-2xl:text-base text-[22px] font-medium text-title leading-7"
                  >
                    Контакты
                  </a>
                </nav>
                <div className="pb-7 border-[rgb(214,214,214)] border-b">
                  <h3 className="mt-8 xl:max-2xl:text-base text-[22px] font-medium text-title leading-7">
                    Телефон
                  </h3>
                  <a
                    href="tel:+74957977735"
                    className="gap-x-3 flex items-center gap-y-3 text-title text-[25px] font-medium leading-8"
                  >
                    <Icons.CallIcon />
                    +7 495 797 77 35
                  </a>
                  <div className="flex items-center mt-4 gap-x-5">
                    <Icons.BanerCircleIcon />{" "}
                    <span>Звоните, Пн-Пт с 9:00-18:00</span>
                  </div>
                </div>
                <div>
                  <h3 className="xl:max-2xl:text-base text-[22px] font-medium text-title leading-7">
                    Пишите онлайн
                  </h3>
                  <div className="flex items-center gap-x-2 mt-2">
                    <a href="https://web.whatsapp.com/" target="_blank">
                      <Icons.WhatsAppIcon />
                    </a>
                    <a href="https://web.telegram.org" target="_blank">
                      <Icons.TelegramIcon />
                    </a>
                    <a href="https://web.whatsapp.com/" target="_blank">
                      <Icons.NormalWhatsAppIcon />
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
