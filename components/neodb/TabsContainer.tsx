"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import { categoriesConfig } from "@/configs/neodbConfig";

import TabsGroup from "@/components/neodb/TabsGroup";

import type { Category, ProgressType } from "@/configs/neodbConfig";
import type { Items } from "@/lib/neodbItems";

type TabsContainerProps = {
  readonly categoriesData: Record<Category, Items>;
  readonly selectedCategory: Category;
  readonly selectedProgress: ProgressType;
};

const TabsContainer: React.FC<TabsContainerProps> = ({
  categoriesData,
  selectedCategory,
  selectedProgress,
}) => {
  const categoriesWithConfig = useMemo(
    () =>
      categoriesConfig.map((config) => ({
        ...config,
        items: categoriesData[config.category],
      })),
    [categoriesData],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const index = categoriesWithConfig.findIndex(
      (config) => config.category === selectedCategory,
    );
    if (index !== -1) setSelectedIndex(index);
  }, [selectedCategory, categoriesWithConfig]);

  return (
    <TabGroup
      className="w-full"
      onChange={setSelectedIndex}
      selectedIndex={selectedIndex}
    >
      <TabList className="hidden">
        {categoriesWithConfig.map(({ category }) => (
          <Tab key={`tab-${category}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {categoriesWithConfig.map(({ category, items, statuses }) => (
          <TabPanel key={`panel-${category}`}>
            <TabsGroup
              category={category}
              items={items}
              selectedProgress={selectedProgress}
              statuses={statuses}
            />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default TabsContainer;
