import {
	IMessage,
	IArtwork,
	IProject,
	Message,
	Project,
	Artwork,
} from "@/models/models";
import { Document, FilterQuery, Model } from "mongoose";
import { ParsedQs } from "qs";

type Query = ParsedQs;

export interface IStore<T extends Document> {
	findAll(): Promise<T[]>;
	findById(id: string): Promise<T>;
	findAllByQuery(query: Query): Promise<T[]>;
	save(value: T): Promise<void>;
	saveBody(body: any): Promise<void>;
	update(id: string, value: T): Promise<T>;
	updateBody(id: string, body: any): Promise<T>;
	delete(id: string): Promise<T>;
	deleteAll(): Promise<void>;
}

export class MemoryStore<T extends Document> implements IStore<T> {
	private store: T[];
	private model: Model<T>;

	constructor(model: Model<T>) {
		this.store = [];
		this.model = model;
	}

	// WORKS
	findAll(): Promise<T[]> {
		return new Promise((myResolve) => {
			myResolve(this.store);
		});
	}

	// WORKS
	findById(id: string): Promise<T> {
		return new Promise((myResolve, myReject) => {
			let value = this.store.find((value) => value._id == id);
			if (value != undefined) {
				myResolve(value);
			} else {
				myReject(id);
			}
		});
	}

	// HAVENT TESTED
	findAllByQuery(query: Query): Promise<T[]> {
		return new Promise((resolve) => {
			const results = this.store.filter((value) => {
				for (const key in query) {
					if (value.get(key) !== query[key]) {
						return false;
					}
				}
				return true;
			});
			resolve(results);
		});
	}

	// WORKS
	save(value: T): Promise<void> {
		return new Promise((resolve) => {
			this.store.push(value);
			resolve();
		});
	}

	// WORKS
	saveBody(body: any): Promise<void> {
		return new Promise((resolve) => {
			if (Array.isArray(body)) {
				for (const item of body) {
					this.store.push(new this.model(item));
				}
				resolve();
			} else {
				this.store.push(new this.model(body));
				resolve();
			}
		});
	}

	// TESTING
	update(id: string, value: T): Promise<T> {
		return new Promise((resolve, reject) => {
			const index = this.store.findIndex((value) => value._id == id);
			if (index === -1) {
				reject(id);
			} else {
				this.store[index] = new this.model(value);
				resolve(this.store[index]);
			}
		});
	}

	updateBody(id: string, body: any): Promise<T> {
		return new Promise((resolve, reject) => {
			const index = this.store.findIndex((value) => value._id == id);
			if (index === -1) {
				reject(index);
			} else {
				for (const key in body) {
					this.store[index].set(key, body[key]);
				}
				resolve(this.store[index]);
			}
		});
	}

	delete(id: string): Promise<T> {
		return new Promise((resolve, reject) => {
			const index = this.store.findIndex((value) => value._id == id);
			if (index === -1) {
				reject(id);
			} else resolve(this.store.splice(index, 1)[0]);
		});
	}

	deleteAll(): Promise<void> {
		return new Promise((resolve) => {
			this.store = [];
			resolve();
		});
	}
}

export class DatabaseStore<T extends Document> implements IStore<T> {
	private model: Model<T>;

	constructor(model: Model<T>) {
		this.model = model;
	}

	async findAll(): Promise<T[]> {
		return await this.model.find();
	}

	findById(id: string): Promise<T> {
		return new Promise(async (resolve, reject) => {
			let value = await this.model.findById(id);
			if (value != undefined) {
				resolve(value);
			} else {
				reject(id);
			}
		});
	}

	async findAllByQuery(query: ParsedQs): Promise<T[]> {
		let query0: { [key: string]: any } = {};
		for (const key in query) {
			query0[key] = query[key];
		}
		return await this.model.find(query0 as FilterQuery<T>);
	}

	async save(value: T): Promise<void> {
		await value.save();
	}

	async saveBody(body: any): Promise<void> {
		if (Array.isArray(body)) {
			for (const item of body) {
				await this.model.create(item);
			}
			return;
		} else {
			await this.model.create(body);
		}
	}

	update(id: string, value: T): Promise<T> {
		return this.updateBody(id, value);
	}

	updateBody(id: string, body: any): Promise<T> {
		return new Promise(async (resolve, reject) => {
			let result = await this.model.findByIdAndUpdate(id, body, {
				new: true,
			});
			if (result != undefined) {
				resolve(result);
			} else {
				reject(id);
			}
		});
	}

	delete(id: string): Promise<T> {
		return new Promise(async (resolve, reject) => {
			let result = await this.model.findByIdAndDelete(id);
			if (result != undefined) {
				resolve(result);
			} else {
				reject(id);
			}
		});
	}

	async deleteAll(): Promise<void> {
		await this.model.deleteMany({});
	}
}

export const MessageStore = new DatabaseStore<IMessage>(Message);
export const ProjectStore = new DatabaseStore<IProject>(Project);
export const ArtworkStore = new DatabaseStore<IArtwork>(Artwork);
