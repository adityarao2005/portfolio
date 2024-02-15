import { Schema, model, connect, Document } from "mongoose";

// Project details model
export interface IProjectDetails extends Document {
	event: string;
	position: string;
	startDate: string;
	endDate: string;
	github: string;
	collaborators: string[];
	awards: string[];
	skills: string[];
	tools: string[];
}

const projectDetailsSchema = new Schema<IProjectDetails>({
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

export const ProjectDetails = model<IProjectDetails>(
	"ProjectDetails",
	projectDetailsSchema
);

// Project model
export interface IProject extends Document {
	name: string;
	description: string;
	image: string;
	link: string;
	details: IProjectDetails;
}

const projectSchema = new Schema<IProject>({
	name: { type: String, required: true },
	description: { type: String, required: true },
	image: { type: String, required: true },
	link: String,
	details: projectDetailsSchema,
});

export const Project = model<IProject>("Project", projectSchema);

export interface IArtwork extends Document {
	name: string;
	image: string;
	completionDate: string;
	type: string;
	description: string;
	orientation: string;
}

const artworkSchema = new Schema<IArtwork>({
	name: String,
	image: { type: String, required: true },
	completionDate: String,
	type: String,
	description: String,
	orientation: { type: String, required: true },
});

export const Artwork = model<IArtwork>("Artwork", artworkSchema);

export interface IMessage extends Document {
	name: string;
	email: string;
	message: string;
	subject: string;
}

const messageSchema = new Schema<IMessage>({
	name: { type: String, required: true },
	email: { type: String, required: true },
	message: { type: String, required: true },
	subject: { type: String, required: true },
});

export const Message = model<IMessage>("Message", messageSchema);
