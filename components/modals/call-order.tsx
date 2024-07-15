import React, { useState } from "react";
import { Icons } from "~/assets/icons";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";
import { Spinner } from "../ui/spinner";
import { X } from "lucide-react";
import { Input } from "../ui/input";
type ModalPropType = {
  open: boolean;
  handleChange: () => void;
  setOpen: (arg: boolean) => void;
  burgerOpen: boolean;
  alert: boolean;
  handleClose: () => void;
  setAlert: (arg: boolean) => void;
};
const CallOrder = ({
  handleChange,
  open,
  setOpen,
  burgerOpen,
  alert,
  handleClose,
  setAlert,
}: ModalPropType) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [tel, setTel] = useState<string>("");
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
    const namePattern: RegExp = /^[\p{L}\s']+$/u;

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

  return (
    <>
      <Dialog open={open}>
        <button
          onClick={handleChange}
          className="xl:max-2xl:text-lg xl:max-2xl:py-4 xl:max-2xl:px-8 xs:max-xl:hidden flex py-6 px-12 text-[rgb(255,255,255)] text-xl font-medium leading-6  rounded-[40px] bg-primary shadow-custom"
        >
          Заказать звонок
        </button>
        {burgerOpen == false && (
          <button onClick={handleChange} className="hidden xs:max-xl:flex">
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
              {validateName(name) == false || validateNumber(tel) == false ? (
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
    </>
  );
};

export default CallOrder;
