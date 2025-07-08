import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data, error } = await supabase.from('users').select('*');
	const users = data; // ignore ts (this)

	console.log(users, error);

	if (error) {
		console.error('Error fetching users:', error);
		return { users: [], error };
	}

	return { users };
}
