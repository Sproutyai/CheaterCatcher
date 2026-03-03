-- Cheater Catcher Database Schema
-- Run this against Supabase SQL Editor

-- Profiles (extends Supabase Auth users)
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE,
  full_name TEXT,
  stripe_customer_id TEXT,
  subscription_status TEXT DEFAULT 'none' CHECK (subscription_status IN ('none', 'active', 'canceled', 'past_due')),
  subscription_plan TEXT CHECK (subscription_plan IN ('weekly', 'monthly', 'promo')),
  subscription_id TEXT,
  searches_remaining INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- AWDTSG Groups metadata
CREATE TABLE IF NOT EXISTS groups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  facebook_group_id TEXT UNIQUE,
  name TEXT NOT NULL,
  city TEXT,
  state TEXT,
  country TEXT DEFAULT 'US',
  lat FLOAT,
  lng FLOAT,
  member_count INT,
  post_count INT DEFAULT 0,
  last_scraped_at TIMESTAMPTZ,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Scraped AWDTSG posts
CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id UUID REFERENCES groups(id) ON DELETE CASCADE,
  facebook_post_id TEXT,
  content TEXT,
  author_name TEXT,
  mentioned_names TEXT[],
  image_urls TEXT[],
  post_date TIMESTAMPTZ,
  scraped_at TIMESTAMPTZ DEFAULT now(),
  indexed BOOLEAN DEFAULT false
);

-- Indexed faces for facial recognition
CREATE TABLE IF NOT EXISTS faces (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  group_id UUID REFERENCES groups(id),
  image_url TEXT,
  face_data JSONB, -- face encoding/embedding data
  source_url TEXT,
  indexed_at TIMESTAMPTZ DEFAULT now()
);

-- User searches
CREATE TABLE IF NOT EXISTS searches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  search_name TEXT NOT NULL,
  search_location TEXT,
  search_lat FLOAT,
  search_lng FLOAT,
  photo_url TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'failed')),
  results_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Search results
CREATE TABLE IF NOT EXISTS search_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  search_id UUID REFERENCES searches(id) ON DELETE CASCADE,
  result_type TEXT NOT NULL CHECK (result_type IN ('text_match', 'face_match')),
  source TEXT,
  group_name TEXT,
  group_city TEXT,
  post_content TEXT,
  post_date TIMESTAMPTZ,
  post_url TEXT,
  match_confidence FLOAT,
  image_urls TEXT[],
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Payments
CREATE TABLE IF NOT EXISTS payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  stripe_payment_intent_id TEXT UNIQUE,
  amount INT, -- in cents
  currency TEXT DEFAULT 'usd',
  status TEXT CHECK (status IN ('succeeded', 'failed', 'pending')),
  plan TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Cancellation requests
CREATE TABLE IF NOT EXISTS cancellation_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  email TEXT,
  reason TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processed')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_posts_content ON posts USING gin(to_tsvector('english', content));
CREATE INDEX IF NOT EXISTS idx_posts_mentioned_names ON posts USING gin(mentioned_names);
CREATE INDEX IF NOT EXISTS idx_posts_group_id ON posts(group_id);
CREATE INDEX IF NOT EXISTS idx_searches_user_id ON searches(user_id);
CREATE INDEX IF NOT EXISTS idx_search_results_search_id ON search_results(search_id);
CREATE INDEX IF NOT EXISTS idx_profiles_email ON profiles(email);
CREATE INDEX IF NOT EXISTS idx_profiles_stripe_customer_id ON profiles(stripe_customer_id);
CREATE INDEX IF NOT EXISTS idx_groups_city ON groups(city);

-- RLS Policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE searches ENABLE ROW LEVEL SECURITY;
ALTER TABLE search_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE cancellation_requests ENABLE ROW LEVEL SECURITY;

-- Public read for groups and posts (they're indexed public data)
ALTER TABLE groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE faces ENABLE ROW LEVEL SECURITY;

-- Service role has full access; anon can read groups
CREATE POLICY "Public can read groups" ON groups FOR SELECT USING (true);
CREATE POLICY "Public can read posts" ON posts FOR SELECT USING (true);
CREATE POLICY "Service role full access profiles" ON profiles FOR ALL USING (true);
CREATE POLICY "Service role full access searches" ON searches FOR ALL USING (true);
CREATE POLICY "Service role full access search_results" ON search_results FOR ALL USING (true);
CREATE POLICY "Service role full access payments" ON payments FOR ALL USING (true);
CREATE POLICY "Service role full access cancellation_requests" ON cancellation_requests FOR ALL USING (true);
CREATE POLICY "Service role full access faces" ON faces FOR ALL USING (true);

-- Seed some demo AWDTSG groups
INSERT INTO groups (name, city, state, lat, lng, member_count, post_count) VALUES
  ('AWDTSG — NYC', 'New York', 'NY', 40.7128, -74.0060, 312000, 48000),
  ('AWDTSG — Los Angeles', 'Los Angeles', 'CA', 34.0522, -118.2437, 198000, 31000),
  ('AWDTSG — Chicago', 'Chicago', 'IL', 41.8781, -87.6298, 156000, 24000),
  ('AWDTSG — Miami', 'Miami', 'FL', 25.7617, -80.1918, 142000, 22000),
  ('AWDTSG — Houston', 'Houston', 'TX', 29.7604, -95.3698, 128000, 19000),
  ('AWDTSG — Dallas', 'Dallas', 'TX', 32.7767, -96.7970, 118000, 17000),
  ('AWDTSG — Atlanta', 'Atlanta', 'GA', 33.7490, -84.3880, 134000, 21000),
  ('AWDTSG — Phoenix', 'Phoenix', 'AZ', 33.4484, -112.0740, 95000, 14000),
  ('AWDTSG — Denver', 'Denver', 'CO', 39.7392, -104.9903, 108000, 16000),
  ('AWDTSG — San Francisco', 'San Francisco', 'CA', 37.7749, -122.4194, 124000, 18000),
  ('AWDTSG — Seattle', 'Seattle', 'WA', 47.6062, -122.3321, 98000, 15000),
  ('AWDTSG — Boston', 'Boston', 'MA', 42.3601, -71.0589, 112000, 17000),
  ('AWDTSG — Nashville', 'Nashville', 'TN', 36.1627, -86.7816, 87000, 13000),
  ('AWDTSG — Austin', 'Austin', 'TX', 30.2672, -97.7431, 102000, 15000),
  ('AWDTSG — Fort Lauderdale', 'Fort Lauderdale', 'FL', 26.1224, -80.1373, 76000, 11000),
  ('AWDTSG — Tampa', 'Tampa', 'FL', 27.9506, -82.4572, 84000, 12000),
  ('AWDTSG — Charlotte', 'Charlotte', 'NC', 35.2271, -80.8431, 72000, 10000),
  ('AWDTSG — San Diego', 'San Diego', 'CA', 32.7157, -117.1611, 91000, 13000),
  ('AWDTSG — Philadelphia', 'Philadelphia', 'PA', 39.9526, -75.1652, 105000, 16000),
  ('AWDTSG — Portland', 'Portland', 'OR', 45.5155, -122.6789, 78000, 11000)
ON CONFLICT DO NOTHING;
