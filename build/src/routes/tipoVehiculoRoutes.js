"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoVehiculoController_1 = __importDefault(require("../controller/tipoVehiculoController"));
class DiaRuter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/getTipoVehiculo', tipoVehiculoController_1.default.getTipoVehiculo);
    }
}
const diaRouter = new DiaRuter();
exports.default = diaRouter.router;
