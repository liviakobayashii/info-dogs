import { Icon } from "@iconify/react";
import { Rubik_Bubbles } from "next/font/google";
import Link from "next/link";
import Button from "./button";

const rubikBubbles = Rubik_Bubbles({
  subsets: ["latin"],
  weight: "400", // Essa fonte só tem o peso 400 mesmo
});

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center h-28 bg-amber-900 p-6">
      <Link href={"/"}>
        <h1 className={`text-3xl font-bold ${rubikBubbles.className}`}>
          Info Dogs
        </h1>
      </Link>
      <Link href={"/random"}>
        <Button icon="stash:image-switch" text="Gerar imagem aleatória" />

        {/* <button className="flex gap-1 bg-neutral-100 hover:bg-neutral-300 hover:cursor-pointer duration-200 text-black p-3 rounded-sm">
          <Icon
            icon="stash:image-switch"
            className=" text-amber-900 text-xl font-bold self-center"
          />
          <p className="text-sm">Gerar imagem aleatória</p>
        </button> */}
      </Link>
    </header>
  );
}
