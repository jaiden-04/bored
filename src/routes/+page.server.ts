import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

type User = {
  id: number;
  name: string;
};

export const load: PageServerLoad = async () => {
  const { data, error } = await supabase.from('users').select<any, User>();

  if (error) {
    console.error('Error loading users:', error.message);
    return { users: [] };
  }

  console.log('Success! : ', data);

  return {
    users: data ?? [],
  };
};