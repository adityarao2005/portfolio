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
		datastore.findAll().then((result) => {
			res.status(200).json(result);
		});
	});

	// GET ${contextPath}/${name}/:id
	router.get(`${path}/:id`, (req, res) => {
		datastore
			.findById(req.params.id)
			.then(
				(result) => {
					res.status(200).json(result);
				},
				(id) => res.sendStatus(404)
			)
			.catch((id) => {
				res.sendStatus(404);
			});
	});

	// POST ${contextPath}/${name}
	router.post(path, (req, res) => {
		datastore.saveBody(req.body);
		res.sendStatus(201);
	});

	// PUT ${contextPath}/${name}/:id
	router.put(`${path}/:id`, (req, res) => {
		datastore.update(req.params.id, req.body).then(
			(result) => {
				res.status(200).json(result);
			},
			(id) => res.sendStatus(404)
		);
	});

	// PATCH ${contextPath}/${name}/:id
	router.patch(`${path}/:id`, (req, res) => {
		datastore.updateBody(req.params.id, req.body).then(
			(result) => {
				res.status(200).json(result);
			},
			(id) => res.sendStatus(404)
		);
	});

	// DELETE ${contextPath}/${name}/:id
	router.delete(`${path}/:id`, (req, res) => {
		datastore.delete(req.params.id).then(
			(result) => {
				res.status(200).json(result);
			},
			(id) => res.sendStatus(404)
		);
	});

	// DELETE ${contextPath}/${name}
	router.delete(path, (req, res) => {
		datastore.deleteAll().then(
			(result) => res.sendStatus(200),
			(id) => res.sendStatus(404)
		);
	});

	// Return the router
	return router;
}
