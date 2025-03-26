import { Skeleton } from "@/components/ui/skeleton";
import { useDogs } from "@/utils/queries";

export function SkeletonCard() {
  const dogs = useDogs();

  return (
    <ul className="grid grid-cols-4 gap-3">
      {dogs.data &&
        Object.keys(dogs.data.message).map((item, i) => (
          <li
            key={i}
            className="flex gap-2 text-gray-900 p-4 bg-neutral-100 w-full hover:bg-neutral-200 hover:cursor-pointer duration-200 rounded-sm"
          >
            <Skeleton className="h-14 w-full rounded-xl" />
          </li>
        ))}
    </ul>
  );
}
