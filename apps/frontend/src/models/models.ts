// Project model
export class Project {
	name: string;
	description: string;
	image: string;
	link: string;
	details: ProjectDetails;
	constructor(
		name: string,
		description: string,
		image: string,
		link: string | null,
		details: ProjectDetails
	) {
		this.name = name;
		this.description = description;
		this.image = image;
		this.link = link ? link : "";
		this.details = details;
	}
}

// Project details model
export class ProjectDetails {
	event: string;
	position: string;
	startDate: string;
	endDate: string;
	github: string;
	collaborators: string[];
	awards: string[];
	skills: string[];
	tools: string[];

	constructor(
		event: string,
		position: string | null,
		startDate: string,
		endDate: string,
		github: string | null,
		collaborators: string[] | null,
		awards: string[] | null,
		skills: string[] | null,
		tools: string[]
	) {
		this.event = event;
		this.position = position ? position : "";
		this.startDate = startDate;
		this.endDate = endDate;
		this.github = github ? github : "";
		this.collaborators = collaborators ? collaborators : [];
		this.awards = awards ? awards : [];
		this.skills = skills ? skills : [];
		this.tools = tools;
	}
}

export class Artwork {
	name: string;
	image: string;
	completionDate: string;
	type: string;
	description: string;
	orientation: string;
	constructor(
		image: string,
		name?: string,
		completionDate?: string,
		type?: string,
		description?: string,
		orientation = "landscape"
	) {
		this.name = name ? name : "";
		this.image = image;
		this.completionDate = completionDate ? completionDate : "";
		this.type = type ? type : "";
		this.description = description ? description : "";
		this.orientation = orientation;
	}
}

export class Message {
	name: string;
	email: string;
	message: string;
	subject: string;
	constructor(name: string, email: string, message: string, subject: string) {
		this.name = name;
		this.email = email;
		this.message = message;
		this.subject = subject;
	}
}
