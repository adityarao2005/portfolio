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
import multer from "multer";
//For env File
dotenv.config();
import "@/db/config";
import { uploadImage } from "@/helpers/helpers";
import imageRoutes from "@/routes/image-routes";

//Express
const app: Application = express();
const port = process.env.PORT || 8000;

const multerMid = multer({
	storage: multer.memoryStorage(),
	limits: {
		fileSize: 10 * 1024 * 1024,
	},
});

//DataStore

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multerMid.single("file"));
app.disable("x-powered-by");

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
	res.status(500).json({
		error: err,
		message: "Internal server error!",
	});
	console.error(err);
	next();
});

app.use(ReadOnlyFactory("/api/upload-image", imageRoutes));
app.use(ReadOnlyFactory("/api/projects", router_helper(ProjectStore)));
app.use(ReadOnlyFactory("/api/artworks", router_helper(ArtworkStore)));
app.use(InsertOnlyFactory("/api/messages", router_helper(MessageStore)));

app.listen(port, () => {
	console.log(`Server is Fire at http://localhost:${port}`);
});
