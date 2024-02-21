import util from "util";
import gc from "@/config";

const bucket = gc.bucket("image-bucket-4410");

/**
 *
 * @param { File } object file object that will be uploaded
 * @description - This function does the following
 * - It uploads a file to the image bucket on Google Cloud
 * - It accepts an object as an argument with the
 *   "originalname" and "buffer" as keys
 */

export const uploadImage = (file: any) =>
	new Promise((resolve, reject) => {
		const { originalname, buffer } = file;

		const blob = bucket.file(originalname.replace(/ /g, "_"));
		const blobStream = blob.createWriteStream({
			resumable: false,
		});
		blobStream
			.on("finish", () => {
				const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
				resolve(publicUrl);
			})
			.on("error", (err) => {
				console.error(err);
				reject(`Unable to upload image, something went wrong`);
			})
			.end(buffer);
	});
