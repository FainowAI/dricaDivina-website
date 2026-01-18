import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

type Video = Tables<"videos">;

interface UseVideosOptions {
  isFeatured?: boolean;
  limit?: number;
  offset?: number;
}

interface VideosResult {
  videos: Video[];
  totalCount: number;
  hasMore: boolean;
}

export function useVideos(options: UseVideosOptions = {}) {
  const { isFeatured, limit = 9, offset = 0 } = options;

  return useQuery({
    queryKey: ["videos", { isFeatured, limit, offset }],
    queryFn: async (): Promise<VideosResult> => {
      let query = supabase
        .from("videos")
        .select("*", { count: "exact" })
        .eq("is_active", true);

      if (isFeatured !== undefined) {
        query = query.eq("is_featured", isFeatured);
      }

      const { data, error, count } = await query
        .order("display_order", { ascending: true })
        .range(offset, offset + limit - 1);

      if (error) throw error;

      return {
        videos: data as Video[],
        totalCount: count || 0,
        hasMore: (count || 0) > offset + limit,
      };
    },
  });
}

export function useFeaturedVideo() {
  return useQuery({
    queryKey: ["featuredVideo"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("videos")
        .select("*")
        .eq("is_active", true)
        .eq("is_featured", true)
        .order("display_order", { ascending: true })
        .limit(1)
        .single();

      if (error && error.code !== "PGRST116") throw error;
      return data as Video | null;
    },
  });
}
