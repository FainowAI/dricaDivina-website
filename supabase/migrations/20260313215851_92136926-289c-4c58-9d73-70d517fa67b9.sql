
DROP POLICY IF EXISTS "Allow anonymous insert" ON public.business_contacts;

CREATE POLICY "Allow public insert" ON public.business_contacts
  FOR INSERT
  TO public
  WITH CHECK (true);
