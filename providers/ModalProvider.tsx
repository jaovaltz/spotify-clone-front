"use client";

import { useEffect, useState } from "react";

import { AuthModal } from "@/components/AuthModal";
import { UploadModal } from "@/components/UploadModal";
import { SubscribeModal } from "@/components/SubscribeModal";

import { ProductWithPrice } from "@/types";
interface ModalProviderProps {
  products: ProductWithPrice[];
}

export function ModalProvider({ products }: ModalProviderProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <UploadModal />
      <AuthModal />
      <SubscribeModal products={products} />
    </>
  );
}
