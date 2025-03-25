import { req } from "@/utils/queries";
import DialogItem from "./dialog";
import { RandomDogImage } from "@/types/dogImage";
import { useQuery } from "@tanstack/react-query";
import Button from "./gerar-img";
import GerarImg from "./gerar-img";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function RandomImg() {
  const getRandomImage = async (): Promise<RandomDogImage> => {
    const result = await req.get(`/breeds/image/random`);
    return result.data;
  };

  const { data, isFetching } = useQuery({
    queryKey: ["randomImage"],
    queryFn: getRandomImage,
  });

  return (
    <DialogItem
      title="Imagem aleatória de algum cachorro"
      trigger={
        <p className="flex gap-1 bg-neutral-100 hover:bg-neutral-300 hover:cursor-pointer duration-200 text-black p-3 rounded-sm">
          <Icon
            icon="stash:image-switch"
            className=" text-amber-900 text-xl font-bold self-center"
          />
          Gerar imagem aleatória
        </p>
        // <Button icon="stash:image-switch" text="Gerar imagem aleatória" />
      }
      description={
        isFetching ? (
          <p>Carregando imagem...</p>
        ) : (
          <img
            src={data?.message}
            alt="Cachorro Aleatório"
            width={300}
            height={300}
          />
        )
      }
    />
  );
}
