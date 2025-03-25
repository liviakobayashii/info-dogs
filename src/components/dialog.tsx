import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

type Props = {
  trigger: ReactNode;
  title: string;
  description: ReactNode;
};

export default function DialogItem({ trigger, title, description }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild className="flex items-center gap-2">
        {trigger}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex justify-center items-center">
          <DialogTitle className="py-4 text-gray-950">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
