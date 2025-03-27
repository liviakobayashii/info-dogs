import { req } from "@/utils/queries";
import DialogItem from "./dialog";
import { RandomDogImage } from "@/types/dogImage";
import { useQuery } from "@tanstack/react-query";
import GerarImg from "./gerar-img";
import Loader from "./loader";

export default function RandomImg() {
  const getRandomImage = async (): Promise<RandomDogImage> => {
    const result = await req.get(`/breeds/image/random`);
    return result.data;
  };

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["randomImage"],
    queryFn: getRandomImage,
  });

  return (
    <DialogItem
      title="Imagem aleatória de algum cachorro"
      trigger={
        <GerarImg icon="stash:image-switch" text="Gerar imagem aleatória" />

        // <p className="flex gap-1 bg-neutral-100 hover:bg-neutral-300 hover:cursor-pointer duration-200 text-black p-3 rounded-sm">
        //   <Icon
        //     icon="stash:image-switch"
        //     className=" text-amber-900 text-xl font-bold self-center"
        //   />
        //   Gerar imagem aleatória
        // </p>
        // <Button icon="stash:image-switch" text="Gerar imagem aleatória" />
      }
      description={
        isLoading || isFetching ? (
          <Loader />
        ) : (
          <div className="flex flex-col gap-2 justify-center">
            <img
              src={data?.message}
              alt="Cachorro Aleatório"
              width={300}
              height={300}
            />
            <GerarImg icon="stash:image-switch" text="Gerar imagem aleatória" />
          </div>
        )
      }
    />
  );
}
