export type Category = "book" | "movie" | "music" | "tv";

export type ProgressType = "complete" | "progress" | "wishlist";

export type StatusLabels = {
  [key in ProgressType]?: string;
};

export type CategoryConfig = {
  category: Category;
  statuses: StatusLabels;
};

export type CategoriesConfig = CategoryConfig[];

export const categoriesConfig: CategoriesConfig = [
  {
    category: "book",
    statuses: {
      wishlist: "to read",
      progress: "reading",
      complete: "finished",
    },
  },
  {
    category: "tv",
    statuses: {
      wishlist: "to watch",
      progress: "watching",
      complete: "finished",
    },
  },
  {
    category: "movie",
    statuses: {
      wishlist: "to watch",
      complete: "watched",
    },
  },
  {
    category: "music",
    statuses: {
      wishlist: "to listen",
      complete: "listened",
    },
  },
];

export function getCategoryStatuses(
  category: Category,
): StatusLabels | undefined {
  return categoriesConfig.find((config) => config.category === category)
    ?.statuses;
}
