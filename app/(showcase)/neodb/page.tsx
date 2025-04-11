import { getItems } from "@/lib/neodbItems";
import { categoriesConfig } from "@/configs/neodbConfig";

import TabsPageContent from "@/components/neodb/TabsPageContent";

import type { Category, ProgressType } from "@/configs/neodbConfig";
import type { Items } from "@/lib/neodbItems";

async function fetchCategoriesData() {
  const categoriesData: Record<Category, Items> = {} as Record<Category, Items>;

  for (const { category, statuses } of categoriesConfig) {
    const progressTypes = Object.keys(statuses) as ProgressType[];
    categoriesData[category] = await getItems(category, progressTypes);
  }

  return categoriesData;
}

export default async function Page() {
  const categoriesData = await fetchCategoriesData();

  return <TabsPageContent categoriesData={categoriesData} />;
}

export const revalidate = 3_600;
