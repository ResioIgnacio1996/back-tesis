"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empresaCotroller_1 = __importDefault(require("../controller/empresaCotroller"));
class DiaRuter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        console.log();
        //  this.router.get('/', (req,res) => res.send('usuario'))
        this.router.get('/loginEmpresa/:usuario/:contrasenia', empresaCotroller_1.default.loginEmpresa);
        this.router.post('/saveEmpresa', empresaCotroller_1.default.saveEmpresa);
        this.router.get('/getEmpresa/:empresa', empresaCotroller_1.default.getEmpresa);
        /*  this.router.delete('/:id', perosnaController.deleted)
          this.router.put('/:id', perosnaController.update)*/
    }
}
const diaRouter = new DiaRuter();
exports.default = diaRouter.router;
