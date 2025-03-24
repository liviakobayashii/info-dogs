"use client";

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
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl m-4"> Imagem aleatória de algum cachorro</h1>
      {isFetching && <h2 className="text-2xl font-bold">Carregando...</h2>}

      {!isFetching && data && (
        <div className="flex flex-col flex-wrap gap-8 p-3 justify-center items-center">
          <img
            src={data.message}
            alt="Cachorro Aleatório"
            width={300}
            height={300}
          />
          <button
            onClick={invalidateQuery}
            className="border border-white hover:cursor-pointer rounded-sm p-3"
            disabled={isFetching}
          >
            Gerar imagem aleatória
          </button>
        </div>
      )}
    </div>
  );
}
