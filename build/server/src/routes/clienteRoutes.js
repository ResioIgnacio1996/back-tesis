"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clienteController_1 = __importDefault(require("../controller/clienteController"));
const clienteController_2 = __importDefault(require("../controller/clienteController"));
class ClienteRuter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //  this.router.get('/', (req,res) => res.send('usuario'))
        this.router.get('/login/:usuario/:contrasenia', clienteController_1.default.loginCliente);
        this.router.get('/getEmpresa/:idTipoVehiculo', clienteController_1.default.getEmpresa);
        this.router.get('/getCliente/:usuario', clienteController_1.default.getCliente);
        this.router.post('/saveCliente', clienteController_2.default.saveCliente);
        this.router.put('/updateCliente/:pusuario/:nombre/:contrasenia/:usuario/:idTipoVehiculo/:documento', clienteController_2.default.updateCliente);
        /*  this.router.delete('/:id', perosnaController.deleted)
          this.router.put('/:id', perosnaController.update)*/
    }
}
const clienteRoutes = new ClienteRuter();
exports.default = clienteRoutes.router;
