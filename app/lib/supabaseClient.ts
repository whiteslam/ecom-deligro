import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://kxqriijmmwcjbsqhzetp.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_ZZiTK0nPBOY3n6C1Tm5oIA_XD6AIQ4h';

export const supabase = createClient(supabaseUrl, supabaseKey);
