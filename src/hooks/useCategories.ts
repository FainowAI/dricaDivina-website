import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

type Category = Tables<"categories">;
type Subcategory = Tables<"subcategories">;

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .eq("is_active", true)
        .order("order_index", { ascending: true });

      if (error) throw error;
      return data as Category[];
    },
  });
}

export function useCategory(slug: string) {
  return useQuery({
    queryKey: ["category", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .eq("slug", slug)
        .eq("is_active", true)
        .single();

      if (error) throw error;
      return data as Category;
    },
    enabled: !!slug,
  });
}

export function useSubcategories(categoryId?: string) {
  return useQuery({
    queryKey: ["subcategories", categoryId],
    queryFn: async () => {
      let query = supabase.from("subcategories").select("*");

      if (categoryId) {
        query = query.eq("category_id", categoryId);
      }

      const { data, error } = await query.order("name", { ascending: true });

      if (error) throw error;
      return data as Subcategory[];
    },
  });
}

export function useSubcategoriesByCategory(categorySlug: string) {
  return useQuery({
    queryKey: ["subcategories", "bySlug", categorySlug],
    queryFn: async () => {
      // First get the category ID
      const { data: category, error: categoryError } = await supabase
        .from("categories")
        .select("id")
        .eq("slug", categorySlug)
        .single();

      if (categoryError) throw categoryError;
      if (!category) return [];

      // Then get subcategories
      const { data, error } = await supabase
        .from("subcategories")
        .select("*")
        .eq("category_id", category.id)
        .order("name", { ascending: true });

      if (error) throw error;
      return data as Subcategory[];
    },
    enabled: !!categorySlug,
  });
}
