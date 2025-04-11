import type { Category, ProgressType } from "@/configs/neodbConfig";

export type Item = {
  display_title: string;
  item: {
    brief: string;
    title: string;
    url: string;
  };
};

export type Items = Record<string, Item[]>;

export function generateTypeKey(
  progress: ProgressType,
  category: Category,
): string {
  return `${progress}${category.charAt(0).toUpperCase()}${category.slice(1)}`;
}

export async function getItems(
  category: Category,
  progressTypes: ProgressType[],
): Promise<Items> {
  const items: Items = {};

  const fetchPromises = progressTypes.map(async (progress) => {
    const typeKey = generateTypeKey(progress, category);
    const data = await fetchAndMergeData([
      `https://neodb.social/api/me/shelf/${progress}?category=${category}&page=1`,
      `https://neodb.social/api/me/shelf/${progress}?category=${category}&page=2`,
      `https://neodb.social/api/me/shelf/${progress}?category=${category}&page=3`,
    ]);

    items[typeKey] = data.map((entry: any) => ({
      display_title: entry.display_title,
      item: {
        title: entry.item.title,
        brief: entry.item.brief,
        url: entry.item.url,
      },
    }));
  });

  await Promise.all(fetchPromises);
  return items;
}

async function fetchAndMergeData(urls: string[]): Promise<any[]> {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEODB_TOKEN ?? ""}`,
    },
  };

  try {
    const responses = await Promise.all(
      urls.map(async (url) => fetch(url, options)),
    );

    const dataArrays = await Promise.all(
      responses.filter((res) => res.ok).map(async (res) => res.json()),
    );

    return dataArrays.flatMap((item) => item.data ?? []);
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
