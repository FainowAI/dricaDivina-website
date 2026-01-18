import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

type Podcast = Tables<"podcasts">;

export function usePodcasts(limit?: number) {
  return useQuery({
    queryKey: ["podcasts", limit],
    queryFn: async () => {
      let query = supabase
        .from("podcasts")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });

      if (limit) {
        query = query.limit(limit);
      }

      const { data, error } = await query;

      if (error) throw error;
      return data as Podcast[];
    },
  });
}
