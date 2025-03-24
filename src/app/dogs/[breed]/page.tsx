"use client";

import { DogImage } from "@/types/dogImage";
import { invalidateQuery, req } from "@/utils/queries";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function DogPage() {
  const { breed } = useParams(); //vai buscar o que está depois de breed

  const getBreed = async (): Promise<DogImage> => {
    const result = await req.get(`/breed/${breed}/images`);
    return result.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["breed", breed],
    queryFn: getBreed,
  });

  const updateImg = () => {
    invalidateQuery();
  };

  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl m-4"> {breed}</h1>

      {isLoading && <h2 className="text-2xl font-bold">Carregando...</h2>}

      {data && (
        <div className="flex flex-wrap gap-8 p-3 justify-center items-center">
          {data.message.map((item, i) => (
            <img key={i} src={item} width={300} className="rounded-md" />
          ))}
        </div>
      )}
    </div>
  );
}
