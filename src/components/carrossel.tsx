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

type CarrosselProps = {
  breed: string;
};

export default function Carrossel({ breed }: CarrosselProps) {
  const getBreed = async (): Promise<DogImage> => {
    const result = await req.get(`/breed/${breed}/images`);
    return result.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["breed", breed],
    queryFn: getBreed,
  });

  if (isLoading) return "Carregando imagens";

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="relative w-full max-w-[500px] mx-auto"
    >
      <CarouselContent>
        {data?.message.map((item, i) => (
          <CarouselItem key={i} className="flex justify-center">
            <img
              src={item}
              alt={`Dog ${i}`}
              className="rounded-xl object-cover max-h-[300px] max-w-200"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" text-black hover:cursor-pointer" />
      <CarouselNext className=" text-black hover:cursor-pointer" />
    </Carousel>
  );
}
