"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkStore = exports.ProjectStore = exports.MessageStore = exports.DatabaseStore = exports.MemoryStore = void 0;
const models_1 = require("../models/models");
class MemoryStore {
    constructor(model) {
        this.store = [];
        this.model = model;
    }
    // WORKS
    findAll() {
        return new Promise((myResolve) => {
            myResolve(this.store);
        });
    }
    // WORKS
    findById(id) {
        return new Promise((myResolve, myReject) => {
            let value = this.store.find((value) => value._id == id);
            if (value != undefined) {
                myResolve(value);
            }
            else {
                myReject(id);
            }
        });
    }
    // HAVENT TESTED
    findAllByQuery(query) {
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
    save(value) {
        return new Promise((resolve) => {
            this.store.push(value);
            resolve();
        });
    }
    // WORKS
    saveBody(body) {
        return new Promise((resolve) => {
            if (Array.isArray(body)) {
                for (const item of body) {
                    this.store.push(new this.model(item));
                }
                resolve();
            }
            else {
                this.store.push(new this.model(body));
                resolve();
            }
        });
    }
    // TESTING
    update(id, value) {
        return new Promise((resolve, reject) => {
            const index = this.store.findIndex((value) => value._id == id);
            if (index === -1) {
                reject(id);
            }
            else {
                this.store[index] = new this.model(value);
                resolve(this.store[index]);
            }
        });
    }
    updateBody(id, body) {
        return new Promise((resolve, reject) => {
            const index = this.store.findIndex((value) => value._id == id);
            if (index === -1) {
                reject(index);
            }
            else {
                for (const key in body) {
                    this.store[index].set(key, body[key]);
                }
                resolve(this.store[index]);
            }
        });
    }
    delete(id) {
        return new Promise((resolve, reject) => {
            const index = this.store.findIndex((value) => value._id == id);
            if (index === -1) {
                reject(id);
            }
            else
                resolve(this.store.splice(index, 1)[0]);
        });
    }
    deleteAll() {
        return new Promise((resolve) => {
            this.store = [];
            resolve();
        });
    }
}
exports.MemoryStore = MemoryStore;
class DatabaseStore {
    constructor(model) {
        this.model = model;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.find();
        });
    }
    findById(id) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            let value = yield this.model.findById(id);
            if (value != undefined) {
                resolve(value);
            }
            else {
                reject(id);
            }
        }));
    }
    findAllByQuery(query) {
        return __awaiter(this, void 0, void 0, function* () {
            let query0 = {};
            for (const key in query) {
                query0[key] = query[key];
            }
            return yield this.model.find(query0);
        });
    }
    save(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield value.save();
        });
    }
    saveBody(body) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Array.isArray(body)) {
                for (const item of body) {
                    yield this.model.create(item);
                }
                return;
            }
            else {
                yield this.model.create(body);
            }
        });
    }
    update(id, value) {
        return this.updateBody(id, value);
    }
    updateBody(id, body) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            let result = yield this.model.findByIdAndUpdate(id, body, {
                new: true,
            });
            if (result != undefined) {
                resolve(result);
            }
            else {
                reject(id);
            }
        }));
    }
    delete(id) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            let result = yield this.model.findByIdAndDelete(id);
            if (result != undefined) {
                resolve(result);
            }
            else {
                reject(id);
            }
        }));
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.deleteMany({});
        });
    }
}
exports.DatabaseStore = DatabaseStore;
exports.MessageStore = new DatabaseStore(models_1.Message);
exports.ProjectStore = new DatabaseStore(models_1.Project);
exports.ArtworkStore = new DatabaseStore(models_1.Artwork);
