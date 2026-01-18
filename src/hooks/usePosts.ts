import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

type Post = Tables<"posts">;

interface UsePostsOptions {
  categorySlug?: string;
  subcategoryId?: string;
  limit?: number;
  offset?: number;
  isPublished?: boolean;
  search?: string;
}

interface PostsResult {
  posts: Post[];
  totalCount: number;
  hasMore: boolean;
}

export function usePosts(options: UsePostsOptions = {}) {
  const { categorySlug, subcategoryId, limit = 9, offset = 0, isPublished = true, search } = options;

  return useQuery({
    queryKey: ["posts", { categorySlug, subcategoryId, limit, offset, isPublished, search }],
    queryFn: async (): Promise<PostsResult> => {
      let query = supabase
        .from("posts")
        .select("*, categories!inner(slug)", { count: "exact" });

      if (isPublished) {
        query = query.eq("is_published", true);
      }

      if (categorySlug) {
        query = query.eq("categories.slug", categorySlug);
      }

      if (subcategoryId) {
        query = query.eq("subcategory_id", subcategoryId);
      }

      if (search) {
        query = query.ilike("title", `%${search}%`);
      }

      const { data, error, count } = await query
        .order("published_at", { ascending: false })
        .range(offset, offset + limit - 1);

      if (error) throw error;

      return {
        posts: data as Post[],
        totalCount: count || 0,
        hasMore: (count || 0) > offset + limit,
      };
    },
  });
}

export function usePost(slug: string) {
  return useQuery({
    queryKey: ["post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*, categories(*), subcategories(*)")
        .eq("slug", slug)
        .eq("is_published", true)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });
}

export function useFeaturedPost(categorySlug?: string) {
  return useQuery({
    queryKey: ["featuredPost", categorySlug],
    queryFn: async () => {
      let query = supabase
        .from("posts")
        .select("*, categories(*)")
        .eq("is_published", true)
        .eq("is_featured", true)
        .order("published_at", { ascending: false })
        .limit(1);

      if (categorySlug) {
        query = supabase
          .from("posts")
          .select("*, categories!inner(*)")
          .eq("is_published", true)
          .eq("is_featured", true)
          .eq("categories.slug", categorySlug)
          .order("published_at", { ascending: false })
          .limit(1);
      }

      const { data, error } = await query.single();

      if (error && error.code !== "PGRST116") throw error;
      return data || null;
    },
  });
}

export function useLatestPosts(limit: number = 3) {
  return useQuery({
    queryKey: ["latestPosts", limit],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*, categories(*)")
        .eq("is_published", true)
        .order("published_at", { ascending: false })
        .limit(limit);

      if (error) throw error;
      return data as (Post & { categories: Tables<"categories"> })[];
    },
  });
}

export function useRelatedPosts(postId: string, categoryId: string, limit: number = 3) {
  return useQuery({
    queryKey: ["relatedPosts", postId, categoryId, limit],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*, categories(*)")
        .eq("is_published", true)
        .eq("category_id", categoryId)
        .neq("id", postId)
        .order("published_at", { ascending: false })
        .limit(limit);

      if (error) throw error;
      return data as (Post & { categories: Tables<"categories"> })[];
    },
    enabled: !!postId && !!categoryId,
  });
}
