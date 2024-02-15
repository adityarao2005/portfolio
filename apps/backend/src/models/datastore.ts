import {
	IMessage,
	IArtwork,
	IProject,
	Message,
	Project,
	Artwork,
} from "@/models/models";
import { Document, Model } from "mongoose";
import { ParsedQs } from "qs";

type Query = ParsedQs;

export interface IStore<T extends Document> {
	findAll(): T[];
	findById(id: string): T | null;
	findAllByQuery(query: Query): T[];
	save(value: T): void;
	saveBody(body: any): void;
	update(id: string, value: T): T | null;
	updateBody(id: string, body: any): T | null;
	delete(id: string): T | null;
}

export class MemoryStore<T extends Document> implements IStore<T> {
	private store: T[];
	private model: Model<T>;

	constructor(model: Model<T>) {
		this.store = [];
		this.model = model;
	}

	// WORKS
	findAll(): T[] {
		return this.store;
	}

	// WORKS
	findById(id: string): T | null {
		return this.store.find((value) => value._id == id) || null;
	}

	// HAVENT TESTED
	findAllByQuery(query: Query): T[] {
		return this.store.filter((value) => {
			for (const key in query) {
				if (value.get(key) !== query[key]) {
					return false;
				}
			}
			return true;
		});
	}

	// WORKS
	save(value: T): void {
		this.store.push(value);
	}

	// WORKS
	saveBody(body: any): void {
		console.log(body);
		if (Array.isArray(body)) {
			for (const item of body) {
				this.store.push(new this.model(item));
			}
			return;
		} else {
			this.store.push(new this.model(body));
		}
	}

	// TESTING
	update(id: string, value: T): T | null {
		const index = this.store.findIndex((value) => value._id == id);
		if (index === -1) {
			return null;
		}
		this.store[index] = new this.model(value);
		return value;
	}

	updateBody(id: string, body: any): T | null {
		const index = this.store.findIndex((value) => value._id == id);
		if (index === -1) {
			return null;
		}
		for (const key in body) {
			this.store[index].set(key, body[key]);
		}
		return this.store[index];
	}

	delete(id: string): T | null {
		const index = this.store.findIndex((value) => value._id == id);
		if (index === -1) {
			return null;
		}
		return this.store.splice(index, 1)[0];
	}
}

export const MessageStore = new MemoryStore<IMessage>(Message);
export const ProjectStore = new MemoryStore<IProject>(Project);
export const ArtworkStore = new MemoryStore<IArtwork>(Artwork);
