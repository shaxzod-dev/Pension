"use client";
import React, { useState } from "react";
import { Icons } from "~/assets/icons";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Spinner } from "./ui/spinner";
import { Terminal, X } from "lucide-react";
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

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [tel, setTel] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const token: string = "7294055329:AAGMBt-z0wTt4wqBQVFpHtgLWKnnTUq-mE4";
  const chatId: number = 5015798580;
  async function OnSubmit(e: any) {
    setLoading(!loading);
    e.preventDefault();
    const message = `Email: ${email},Tel: ${tel}`;
    const chatMessage = `chat_id=${chatId}`;
    const res = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage?text=${message}&${chatMessage}`
    );
    if (res.status == 200) {
      setLoading(false);
      setEmail("");
      setTel("");
      setOpen(false);
      setAlert(true);
    }
  }
  const handleChange = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setAlert(false);
  };

  return (
    <header className="my-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <Icons.LogoIcon />
            <div className="flex flex-col ">
              <Icons.TitleIcon />
              <h5>Резиденция для пожилых</h5>
            </div>
          </div>
          <nav className="flex items-center gap-x-12">
            <a
              href="#!"
              className="text-[22px] font-medium text-title leading-7"
            >
              О нас
            </a>
            <a
              href="#!"
              className="text-[22px] font-medium text-title leading-7"
            >
              Услуги
            </a>
            <a
              href="#!"
              className="text-[22px] font-medium text-title leading-7"
            >
              Специалисты
            </a>
            <a
              href="#!"
              className="text-[22px] font-medium text-title leading-7"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center gap-x-6">
            <div className="flex flex-col">
              <h3 className="text-title font-medium leading-5">
                Есть номер! Звоните
              </h3>
              <a
                href="tel:+74957977735"
                className="text-title text-[25px] font-medium leading-8"
              >
                +7 495 797 77 35
              </a>
            </div>

            <Dialog open={open}>
              {/* <DialogTrigger> */}
              <button
                onClick={handleChange}
                className="py-6 px-12 text-[rgb(255,255,255)] text-xl font-medium leading-6  rounded-[40px] bg-primary shadow-custom"
              >
                Заказать звонок
              </button>
              {/* </DialogTrigger> */}

              <DialogContent className="sm:max-w-[570px]">
                <DialogHeader>
                  <DialogClose
                    onClick={handleChange}
                    className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                  >
                    <X className="h-7 w-7" />
                    <span className="sr-only">Close</span>
                  </DialogClose>
                  <DialogTitle>Заказать звонок</DialogTitle>
                  <DialogDescription>
                    Заполните форму и мы вам перезвоним
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-6 px-12">
                  <form
                    onSubmit={(e) => OnSubmit(e)}
                    className="grid  items-center gap-4"
                  >
                    <Input
                      id="nameInput"
                      type="text"
                      name="name"
                      value={email}
                      disabled={loading}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Имя"
                      className="py-7 pl-7 rounded-[34px] text-lg bg-[rgb(239,239,239)]"
                    />
                    <Input
                      type="tel"
                      id="telInput"
                      name="tel"
                      value={tel}
                      disabled={loading}
                      required
                      onChange={(e) => setTel(e.target.value)}
                      placeholder="Номер телефона"
                      className="py-7 pl-7 rounded-[34px] text-lg bg-[rgb(239,239,239)]"
                    />
                    {/* <Spinner /> */}
                    <button className="py-6 px-7 text-[rgb(255,255,255)] text-lg rounded-[34px] bg-primary shadow-custom">
                      {loading ? <Spinner /> : "Заказать звонок"}
                    </button>
                  </form>
                </div>
                {/* <DialogFooter className="flex items-center gap-2 px-20">
                  <input
                    type="checkbox"
                    checked
                    name="agree"
                    required
                    className="bg-primary w-10 h-10"
                  />
                  Вы соглашаетесь с условиями обработки персональных данных
                </DialogFooter> */}
              </DialogContent>
            </Dialog>
            <AlertDialog open={alert}>
              {/* <AlertDialogTrigger asChild>
                <Button variant="outline">Show Dialog</Button>
              </AlertDialogTrigger> */}
              <AlertDialogContent className="sm:max-w-[570px]">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-[25px]">
                    Имя и номер телефона отправлены!
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-lg">
                    Ждите нашего звонка!
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  {/* <AlertDialogAction> */}
                  <button
                    className="mt-10 py-3 px-5 text-[rgb(255,255,255)] text-lg rounded-[34px] bg-primary shadow-custom"
                    onClick={handleClose}
                  >
                    Продолжить
                  </button>
                  {/* </AlertDialogAction> */}
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
