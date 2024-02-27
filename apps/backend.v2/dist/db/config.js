"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// config with mongoose
const mongoose_1 = __importDefault(require("mongoose"));
// GET MONGO URL FROM ENVIRONMENT
const uri = process.env.MONGO_URL || "";
// CONNECT TO MONGO
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
mongoose_1.default.connect(uri).catch(function (err) {
    console.log("Something went wrong");
});
//# sourceMappingURL=config.js.map