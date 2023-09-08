"use client";

import qs from "query-string";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useDebounce } from "@/hooks/useDebounce";
import { Input } from "@/components/Input";

export function SearchInput() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };

    const url = qs.stringifyUrl({
      url: "/search",
      query,
    });

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <Input
      placeholder="what song are you looking for?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
