import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */

export async function GET({ params }) {
    return new Response("Test sitenotice", {
        status: 200,
        headers: {
            'Content-Type': 'text/plain'
        }
    });
}