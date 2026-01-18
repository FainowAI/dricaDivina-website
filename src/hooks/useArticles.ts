import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

type Article = Tables<"articles">;

export function useArticles(limit?: number) {
  return useQuery({
    queryKey: ["articles", limit],
    queryFn: async () => {
      let query = supabase
        .from("articles")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });

      if (limit) {
        query = query.limit(limit);
      }

      const { data, error } = await query;

      if (error) throw error;
      return data as Article[];
    },
  });
}
