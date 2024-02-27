import express, {
	Express,
	Request,
	Response,
	Application,
	NextFunction,
	ErrorRequestHandler,
} from "express";
import dotenv from "dotenv";
import router_helper from "@/routes/api-routes";
import { InsertOnlyFactory, ReadOnlyFactory } from "@/middleware/security";
import { ArtworkStore, MessageStore, ProjectStore } from "@/models/datastore";
import cors from "cors";
//For env File
dotenv.config();
import "@/db/config";

//Express
const app: Application = express();
const port = process.env.PORT || 8000;

//DataStore

//Body Parser
app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable("x-powered-by");

app.get("/", (req, res) => {
	res.send("Express on Vercel 2");
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
	res.status(500).json({
		error: err,
		message: "Internal server error!",
	});
	console.error(err);
	next();
});

app.use(ReadOnlyFactory("/api/projects", router_helper(ProjectStore)));
app.use(ReadOnlyFactory("/api/artworks", router_helper(ArtworkStore)));
app.use(InsertOnlyFactory("/api/messages", router_helper(MessageStore)));

app.listen(port, () => {
	console.log(`Server is Fire at http://localhost:${port}`);
});
