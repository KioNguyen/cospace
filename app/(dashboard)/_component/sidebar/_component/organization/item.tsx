import Image from "next/image";

import Hint from "@/components/hint";
import { cn } from "@/lib/utils";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

interface OrganizationItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export default function OrganizationItem({
  id,
  name,
  imageUrl,
}: OrganizationItemProps) {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();
  const isActive = organization?.id === id;

  const handleClick = () => {
    console.log("🚀 ~ handleClick ~ id:", id);
    if (!setActive) return;
    setActive({ organization: id });
  };
  return (
    <div className="aspect-square relative">
      <Hint label={name} side="right" align="start" sideOffset={18}>
        <Image
          fill
          alt={name}
          src={imageUrl}
          onClick={handleClick}
          className={cn(
            "rounded-md cursor-pointer opacity-65 hover:opacity-100 transition",
            isActive && "opacity-100"
          )}
        />
      </Hint>
    </div>
  );
}
