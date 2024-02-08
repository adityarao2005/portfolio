import hi from "@/controllers/hi";
import { Request, Response } from "express";
var express = require("express");
const next = require("next");

const isDev = process.env.NODE_ENV !== "production";
const app = next({ isDev });
const handle = app.getRequestHandler();
const server = express();

app.prepare()
	.then(() => {
		console.log("Hi");
		server.get("/api/hi", (req: Request, res: Response) => {
			console.log("Hey");
			return hi(req, res);
		});
		server.get("/app/*", (req: Request, res: Response) => {
			console.log("Hi");
			return handle(req, res);
		});
		server.listen(3000, (err: any) => {
			if (err) throw err;
			console.log("server ready on port 3000");
		});
	})
	.catch((exception: any) => {
		console.error(exception.stack);
		process.exit(1);
	});
