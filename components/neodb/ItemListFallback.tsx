"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import type { Item } from "@/lib/neodbItems";

const ItemList = dynamic(async () => import("./ItemList"), {
  ssr: false,
});

type ItemListFallbackProps = {
  readonly items: Item[];
};

const ItemListFallback: React.FC<ItemListFallbackProps> = ({ items }) => (
  <Suspense fallback={<div>LOADING</div>}>
    <ItemList items={items} />
  </Suspense>
);
export default ItemListFallback;
