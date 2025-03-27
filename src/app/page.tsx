"use client";

import { useDogs } from "@/utils/queries";
import { Icon } from "@iconify/react";
import Header from "@/components/header";
import Carrossel from "@/components/carrossel";
import DialogItem from "@/components/dialog";
import { SkeletonCard } from "@/components/skeleton";
import Loader from "@/components/loader";

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
        {dogs.isLoading && <SkeletonCard />}
        {!dogs.isLoading && (
          <div className="flex flex-col bg-white p-6 rounded-sm">
            <ul className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {dogs.data &&
                Object.keys(dogs.data.message).map((item, i) => (
                  <DialogItem
                    key={i}
                    title={`Fotos da raça ${item}`}
                    trigger={
                      <li className="flex gap-2 text-gray-900 p-4 bg-neutral-100  w-full hover:bg-neutral-200 hover:cursor-pointer duration-200 rounded-sm">
                        <Icon icon="famicons:paw" className="text-amber-900" />
                        {capitalizeFirstLetter(item)}
                      </li>
                    }
                    description={<Carrossel breed={item} />}
                  />
                ))}
            </ul>
          </div>
        )}
      </main>
    </>
  );
}
