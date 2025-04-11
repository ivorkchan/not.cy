"use client";

import React, { Fragment } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { AnimatePresence } from "framer-motion";

import DisclosureAnimate from "@/components/animate/DisclosureAnimate";

import type { Item } from "@/lib/neodbItems";

type ItemListProps = {
  readonly items: Item[];
};

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  const renderItems = () =>
    items.map((item, index) => (
      <Disclosure
        as="div"
        className="shadow-blur w-full border p-4 text-sm"
        key={index}
      >
        {({ open }) => (
          <>
            <DisclosureButton className="font-system w-full text-left">
              {item.item.title}
            </DisclosureButton>
            <AnimatePresence>
              {open && (
                <DisclosurePanel as={Fragment} static>
                  <DisclosureAnimate>
                    {item.item.brief || "No description."}
                  </DisclosureAnimate>
                </DisclosurePanel>
              )}
            </AnimatePresence>
          </>
        )}
      </Disclosure>
    ));

  return <div className="flex flex-col gap-8">{renderItems()}</div>;
};

export default ItemList;
