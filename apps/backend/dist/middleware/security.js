"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertOnlyFactory = exports.ReadOnlyFactory = void 0;
const express_1 = require("express");
function getSecureKey() {
    return process.env.MASTER_CLIENT_KEY;
}
function getBearerToken(req) {
    const authorizationHeader = req.headers["authorization"];
    if (authorizationHeader && typeof authorizationHeader === "string") {
        const [bearer, token] = authorizationHeader.split(" ");
        if (bearer.toLowerCase() === "bearer") {
            return token;
        }
    }
    return undefined;
}
function ReadOnlyFactory(contextPath, restRouter) {
    const router = (0, express_1.Router)();
    router.use(contextPath, (req, res, next) => {
        if (getBearerToken(req) !== getSecureKey() && req.method !== "GET") {
            res.status(401).send("Unauthorized");
        }
        else {
            next();
        }
    });
    router.use(contextPath, restRouter);
    return router;
}
exports.ReadOnlyFactory = ReadOnlyFactory;
function InsertOnlyFactory(contextPath, restRouter) {
    const router = (0, express_1.Router)();
    router.use(contextPath, (req, res, next) => {
        if (getBearerToken(req) !== getSecureKey() && req.method !== "POST") {
            res.status(401).send("Unauthorized");
        }
        else {
            next();
        }
    });
    router.use(contextPath, restRouter);
    return router;
}
exports.InsertOnlyFactory = InsertOnlyFactory;
