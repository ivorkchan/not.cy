"use client";

import React, { useEffect, useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";

import { getCategoryStatuses } from "@/configs/neodbConfig";

import type {
  Category,
  ProgressType,
  StatusLabels,
} from "@/configs/neodbConfig";
import type { FC } from "react";

type TabsControlProps = {
  onSelectCategory(category: Category): void;
  onSelectProgress(progress: ProgressType): void;
  readonly selectedCategory: Category;
  readonly selectedProgress: ProgressType;
};

const categories: Category[] = ["book", "tv", "movie", "music"];

type RadioOptionProps<T> = {
  readonly label: string;
  readonly value: T;
};

const ArrowRadioOption = <T,>({ value, label }: RadioOptionProps<T>) => (
  <Radio
    className="flex cursor-pointer items-center justify-between text-sm"
    value={value}
  >
    {({ checked }) => (
      <>
        <span>{label}</span>
        <svg
          className={`h-4 w-[6px] transition-opacity duration-300 ${
            checked ? "opacity-100" : "opacity-0"
          }`}
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
        </svg>
      </>
    )}
  </Radio>
);

const TabsControl: FC<TabsControlProps> = ({
  selectedCategory,
  selectedProgress,
  onSelectCategory,
  onSelectProgress,
}) => {
  const [availableProgresses, setAvailableProgresses] = useState<
    ProgressType[]
  >([]);
  const [statusLabels, setStatusLabels] = useState<StatusLabels>({});

  useEffect(() => {
    const statuses = getCategoryStatuses(selectedCategory);

    if (statuses) {
      setStatusLabels(statuses);

      const progressKeys = Object.keys(statuses) as ProgressType[];
      setAvailableProgresses(progressKeys);

      if (!progressKeys.includes(selectedProgress)) {
        onSelectProgress(progressKeys[0]);
      }
    }
  }, [selectedCategory, selectedProgress, onSelectProgress]);

  return (
    <div className="neodb-selector grid w-full grid-cols-2 gap-4 lg:flex lg:flex-col lg:gap-8">
      <RadioGroup
        className="shadow-blur flex flex-col gap-4 border p-4"
        onChange={onSelectCategory}
        value={selectedCategory}
      >
        {categories.map((category) => (
          <ArrowRadioOption
            key={category}
            label={category.charAt(0) + category.slice(1)}
            value={category}
          />
        ))}
      </RadioGroup>

      {availableProgresses.length > 0 && (
        <RadioGroup
          className="shadow-blur flex flex-col gap-4 border p-4"
          onChange={onSelectProgress}
          value={selectedProgress}
        >
          {availableProgresses.map((progress) => (
            <ArrowRadioOption
              key={progress}
              label={statusLabels[progress] ?? progress}
              value={progress}
            />
          ))}
        </RadioGroup>
      )}
    </div>
  );
};

export default TabsControl;
