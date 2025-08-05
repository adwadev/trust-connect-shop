-- Ensure admin user exists and disable email confirmation globally
-- Insert admin user into auth.users if not exists (this should be done via Supabase dashboard)
-- But we can create the profile entry

-- First, let's create an admin profile entry with a known user ID
INSERT INTO public.profiles (id, role, full_name) 
VALUES ('00000000-0000-0000-0000-000000000001'::uuid, 'system_admin', 'System Admin')
ON CONFLICT (id) DO NOTHING;

-- Update email confirmation settings for all existing users
-- Note: Email confirmation is typically handled at the project level in Supabase
-- We'll need to manually create the admin user in auth.users via dashboard