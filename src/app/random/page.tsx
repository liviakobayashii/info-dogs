"use client";

import Button from "@/components/gerar-img";
import Header from "@/components/header";
import { RandomDogImage } from "@/types/dogImage";
import { invalidateQuery, req } from "@/utils/queries";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function RandomPage() {
  const { random } = useParams();

  const getRandomImage = async (): Promise<RandomDogImage> => {
    const result = await req.get(`/breeds/image/random`);
    return result.data;
  };

  const { data, isFetching } = useQuery({
    queryKey: ["randomImage"],
    queryFn: getRandomImage,
  });

  return (
    <>
      <Header />
      <div className="flex flex-col p-4 justify-center items-center bg-white">
        <h2 className="text-xl m-4"> Imagem aleatória de algum cachorro</h2>
        {isFetching && <h2 className="text-2xl font-bold">Carregando...</h2>}

        {!isFetching && data && (
          <div className="flex flex-col flex-wrap gap-8 p-3 justify-center items-center">
            <img
              src={data.message}
              alt="Cachorro Aleatório"
              width={300}
              height={300}
            />
            {/* <button
            onClick={invalidateQuery}
            className="border border-white hover:cursor-pointer rounded-sm p-3"
            disabled={isFetching}
          >
            Gerar imagem aleatória
            </button> */}
            <span>
              <Button icon="stash:image-switch" text="Gerar imagem aleatória" />
            </span>
          </div>
        )}
      </div>
    </>
  );
}
