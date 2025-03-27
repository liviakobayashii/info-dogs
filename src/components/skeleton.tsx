import { Skeleton } from "@/components/ui/skeleton";
import { useDogs } from "@/utils/queries";

export function SkeletonCard() {
  const dogs = useDogs();

  return (
    <div className=" bg-white p-6 rounded-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
      {Array(5)
        .fill("")
        .map((_, i) => (
          <Skeleton key={i} className="h-14 w-full rounded-sm bg-neutral-300" />
        ))}
      {Array(5)
        .fill("")
        .map((_, i) => (
          <Skeleton
            key={i}
            className="h-14 w-full rounded-sm bg-neutral-300/90"
          />
        ))}
      {Array(5)
        .fill("")
        .map((_, i) => (
          <Skeleton
            key={i}
            className="h-14 w-full rounded-sm bg-neutral-300/80"
          />
        ))}
      {Array(5)
        .fill("")
        .map((_, i) => (
          <Skeleton
            key={i}
            className="h-14 w-full rounded-sm bg-neutral-300/80"
          />
        ))}
      {Array(5)
        .fill("")
        .map((_, i) => (
          <Skeleton
            key={i}
            className="h-14 w-full rounded-sm bg-neutral-300/70"
          />
        ))}
      {Array(5)
        .fill("")
        .map((_, i) => (
          <Skeleton
            key={i}
            className="h-14 w-full rounded-sm bg-neutral-300/60"
          />
        ))}
      {Array(5)
        .fill("")
        .map((_, i) => (
          <Skeleton
            key={i}
            className="h-14 w-full rounded-sm bg-neutral-300/50"
          />
        ))}
    </div>
    // <ul className="grid grid-cols-4 gap-3">
    //   {dogs.isLoading || dogs.isFetching &&
    //     Object.keys(dogs.data.message).map((item, i) => (
    //       <li
    //         key={i}
    //         className="flex gap-2 text-gray-900 p-4 bg-neutral-100 w-full hover:bg-neutral-200 hover:cursor-pointer duration-200 rounded-sm"
    //       >
    //         <Skeleton className="h-14 w-full rounded-sm" />
    //       </li>
    //     ))}
    // </ul>
  );
}
