import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Category {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface Subcategory {
  id: string;
  category_id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface Project {
  id: string;
  name: string;
  location: string;
  area: string;
  type: string;
  category_id: string;
  subcategory_id: string | null;
  description: string | null;
  image_url: string;
  created_at: string;
  updated_at: string;
  categories?: Category;
  subcategories?: Subcategory;
}
