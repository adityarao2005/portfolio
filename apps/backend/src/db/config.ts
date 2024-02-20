// config with mongoose
import mongoose from "mongoose";

// GET MONGO URL FROM ENVIRONMENT
const uri: string = process.env.MONGO_URL || "";

// CONNECT TO MONGO
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
mongoose.connect(uri).catch(function (err) {
	console.log("Something went wrong");
});
