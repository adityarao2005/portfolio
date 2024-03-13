import { Artwork, Message } from "@/models/models";

export function getDataStore(): string {
	return "https://portfolio-backend-neon-five.vercel.app";
}

export function getArtwork(): Promise<Artwork[]> {
	return fetch(`${getDataStore()}/api/artworks`, {
		method: "GET",
	})
		.then((response) => response.json())
		.then((data) => data as Artwork[]);
}

export async function postMessage(message: Message): Promise<Response> {
	return await fetch(`${getDataStore()}/api/messages`, {
		method: "POST",
		body: JSON.stringify(message),
		headers: {
			"Content-Type": "application/json",
		},
	});
}
