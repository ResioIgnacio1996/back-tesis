"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comentarioController_1 = __importDefault(require("../controller/comentarioController"));
class ComentarioRuter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/getComentario', comentarioController_1.default.getComentario);
        this.router.post('/saveComentario', comentarioController_1.default.saveComentario);
    }
}
const comentarioRuter = new ComentarioRuter();
exports.default = comentarioRuter.router;
