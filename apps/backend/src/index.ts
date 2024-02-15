import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import router from "@/router";
import router_helper from "@/routes/api-routes";
import { ArtworkStore, MessageStore, ProjectStore } from "@/models/datastore";

//For env File
dotenv.config();

//Express
const app: Application = express();
const port = process.env.PORT || 8000;

//DataStore

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(router_helper("/api", "projects", ProjectStore));
app.use(router_helper("/api", "artworks", ArtworkStore));
app.use(router_helper("/api", "messages", MessageStore));
app.get("/", (req: Request, res: Response) => {
	res.send("Welcome to Express & TypeScript Server");
});

app.listen(port, () => {
	console.log(`Server is Fire at http://localhost:${port}`);
});
