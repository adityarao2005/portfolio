import express, { Router } from "express";
import { Document, Model } from "mongoose";
import { IStore } from "@/models/datastore";

export default function restRouterFactory<T extends Document>(
	contextPath: String,
	name: String,
	datastore: IStore<T>
): Router {
	const router = Router();
	const path = `${contextPath}/${name}`;

	// GET ${contextPath}/${name}
	router.get(path, (req, res) => {
		res.status(200).json(datastore.findAll());
	});

	// GET ${contextPath}/${name}/:id
	router.get(`${path}/:id`, (req, res) => {
		let result = datastore.findById(req.params.id);
		if (result) {
			res.status(200).json(result);
		} else {
			res.sendStatus(404);
		}
	});

	// POST ${contextPath}/${name}
	router.post(path, (req, res) => {
		datastore.saveBody(req.body);
		res.sendStatus(201);
	});

	// PUT ${contextPath}/${name}/:id
	router.put(`${path}/:id`, (req, res) => {
		const result = datastore.update(req.params.id, req.body);
		if (result) {
			res.status(200).json(result);
		} else {
			res.status(404);
		}
	});

	// PATCH ${contextPath}/${name}/:id
	router.patch(`${path}/:id`, (req, res) => {
		const result = datastore.updateBody(req.params.id, req.body);
		if (result) {
			res.status(200).json(result);
		} else {
			res.status(404);
		}
	});

	// DELETE ${contextPath}/${name}/:id
	router.delete(`${path}/:id`, (req, res) => {
		const result = datastore.delete(req.params.id);
		if (result) {
			res.status(200).json(result);
		} else {
			res.sendStatus(404);
		}
	});

	// Return the router
	return router;
}
