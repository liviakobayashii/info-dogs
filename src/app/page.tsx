"use client";

import { useDogs } from "@/utils/queries";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Page() {
  const dogs = useDogs();

  return (
    <main className=" flex flex-col gap-5 p-8 h-full bg-neutral-100">
      <h1 className="text-3xl text-gray-950 font-bold">Raças de cachorros</h1>
      <Link href={"/random"}>
        <button className=" text-white bg-amber-900 hover:bg-amber-950 hover:cursor-pointer duration-200 p-3 rounded-sm">
          Gerar imagem aleatória
        </button>
      </Link>

      <div className="flex flex-col bg-white p-6 rounded-sm">
        {dogs.isLoading && (
          <h2 className="text-2xl font-bold text-gray-950">Carregando...</h2>
        )}
        <ul className=" grid grid-cols-4 gap-3">
          {dogs.data &&
            Object.keys(dogs.data.message).map((item, i) => (
              <Link key={i} href={`/dogs/${item}`}>
                <li className="flex gap-2 text-gray-900 p-4 bg-neutral-100 hover:bg-neutral-200 hover:cursor-pointer duration-200 rounded-sm">
                  <Icon
                    icon="ph:dog-bold"
                    className="text-amber-900 self-center"
                  />
                  {item}
                </li>
                {/* <button className="p-3 rounded-md bg-gray-700 texte-white hover:cursor-pointer hover:bg-gray-800 duration-200">
                    {item}
                  </button> */}
              </Link>
            ))}
        </ul>
      </div>
    </main>
  );
}
