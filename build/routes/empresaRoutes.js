var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empresaCotroller_1 = __importDefault(require("../controller/empresaCotroller"));
class EmpresaRuter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {  
        //  this.router.get('/', (req,res) => res.send('usuario'))
        this.router.get('/loginEmpresa/:usuario/:contrasenia', empresaCotroller_1.default.loginEmpresa);
        this.router.post('/saveEmpresa', empresaCotroller_1.default.saveEmpresa);
        this.router.get('/getEmpresa/:usuario', empresaCotroller_1.default.getEmpresa);
        //this.router.post('/saveEmpresaXvehiculo', empresaCotroller_1.default.saveEmpresaXvehiculo);
        this.router.get('/getTipoVehiculoXempresa/:usuario', empresaCotroller_1.default.getTipoVehiculoXempresa);
        this.router.post('/saveEmpresaXvehiculo/:empresa/:idVehiculo', empresaCotroller_1.default.saveEmpresaXvehiculo);
        this.router.delete('/deleteEmpresaXvehiculo/:id', empresaCotroller_1.default.deleteEmpresaXvehiculo);
        this.router.post('/saveEmpresaXdia/:idE/:codigoDia/:hd/:hh', empresaCotroller_1.default.saveEmpresaXdia);
        this.router.put('/updateEmpresaXdia/:idE/:codigoDia/:hd/:hh', empresaCotroller_1.default.updateEmpresaXdia);
        this.router.get('/getDiaXempresa/:idE', empresaCotroller_1.default.getDiaXempresa);
        this.router.put('/updateEmpresa/:pusuario/:usuario/:contrasenia/:cuil/:cel/:nombre', empresaCotroller_1.default.updateEmpresa);
        this.router.put('/updateUbicacion/:latitud/:longitud/:usuario', empresaCotroller_1.default.updateUbicacion);
        this.router.get('/getEmpresaById/:id', empresaCotroller_1.default.getEmpresaById);
        this.router.get('/getViajes/:idEmpresa', empresaCotroller_1.default.getViajes);
        this.router.put('updateToken/token/:token', empresaCotroller_1.default.updateToken)
        this.router.get('/getAllMotivosCancelacion', empresaCotroller_1.default.getAllMotivosCancelacion)
        this.router.get('/getUltimaNotificacion/:idEmpresa', empresaCotroller_1.default.getUltimaNotificacion)
        this.router.get('/filtroMotivosCancelacion/:idEmpresa/:fechaDesde/:fechaHasta/:distancia/:idMotivoCancelacion', empresaCotroller_1.default.filtroMotivosCancelacion)
        this.router.get('/filtroEstadoViajes/:idEmpresa/:fechaDesde/:fechaHasta/:distancia/:codigoEstadoViaje', empresaCotroller_1.default.filtroEstadoViajes)
        this.router.get('/getEstadoViajes/:empresa', empresaCotroller_1.default.getEstadoViajes)
        this.router.delete('/deleteViajeById/:idViaje', empresaCotroller_1.default.deleteViajeById)
        this.router.get('/listEstadoViaje', empresaCotroller_1.default.listEtadoViaje)
        this.router.get('/gteViajeByCodigoEstadoViaje/:idEmpresa/:codigoEstado', empresaCotroller_1.default.gteViajeByCodigoEstadoViaje)
        this.router.get('/getAllMotivoCancelacion', empresaCotroller_1.default.getAllMotivoCancelacion)
        this.router.get('/listadoCliente/:idEmpresa/:idCliente', empresaCotroller_1.default.listadoCliente)
        this.router.get('/contEstadosviajes/:idEmpresa/:idCliente', empresaCotroller_1.default.contEstadosviajes)
        this.router.put('/setHoraSalidaViaje/:idViaje/:horaSalidaAprox/:horaLlegadaAprox', empresaCotroller_1.default.setHoraSalidaViaje);
        this.router.put('/setHoraSalidaRealViaje/:idViaje/', empresaCotroller_1.default.setHoraSalidaRealViaje);
        this.router.get('/getFEchaActual', empresaCotroller_1.default.listadoCliente)
        this.router.put('/setVistoEmpresa/:idCliente/:idEmpresa', empresaCotroller_1.default.setVistoEmpresa);

        /*  this.router.delete('/:id', perosnaController.deleted)
          this.router.put('/:id', perosnaController.update)*/
         
    } 
}
const empresaRoutes = new EmpresaRuter();
exports.default = empresaRoutes.router;
