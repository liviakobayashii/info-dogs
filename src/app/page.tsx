"use client";

import { useDogs } from "@/utils/queries";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Header from "@/components/header";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Carrossel from "@/components/carrossel";

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.substring(1);
};

export default function Page() {
  const dogs = useDogs();

  return (
    <>
      <Header />
      <main className=" flex flex-col gap-5 p-8 h-full bg-neutral-100">
        <h2 className="text-xl text-gray-950 font-bold py-5">
          Conheça todas as raças de cachorros em um só lugar!
        </h2>
        {/* <Link href={"/random"}>
        <button className=" text-white bg-amber-900 hover:bg-amber-950 hover:cursor-pointer duration-200 p-3 rounded-sm">
          Gerar imagem aleatória
        </button>
      </Link> */}

        <div className="flex flex-col bg-white p-6 rounded-sm">
          {dogs.isLoading && (
            <h2 className="text-2xl font-bold text-gray-950">Carregando...</h2>
          )}
          <ul className=" grid grid-cols-4 gap-3">
            {dogs.data &&
              Object.keys(dogs.data.message).map((item, i) => (
                <Dialog key={i}>
                  <DialogTrigger className="flex items-center gap-2">
                    <li className="flex gap-2 text-gray-900 p-4 bg-neutral-100  w-full hover:bg-neutral-200 hover:cursor-pointer duration-200 rounded-sm">
                      <Icon icon="ph:dog-bold" className="text-amber-900" />
                      {capitalizeFirstLetter(item)}
                    </li>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader className="flex justify-center items-center">
                      <DialogTitle className="py-4">
                        Fotos da raça {item}
                      </DialogTitle>
                      <DialogDescription>
                        <Carrossel breed={item} />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ))}
          </ul>
        </div>
      </main>
    </>
  );
}
