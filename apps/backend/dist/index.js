"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const api_routes_1 = __importDefault(require("./routes/api-routes"));
const security_1 = require("./middleware/security");
const datastore_1 = require("./models/datastore");
const cors_1 = __importDefault(require("cors"));
//For env File
dotenv_1.default.config();
require("./db/config");
//Express
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
//DataStore
//Body Parser
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.disable("x-powered-by");
app.get("/", (req, res) => {
    res.send("Express on Vercel 2");
});
app.use((0, security_1.ReadOnlyFactory)("/api/projects", (0, api_routes_1.default)(datastore_1.ProjectStore)));
app.use((0, security_1.ReadOnlyFactory)("/api/artworks", (0, api_routes_1.default)(datastore_1.ArtworkStore)));
app.use((0, security_1.InsertOnlyFactory)("/api/messages", (0, api_routes_1.default)(datastore_1.MessageStore)));
app.use((err, req, res, next) => {
    res.status(500).json({
        error: err,
        message: "Internal server error!",
    });
    console.error(err);
    next();
});
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map