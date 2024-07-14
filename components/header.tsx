"use client";
import React, { useState } from "react";
import { Icons } from "~/assets/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Spinner } from "./ui/spinner";
import { Icon, Terminal, X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Span } from "next/dist/trace";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const token: string = "7294055329:AAGMBt-z0wTt4wqBQVFpHtgLWKnnTUq-mE4";
  const chatId: number = 5015798580;
  async function OnSubmit(e: any) {
    setLoading(!loading);
    e.preventDefault();
    const message = `Email: ${name},Tel: ${tel}`;
    const chatMessage = `chat_id=${chatId}`;
    const res = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage?text=${message}&${chatMessage}`
    );
    if (res.status == 200) {
      setLoading(false);
      setName("");
      setTel("");
      setOpen(false);
      setAlert(true);
    }
  }
  const validateName = (name: string): boolean => {
    const namePattern: RegExp = /^[a-zA-Z\s']+$/;

    if (name.length !== 0 && namePattern.test(name) == false) {
      return false;
    }

    if (name.length > 50) {
      return false;
    }

    return true;
  };

  const validateNumber = (tel: string): boolean => {
    const phonePattern: RegExp = /^\+\d{7,}$/;
    return tel.length !== 0 ? phonePattern.test(tel) : true;
  };

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
            <Dialog open={open}>
              <button
                onClick={handleChange}
                className="xl:max-2xl:text-lg xl:max-2xl:py-4 xl:max-2xl:px-8 xs:max-xl:hidden flex py-6 px-12 text-[rgb(255,255,255)] text-xl font-medium leading-6  rounded-[40px] bg-primary shadow-custom"
              >
                Заказать звонок
              </button>
              {burgerOpen == false && (
                <button
                  onClick={handleChange}
                  className="hidden xs:max-xl:flex"
                >
                  <Icons.CallIcon />
                </button>
              )}
              <DialogContent className="sm:max-w-[570px]">
                <DialogHeader>
                  <DialogClose
                    onClick={handleChange}
                    className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                  >
                    <X className="h-7 w-7" />
                    <span className="sr-only">Close</span>
                  </DialogClose>
                  <DialogTitle className="xs:max-xl:text-2xl">
                    Заказать звонок
                  </DialogTitle>
                  <DialogDescription className="xs:max-xl:text-lg">
                    Заполните форму и мы вам перезвоним
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-6 px-12 xs:max-xl:px-7">
                  <form
                    onSubmit={(e) => OnSubmit(e)}
                    className="grid items-center gap-4"
                  >
                    <Input
                      id="nameInput"
                      type="text"
                      name="name"
                      value={name}
                      disabled={loading}
                      required
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Имя"
                      className="xs:max-xl:py-6 xs:max-xl:pl-6 py-7 pl-7 rounded-[34px] text-lg bg-[rgb(239,239,239)]"
                    />
                    {validateName(name) == false ? (
                      <span className="xs:max-xl:text-xs text-lg text-red-600">
                        Не правильный формат имени!
                      </span>
                    ) : (
                      ""
                    )}
                    <Input
                      type="tel"
                      id="telInput"
                      name="tel"
                      value={tel}
                      disabled={loading}
                      required
                      onChange={(e) => setTel(e.target.value)}
                      placeholder="Номер телефона"
                      className="xs:max-xl:py-6 xs:max-xl:pl-6  py-7 pl-7 rounded-[34px] text-lg bg-[rgb(239,239,239)]"
                    />
                    {tel.length !== 0 && validateNumber(tel) == false ? (
                      <span className="xs:max-xl:text-xs text-lg text-red-600">
                        Не правильный формат номера телефона
                      </span>
                    ) : (
                      ""
                    )}
                    {validateName(name) == false ||
                    validateNumber(tel) == false ? (
                      <button
                        disabled={true}
                        className="xs:max-xl:py-4 xs:max-xl:px-6 disabled:bg-[rgb(173,198,153)] py-6 px-7 text-[rgb(255,255,255)] text-lg rounded-[34px] bg-primary shadow-custom"
                      >
                        Заказать звонок
                      </button>
                    ) : (
                      <button
                        disabled={loading}
                        className="xs:max-xl:py-4 xs:max-xl:px-6 disabled:bg-[rgb(173,198,153)] py-6 px-7 text-[rgb(255,255,255)] text-lg rounded-[34px] bg-primary shadow-custom"
                      >
                        {loading ? <Spinner /> : "Заказать звонок"}
                      </button>
                    )}
                  </form>
                </div>
              </DialogContent>
            </Dialog>
            <AlertDialog open={alert}>
              <AlertDialogContent className="sm:max-w-[570px]">
                <AlertDialogHeader>
                  <AlertDialogTitle className="xs:max-xl:text-xl text-[25px]">
                    Имя и номер телефона отправлены!
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-base">
                    Ждите нашего звонка!
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <button
                    className="xs:max-xl:mt-5 mt-10 xs:max-xl:py-2 xs:max-xl:px-2 py-3 px-5 text-[rgb(255,255,255)] text-lg rounded-[34px] bg-primary shadow-custom"
                    onClick={handleClose}
                  >
                    Продолжить
                  </button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
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
                <SheetFooter></SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
