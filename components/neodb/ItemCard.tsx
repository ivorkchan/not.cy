"use client";

import React from "react";

import { generateTypeKey } from "@/lib/neodbItems";

import ItemListFallback from "@/components/neodb/ItemListFallback";

import type { Category, ProgressType } from "@/configs/neodbConfig";
import type { Items } from "@/lib/neodbItems";

type ItemCardProps = {
  readonly category: Category;
  readonly items: Items;
  readonly type: ProgressType;
};

const ItemCard: React.FC<ItemCardProps> = ({ category, type, items }) => {
  const typeKey = generateTypeKey(type, category);
  const itemList = items[typeKey] ?? [];

  return (
    <div>
      <ItemListFallback items={itemList} />
    </div>
  );
};

export default ItemCard;
