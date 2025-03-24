import { invalidateQuery } from "@/utils/queries";
import { Icon } from "@iconify/react";

export type Props = {
  icon: string;
  text: string;
};

export default function Button(children: Props) {
  return (
    <button
      onClick={invalidateQuery}
      className="flex gap-1 bg-neutral-100 hover:bg-neutral-300 hover:cursor-pointer duration-200 text-black p-3 rounded-sm"
    >
      <Icon
        icon={children.icon}
        className=" text-amber-900 text-xl font-bold self-center"
      />
      <p className="text-sm">{children.text}</p>
    </button>
  );
}
