import { createClient } from '@supabase/supabase-js';

const options = {
  db: {
    schema: 'public',
  },
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
  global: {
    headers: { 'x-my-custom-header': 'my-app-name' },
  },
};

export const databaseProviders = [
  {
    provide: 'SUPABASE',
    useFactory: async () => {
      const supabase = createClient(
        'https://xyzcompany.supabase.co',
        'public-anon-key',
        options,
      );

      return supabase;
    },
  },
];
