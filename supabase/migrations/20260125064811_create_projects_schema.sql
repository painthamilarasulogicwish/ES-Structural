/*
  # Create Projects Management Schema

  1. New Tables
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text, unique) - Category name (e.g., Precast, Commercial, Landmark)
      - `slug` (text, unique) - URL-friendly identifier
      - `created_at` (timestamptz)
    
    - `subcategories`
      - `id` (uuid, primary key)
      - `category_id` (uuid, foreign key to categories)
      - `name` (text) - Subcategory name
      - `slug` (text) - URL-friendly identifier
      - `created_at` (timestamptz)
    
    - `projects`
      - `id` (uuid, primary key)
      - `name` (text) - Project name
      - `location` (text) - Project location
      - `area` (text) - Project area/size
      - `type` (text) - Project type label
      - `category_id` (uuid, foreign key to categories)
      - `subcategory_id` (uuid, foreign key to subcategories, nullable)
      - `description` (text, nullable) - Project description
      - `image_url` (text) - Project image URL
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (projects are publicly viewable)
*/

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create subcategories table
CREATE TABLE IF NOT EXISTS subcategories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  name text NOT NULL,
  slug text NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(category_id, slug)
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  location text NOT NULL,
  area text NOT NULL,
  type text NOT NULL,
  category_id uuid NOT NULL REFERENCES categories(id) ON DELETE RESTRICT,
  subcategory_id uuid REFERENCES subcategories(id) ON DELETE SET NULL,
  description text,
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE subcategories ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Categories are publicly viewable"
  ON categories FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Subcategories are publicly viewable"
  ON subcategories FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Projects are publicly viewable"
  ON projects FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_subcategories_category_id ON subcategories(category_id);
CREATE INDEX IF NOT EXISTS idx_projects_category_id ON projects(category_id);
CREATE INDEX IF NOT EXISTS idx_projects_subcategory_id ON projects(subcategory_id);
CREATE INDEX IF NOT EXISTS idx_projects_name ON projects(name);
