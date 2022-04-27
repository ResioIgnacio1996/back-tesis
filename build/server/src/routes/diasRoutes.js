"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const diasController_1 = __importDefault(require("../controller/diasController"));
class DiaRuter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //  this.router.get('/', (req,res) => res.send('usuario'))
        this.router.get('/getDia', diasController_1.default.getDia);
        /*  this.router.delete('/:id', perosnaController.deleted)
          this.router.put('/:id', perosnaController.update)*/
    }
}
const diaRouter = new DiaRuter();
exports.default = diaRouter.router;
