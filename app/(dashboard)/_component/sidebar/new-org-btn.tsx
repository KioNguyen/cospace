"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { Plus } from "lucide-react";

export default function NewOrgButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
            <Plus size={24} className="text-white" />
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-transparent border-none">
        <CreateOrganization routing="hash" />
      </DialogContent>
    </Dialog>
  );
}
