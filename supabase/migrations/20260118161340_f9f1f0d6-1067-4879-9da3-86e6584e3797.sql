-- =============================================
-- CMS Database Structure for Drica Divina
-- =============================================

-- 1. Update existing categories table
ALTER TABLE public.categories ADD COLUMN IF NOT EXISTS post_count integer DEFAULT 0;

-- 2. Create subcategories table
CREATE TABLE IF NOT EXISTS public.subcategories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES public.categories(id) ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  slug text NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  UNIQUE(category_id, slug)
);

ALTER TABLE public.subcategories ENABLE ROW LEVEL SECURITY;

-- 3. Update posts table
ALTER TABLE public.posts 
  ADD COLUMN IF NOT EXISTS subcategory_id uuid,
  ADD COLUMN IF NOT EXISTS is_featured boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS is_published boolean DEFAULT false;

-- Add subcategory foreign key
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_name = 'posts_subcategory_id_fkey'
  ) THEN
    ALTER TABLE public.posts 
      ADD CONSTRAINT posts_subcategory_id_fkey 
      FOREIGN KEY (subcategory_id) 
      REFERENCES public.subcategories(id) 
      ON DELETE SET NULL;
  END IF;
END $$;

-- Rename excerpt to summary if it exists
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'posts' AND column_name = 'excerpt'
  ) AND NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'posts' AND column_name = 'summary'
  ) THEN
    ALTER TABLE public.posts RENAME COLUMN excerpt TO summary;
  END IF;
END $$;

-- 4. Create products table
CREATE TABLE IF NOT EXISTS public.products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category_id uuid REFERENCES public.categories(id),
  price text,
  discount text,
  tag text,
  image text,
  buy_link text,
  product_type text CHECK (product_type IN ('favorite', 'skincare')) NOT NULL,
  is_active boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- 5. Create articles table
CREATE TABLE IF NOT EXISTS public.articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  image text,
  link text,
  is_active boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

-- 6. Create podcasts table
CREATE TABLE IF NOT EXISTS public.podcasts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  episode_number text,
  title text NOT NULL,
  audio_url text,
  is_active boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE public.podcasts ENABLE ROW LEVEL SECURITY;

-- 7. Create videos table
CREATE TABLE IF NOT EXISTS public.videos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  thumbnail text,
  video_url text,
  category text,
  is_featured boolean DEFAULT false,
  is_active boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE public.videos ENABLE ROW LEVEL SECURITY;

-- 8. Create stories table
CREATE TABLE IF NOT EXISTS public.stories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  label text NOT NULL,
  image text,
  path text NOT NULL,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE public.stories ENABLE ROW LEVEL SECURITY;

-- 9. Create site_settings table
CREATE TABLE IF NOT EXISTS public.site_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text NOT NULL UNIQUE,
  value jsonb,
  updated_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- =============================================
-- RLS Policies
-- =============================================

-- Subcategories policies
CREATE POLICY "Anyone can view subcategories" ON public.subcategories FOR SELECT USING (true);
CREATE POLICY "Authenticated users can insert subcategories" ON public.subcategories FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update subcategories" ON public.subcategories FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete subcategories" ON public.subcategories FOR DELETE TO authenticated USING (true);

-- Products policies
CREATE POLICY "Anyone can view active products" ON public.products FOR SELECT USING (is_active = true);
CREATE POLICY "Authenticated users can insert products" ON public.products FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update products" ON public.products FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete products" ON public.products FOR DELETE TO authenticated USING (true);

-- Articles policies
CREATE POLICY "Anyone can view active articles" ON public.articles FOR SELECT USING (is_active = true);
CREATE POLICY "Authenticated users can insert articles" ON public.articles FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update articles" ON public.articles FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete articles" ON public.articles FOR DELETE TO authenticated USING (true);

-- Podcasts policies
CREATE POLICY "Anyone can view active podcasts" ON public.podcasts FOR SELECT USING (is_active = true);
CREATE POLICY "Authenticated users can insert podcasts" ON public.podcasts FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update podcasts" ON public.podcasts FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete podcasts" ON public.podcasts FOR DELETE TO authenticated USING (true);

