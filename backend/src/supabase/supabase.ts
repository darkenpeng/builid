import { createClient } from '@supabase/supabase-js';

const options = {
  db: {
    schema: 'public',
  },
  //   auth: {
  //     autoRefreshToken: true,
  //     persistSession: true,
  //     detectSessionInUrl: true,
  //   },
};

export const SupabaseProvider = {
  provide: 'SUPABASE',
  useFactory: async () => {
    const supabase = createClient(
      process.env.PROJECT_URL,
      process.env.API_KEY,
      options,
    );
    return supabase;
  },
};
