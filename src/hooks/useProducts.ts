import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

type Product = Tables<"products">;

export function useProducts(productType: "favorite" | "skincare") {
  return useQuery({
    queryKey: ["products", productType],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("is_active", true)
        .eq("product_type", productType)
        .order("display_order", { ascending: true });

      if (error) throw error;
      return data as Product[];
    },
  });
}

export function useFavoriteProducts() {
  return useProducts("favorite");
}

export function useSkincareProducts() {
  return useProducts("skincare");
}
