import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import router_helper from "@/routes/api-routes";
import { InsertOnlyFactory, ReadOnlyFactory } from "@/middleware/security";
import { ArtworkStore, MessageStore, ProjectStore } from "@/models/datastore";
//For env File
dotenv.config();
import "@/db/config";

console.log(process.env.MONGO_URL);

//Express
const app: Application = express();
const port = process.env.PORT || 8000;

//DataStore

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(ReadOnlyFactory(router_helper("/api", "projects", ProjectStore)));
app.use(ReadOnlyFactory(router_helper("/api", "artworks", ArtworkStore)));
app.use(InsertOnlyFactory(router_helper("/api", "messages", MessageStore)));

app.listen(port, () => {
	console.log(`Server is Fire at http://localhost:${port}`);
});
