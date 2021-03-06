"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clienteController_1 = __importDefault(require("../controller/clienteController"));
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
        this.router.post('/saveCliente', clienteController_1.default.saveCliente);
        this.router.put('/updateCliente/:pusuario/:nombre/:contrasenia/:usuario/:idTipoVehiculo/:documento', clienteController_1.default.updateCliente);
        this.router.post('/saveViaje', clienteController_1.default.saveViaje)
        this.router.get('/getUltimaNotificacion/:cliente/:idEmpresa/:idViaje', clienteController_1.default.getUltimaNotificacion)
        this.router.get('/getAllNotificacion/:cliente/:idEmpresa/:idViaje', clienteController_1.default.getAllNotificacion)
        this.router.post('/saveNotificacion', clienteController_1.default.saveNotificacion)
        this.router.put('/updateEstadoViaje/:idViaje/:estado', clienteController_1.default.updateEstadoViaje)
        this.router.put('/updateToken/:token/:usuario', clienteController_1.default.updateToken)
        this.router.get('/getViajeByClienteEmpresa/:empresa/:usuario', clienteController_1.default.getViajeByClienteEmpresa)
        this.router.get('/getClienteByid/:idCliente', clienteController_1.default.getClientByid)
        this.router.put('/setMotivoCancelacion/:idViaje/:idMotivoCancelacion', clienteController_1.default.setMotivoCancelacion)
        this.router.get('/getUltomoViajeByidCliente/:idCliente', clienteController_1.default.getIdUltimoViajeByidCliente)
        this.router.get('/getDetalleViaje/:idViaje', clienteController_1.default.getDetalleViaje)
        this.router.get('/getViajesSolicitados/:idCliente/:idEmpresa', clienteController_1.default.getViajesSolcitados)
        this.router.put('/setVistoCliente/:idCliente/:idEmpresa', clienteController_1.default.setVistoClienteNotificacion);
        this.router.get('/getNotificacionesNoLeidas/:idCliente', clienteController_1.default.getNotificacionesNoLeidas)

    }
}
const clienteRoutes = new ClienteRuter();
exports.default = clienteRoutes.router;
