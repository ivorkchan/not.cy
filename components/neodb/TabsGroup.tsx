"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import ItemCard from "@/components/neodb/ItemCard";

import type {
  Category,
  ProgressType,
  StatusLabels,
} from "@/configs/neodbConfig";
import type { Items } from "@/lib/neodbItems";

type TabsGroupProps = {
  readonly category: Category;
  readonly items: Items;
  readonly selectedProgress: ProgressType;
  readonly statuses: StatusLabels;
};

const TabsGroup: React.FC<TabsGroupProps> = ({
  category,
  items,
  statuses,
  selectedProgress,
}) => {
  const progressTypes = useMemo(
    () => Object.entries(statuses) as [ProgressType, string][],
    [statuses],
  );

  const [selectedProgressIndex, setSelectedProgressIndex] = useState(0);

  useEffect(() => {
    const index = progressTypes.findIndex(
      ([progress]) => progress === selectedProgress,
    );
    if (index !== -1) setSelectedProgressIndex(index);
  }, [selectedProgress, progressTypes]);

  return (
    <TabGroup
      onChange={setSelectedProgressIndex}
      selectedIndex={selectedProgressIndex}
    >
      <TabList className="hidden">
        {progressTypes.map(([progress, label]) => (
          <Tab key={`tab-${progress}`}>{label}</Tab>
        ))}
      </TabList>

      <TabPanels>
        {progressTypes.map(([progress]) => (
          <TabPanel key={`panel-${progress}`}>
            <ItemCard category={category} items={items} type={progress} />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default TabsGroup;
