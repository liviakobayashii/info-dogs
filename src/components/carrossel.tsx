import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DogImage } from "@/types/dogImage";
import { req } from "@/utils/queries";
import { useQuery } from "@tanstack/react-query";
import Loader from "./loader";

type CarrosselProps = {
  breed: string;
};

export default function Carrossel({ breed }: CarrosselProps) {
  const getBreed = async (): Promise<DogImage> => {
    const result = await req.get(`/breed/${breed}/images`);
    return result.data;
  };

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["breed", breed],
    queryFn: getBreed,
  });

  if (isLoading || isFetching) return <Loader />;

  return (
    <>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="hidden md:block relative w-full max-w-[500px] mx-auto "
      >
        <CarouselContent>
          {data?.message.map((item, i) => (
            <CarouselItem key={i} className="flex justify-center">
              <img
                src={item}
                alt={`Dog ${i}`}
                className="rounded-sm object-cover max-h-[300px] max-w-200"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" text-amber-900 hover:bg-amber-900 hover:cursor-pointer duration-200" />
        <CarouselNext className=" text-amber-900 hover:bg-amber-900 hover:cursor-pointer duration-200" />
      </Carousel>
      <Carousel
        orientation="vertical"
        opts={{
          align: "center",
          loop: true,
        }}
        className="my-10 md:hidden relative w-full max-w-xs items-center justify-center"
      >
        <CarouselContent className="-mt-1 h-[200px]">
          {data?.message.map((item, i) => (
            <CarouselItem key={i} className="pt-1 md:basis-1/3 ">
              <img
                src={item}
                alt={`Dog ${i}`}
                className="flex items-center justify-center"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" text-amber-900 hover:bg-amber-900 hover:cursor-pointer duration-200" />
        <CarouselNext className=" text-amber-900 hover:bg-amber-900 hover:cursor-pointer duration-200" />
      </Carousel>
    </>
  );
}
