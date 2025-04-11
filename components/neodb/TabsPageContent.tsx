"use client";

import React, { useState } from "react";

import TabsContainer from "@/components/neodb/TabsContainer";
import TabsControl from "@/components/neodb/TabsControl";

import type { Category, ProgressType } from "@/configs/neodbConfig";
import type { Items } from "@/lib/neodbItems";

type TabsPageContentProps = {
  readonly categoriesData: Record<Category, Items>;
};

const TabsPageContent: React.FC<TabsPageContentProps> = ({
  categoriesData,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("book");
  const [selectedProgress, setSelectedProgress] =
    useState<ProgressType>("wishlist");

  return (
    <div className="neodb-grid gap-8 leading-4">
      <TabsContainer
        categoriesData={categoriesData}
        selectedCategory={selectedCategory}
        selectedProgress={selectedProgress}
      />
      <TabsControl
        onSelectCategory={setSelectedCategory}
        onSelectProgress={setSelectedProgress}
        selectedCategory={selectedCategory}
        selectedProgress={selectedProgress}
      />
    </div>
  );
};

export default TabsPageContent;
