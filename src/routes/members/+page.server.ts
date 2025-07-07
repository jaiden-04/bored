import { supabase } from "$lib/supabaseClient";

export async function load() {
  let { data: users, error } = await supabase
    .from('users')
    .select('*')
  
  if (error) {
    console.error('Error fetching users:', error)
    return { users: [], error }
  }
  
  return { users }
}