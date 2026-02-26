import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

type Post = Tables<"posts">;
type PostWithCategories = Post & { categories: { id: string; name: string; slug: string } };
interface UsePostsOptions {
  categorySlug?: string;
  limit?: number;
  offset?: number;
  isPublished?: boolean;
  search?: string;
}

interface PostsResult {
  posts: PostWithCategories[];
  totalCount: number;
  hasMore: boolean;
}

export function usePosts(options: UsePostsOptions = {}) {
  const { categorySlug, limit = 9, offset = 0, isPublished = true, search } = options;

  return useQuery({
    queryKey: ["posts", { categorySlug, limit, offset, isPublished, search }],
    queryFn: async (): Promise<PostsResult> => {
      let query = supabase
        .from("posts")
        .select("*, categories!inner(id, name, slug, is_active)", { count: "exact" });

      if (isPublished) {
        query = query.eq("is_published", true);
      }

      // Sempre filtrar por categorias ativas
      query = query.eq("categories.is_active", true);

      if (categorySlug) {
        query = query.eq("categories.slug", categorySlug);
      }

      if (search) {
        query = query.ilike("title", `%${search}%`);
      }

      const { data, error, count } = await query
        .order("created_at", { ascending: false })
        .range(offset, offset + limit - 1);

      if (error) throw error;

      return {
        posts: data as (Post & { categories: { id: string; name: string; slug: string } })[],
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
        .select("*, categories(*)")
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
        .select("*, categories!inner(*)")
        .eq("is_published", true)
        .eq("is_featured", true)
        .eq("categories.is_active", true)
        .order("created_at", { ascending: false })
        .limit(1);

      if (categorySlug) {
        query = query.eq("categories.slug", categorySlug);
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
        .select("*, categories!inner(*)")
        .eq("is_published", true)
        .eq("categories.is_active", true)
        .order("created_at", { ascending: false })
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
        .select("*, categories!inner(*)")
        .eq("is_published", true)
        .eq("category_id", categoryId)
        .eq("categories.is_active", true)
        .neq("id", postId)
        .order("created_at", { ascending: false })
        .limit(limit);

      if (error) throw error;
      return data as (Post & { categories: Tables<"categories"> })[];
    },
    enabled: !!postId && !!categoryId,
  });
}
