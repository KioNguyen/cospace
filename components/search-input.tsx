"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useEffect } from "react";
import { useDebounceValue } from "usehooks-ts";
import { Input } from "./ui/input";

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultValue = searchParams.get("search") || "";
  // const [value, setValue] = useState(router.query.search || "");
  const [value, setValue] = useDebounceValue(defaultValue, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: value,
          ...(searchParams.getAll("favorites").length && { favorites: true }),
        },
      },

      {
        skipNull: true,
        skipEmptyString: true,
      }
    );
    router.push(url);
  }, [value, searchParams, router]);
  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="Search boards"
        onChange={handleChange}
        defaultValue={defaultValue}
      />
    </div>
  );
}
