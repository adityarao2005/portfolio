import { list, put } from "@vercel/blob";
import { NextResponse } from "next/server";

function getSecureKey() {
	return process.env.MASTER_CLIENT_KEY;
}

function getBearerToken(req: Request): string | undefined {
	const authorizationHeader = req.headers.get("authorization");
	if (authorizationHeader && typeof authorizationHeader === "string") {
		const [bearer, token] = authorizationHeader.split(" ");
		if (bearer.toLowerCase() === "bearer") {
			return token;
		}
	}
	return undefined;
}

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const folder = searchParams.get("folder");
	if (folder) {
		const { blobs } = await list({ prefix: folder });
		return Response.json(blobs);
	} else {
        const { folders } = await list({mode: "folded"});
        return Response.json(folders);
    }
}

export async function POST(request: Request): Promise<NextResponse> {
	if (getBearerToken(request) !== getSecureKey()) {
		NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const data = await request.formData();
	const file: File = data.get("file") as File;
	const folder: string = data.get("folder") as string;

	const blob = await put(folder + "/" + file.name, file, {
		access: "public",
	});
	return NextResponse.json(blob);
}
