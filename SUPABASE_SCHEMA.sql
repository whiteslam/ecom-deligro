-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create tables
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  full_name text,
  avatar_url text,
  phone_number text,
  address text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table public.restaurants (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  description text,
  image_url text,
  rating numeric(2,1) default 0,
  review_count integer default 0,
  price_range text,
  type text, -- Veg/Non-Veg/etc
  address text,
  delivery_time text,
  min_order text,
  status text, -- Open/Closed
  is_trending boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table public.menu_items (
  id uuid default uuid_generate_v4() primary key,
  restaurant_id uuid references public.restaurants(id) on delete cascade not null,
  name text not null,
  description text,
  price numeric(10,2) not null,
  image_url text,
  category text,
  is_veg boolean default true,
  is_bestseller boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table public.orders (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete set null,
  restaurant_id uuid references public.restaurants(id) on delete set null,
  total_amount numeric(10,2) not null,
  status text default 'pending', -- pending, preparing, out_for_delivery, delivered, cancelled
  delivery_address text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table public.order_items (
  id uuid default uuid_generate_v4() primary key,
  order_id uuid references public.orders(id) on delete cascade not null,
  menu_item_id uuid references public.menu_items(id) on delete set null,
  quantity integer not null,
  price_at_time numeric(10,2) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.profiles enable row level security;
alter table public.restaurants enable row level security;
alter table public.menu_items enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;

-- Create policies
-- Profiles: Users can see their own profile, everyone can see basic info (optional)
create policy "Public profiles are viewable by everyone." on public.profiles for select using (true);
create policy "Users can insert their own profile." on public.profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile." on public.profiles for update using (auth.uid() = id);

-- Restaurants: Everyone can read, only admins (or specific users) can insert/update (simplified for now to allow all read)
create policy "Restaurants are viewable by everyone" on public.restaurants for select using (true);
-- To allow inserting usually you'd check a role, for now we leave insert policy closed (or allow authenticated if you want)

-- Menu Items: Everyone can read
create policy "Menu items are viewable by everyone" on public.menu_items for select using (true);

-- Orders: Users can seeing their own orders
create policy "Users can see their own orders" on public.orders for select using (auth.uid() = user_id);
create policy "Users can create their own orders" on public.orders for insert with check (auth.uid() = user_id);

-- Order Items: Users can see items belonging to their orders
create policy "Users can see their own order items" on public.order_items for select using (
  exists ( select 1 from public.orders where id = order_items.order_id and user_id = auth.uid() )
);
create policy "Users can insert their own order items" on public.order_items for insert with check (
  exists ( select 1 from public.orders where id = order_items.order_id and user_id = auth.uid() )
);

-- Insert Mock Data (Optional, matching some of your static data)
insert into public.restaurants (name, rating, review_count, price_range, type, address, delivery_time, min_order, status, is_trending)
values 
('Rasoi Restaurant', 3.8, 775, '₹200–400', 'Fast Food', 'Infront of Pt, JLN College, Kobiya', '30-40 min', '₹100', 'Closed · Opens 9 am Sat', true),
('Hotel Sapphire Restaurant', 3.8, 204, '₹300–500', 'Restaurant', 'Professor Colony, Raipur road', '25-35 min', '₹150', 'Open Now', false);
