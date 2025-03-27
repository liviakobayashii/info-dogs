// gerar-img.tsx
import { Icon } from "@iconify/react";
import { invalidateQuery } from "@/utils/queries";
import React from "react";

export type Props = React.ComponentPropsWithoutRef<"button"> & {
  icon: string;
  text: string;
};

export default function GerarImg({ icon, text, ...props }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    invalidateQuery();
    props.onClick?.(e); // Garante que o Dialog receba o onClick também
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      className="flex gap-1 bg-neutral-100 hover:bg-neutral-300 hover:cursor-pointer duration-200 text-black p-3 rounded-sm"
    >
      <Icon
        icon={icon}
        className="hidden sm:block text-amber-900 text-xl font-bold self-center"
      />
      {text}
    </button>
  );
}
