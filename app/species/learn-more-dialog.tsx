"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { type Database } from "@/lib/schema";
import Image from "next/image";
import { useState } from "react";
type Species = Database["public"]["Tables"]["species"]["Row"];

interface LearnMoreDialogProps {
  userId: string;
  species: Species;
}

export default function LearnMoreDialog({ userId, species }: LearnMoreDialogProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="mt-3 w-full" onClick={() => setOpen(true)}>
          Learn More
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-auto sm:max-w-[600px]">
        {species.image && (
          <div className="relative h-40 w-full">
            <Image src={species.image} alt={species.scientific_name} fill style={{ objectFit: "cover" }} />
          </div>
        )}
        <DialogHeader>
          <DialogTitle>About the {species.common_name}</DialogTitle>
          <DialogDescription>{species.description}</DialogDescription>
        </DialogHeader>
        <DialogTitle>Common Name</DialogTitle>
        <DialogDescription>{species.common_name}</DialogDescription>
        <DialogTitle>Scientific Name</DialogTitle>
        <DialogDescription>{species.scientific_name}</DialogDescription>
        <DialogTitle>Kingdom</DialogTitle>
        <DialogDescription>{species.kingdom}</DialogDescription>
        <DialogTitle>Total Population</DialogTitle>
        <DialogDescription>{species.total_population}</DialogDescription>
        <div className="grid w-full items-center gap-4">
          <div className="flex">
            <Button type="button" className="ml-1 mr-1 flex-auto" variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
