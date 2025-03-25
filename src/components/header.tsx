import { Icon } from "@iconify/react";
import { Rubik_Bubbles } from "next/font/google";
import Link from "next/link";
import Button from "./gerar-img";
import DialogItem from "./dialog";
import { RandomDogImage } from "@/types/dogImage";
import { req } from "@/utils/queries";
import { useQuery } from "@tanstack/react-query";
import RandomImg from "./random-img";

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
      <RandomImg />
    </header>
  );
}
