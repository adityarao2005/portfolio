import express, { Router } from "express";

function getSecureKey() {
	return process.env.MASTER_CLIENT_KEY;
}

function getBearerToken(req: express.Request): string | undefined {
	const authorizationHeader = req.headers["authorization"];
	if (authorizationHeader && typeof authorizationHeader === "string") {
		const [bearer, token] = authorizationHeader.split(" ");
		if (bearer.toLowerCase() === "bearer") {
			return token;
		}
	}
	return undefined;
}

export function ReadOnlyFactory(contextPath: string, restRouter: Router) {
	const router = Router();
	router.use(contextPath, (req, res, next) => {
		if (getBearerToken(req) !== getSecureKey() && req.method !== "GET") {
			res.status(401).send("Unauthorized");
		} else {
			next();
		}
	});
	router.use(contextPath, restRouter);
	return router;
}

export function InsertOnlyFactory(contextPath: string, restRouter: Router) {
	const router = Router();
	router.use(contextPath, (req, res, next) => {
		if (getBearerToken(req) !== getSecureKey() && req.method !== "POST") {
			res.status(401).send("Unauthorized");
		} else {
			next();
		}
	});
	router.use(contextPath, restRouter);
	return router;
}