-- Videos policies
CREATE POLICY "Anyone can view active videos" ON public.videos FOR SELECT USING (is_active = true);
CREATE POLICY "Authenticated users can insert videos" ON public.videos FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update videos" ON public.videos FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete videos" ON public.videos FOR DELETE TO authenticated USING (true);

-- Stories policies
CREATE POLICY "Anyone can view active stories" ON public.stories FOR SELECT USING (is_active = true);
CREATE POLICY "Authenticated users can insert stories" ON public.stories FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update stories" ON public.stories FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete stories" ON public.stories FOR DELETE TO authenticated USING (true);

-- Site settings policies
CREATE POLICY "Anyone can view site settings" ON public.site_settings FOR SELECT USING (true);
CREATE POLICY "Authenticated users can insert site settings" ON public.site_settings FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update site settings" ON public.site_settings FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete site settings" ON public.site_settings FOR DELETE TO authenticated USING (true);

-- =============================================
-- Triggers for updated_at
-- =============================================

CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_site_settings_updated_at
  BEFORE UPDATE ON public.site_settings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- =============================================
-- Storage Buckets
-- =============================================

INSERT INTO storage.buckets (id, name, public) VALUES ('post-images', 'post-images', true) ON CONFLICT (id) DO NOTHING;
INSERT INTO storage.buckets (id, name, public) VALUES ('product-images', 'product-images', true) ON CONFLICT (id) DO NOTHING;
INSERT INTO storage.buckets (id, name, public) VALUES ('video-thumbnails', 'video-thumbnails', true) ON CONFLICT (id) DO NOTHING;
INSERT INTO storage.buckets (id, name, public) VALUES ('story-images', 'story-images', true) ON CONFLICT (id) DO NOTHING;
INSERT INTO storage.buckets (id, name, public) VALUES ('general-media', 'general-media', true) ON CONFLICT (id) DO NOTHING;

-- =============================================
-- Storage Policies
-- =============================================

-- Public read access for all buckets
CREATE POLICY "Public read access for post-images" ON storage.objects FOR SELECT USING (bucket_id = 'post-images');
CREATE POLICY "Public read access for product-images" ON storage.objects FOR SELECT USING (bucket_id = 'product-images');
CREATE POLICY "Public read access for video-thumbnails" ON storage.objects FOR SELECT USING (bucket_id = 'video-thumbnails');
CREATE POLICY "Public read access for story-images" ON storage.objects FOR SELECT USING (bucket_id = 'story-images');
CREATE POLICY "Public read access for general-media" ON storage.objects FOR SELECT USING (bucket_id = 'general-media');

-- Authenticated users can upload to all buckets
CREATE POLICY "Authenticated upload to post-images" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'post-images');
CREATE POLICY "Authenticated upload to product-images" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'product-images');
CREATE POLICY "Authenticated upload to video-thumbnails" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'video-thumbnails');
CREATE POLICY "Authenticated upload to story-images" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'story-images');
CREATE POLICY "Authenticated upload to general-media" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'general-media');

-- Authenticated users can update files in all buckets
CREATE POLICY "Authenticated update in post-images" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'post-images');
CREATE POLICY "Authenticated update in product-images" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'product-images');
CREATE POLICY "Authenticated update in video-thumbnails" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'video-thumbnails');
CREATE POLICY "Authenticated update in story-images" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'story-images');
CREATE POLICY "Authenticated update in general-media" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'general-media');

-- Authenticated users can delete files in all buckets
CREATE POLICY "Authenticated delete in post-images" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'post-images');
CREATE POLICY "Authenticated delete in product-images" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'product-images');
CREATE POLICY "Authenticated delete in video-thumbnails" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'video-thumbnails');
CREATE POLICY "Authenticated delete in story-images" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'story-images');
CREATE POLICY "Authenticated delete in general-media" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'general-media');