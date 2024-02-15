import express, { Router } from "express";

const router = Router();

router.get("/hello", (req, res) => {
	res.send("Welcome to Express & TypeScript Server!");
});

export default router;
