"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = exports.Artwork = exports.Project = exports.ProjectDetails = void 0;
const mongoose_1 = require("mongoose");
const projectDetailsSchema = new mongoose_1.Schema({
    event: { type: String, required: true },
    position: String,
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    github: String,
    collaborators: [String],
    awards: [String],
    skills: [String],
    tools: [String],
});
exports.ProjectDetails = (0, mongoose_1.model)("ProjectDetails", projectDetailsSchema);
const projectSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    link: String,
    details: projectDetailsSchema,
});
exports.Project = (0, mongoose_1.model)("Project", projectSchema);
const artworkSchema = new mongoose_1.Schema({
    name: String,
    image: { type: String, required: true },
    completionDate: String,
    type: String,
    description: String,
    orientation: { type: String, required: true },
});
exports.Artwork = (0, mongoose_1.model)("Artwork", artworkSchema);
const messageSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    subject: { type: String, required: true },
    read: { type: Boolean, default: false },
    sentAt: { type: Date, default: Date.now },
});
exports.Message = (0, mongoose_1.model)("Message", messageSchema);
//# sourceMappingURL=models.js.map