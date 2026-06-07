import { getCategoryApi } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";
import type { SelectOption } from "@/types";

export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryApi,
  });

  // {_id, title, englishTitle, ...}
  const { categories: rawCategories = [] } = data || {};

  // {value, label}
  const categories: SelectOption[] = rawCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));

  // {title, enTitle}
  const transformedCategories: SelectOption[] = rawCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { isLoading, categories, transformedCategories };
}
