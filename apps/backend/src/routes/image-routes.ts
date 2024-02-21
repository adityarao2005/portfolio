import express, { Router } from "express";
import { uploadImage } from "@/helpers/helpers";
const router = Router();

router.post("/", async (req, res, next) => {
	try {
		const myFile = req.file;
		const imageUrl = await uploadImage(myFile);
		res.status(200).json({
			message: "Upload was successful",
			data: imageUrl,
		});
	} catch (error) {
		next(error);
	}
});

export default router;
