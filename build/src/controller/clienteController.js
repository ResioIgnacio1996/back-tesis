"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ClineteController {
    loginCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contraseña = req.params.contrasenia;
            const Pusuario = req.params.usuario;
            const cliente = yield database_1.default.query("select usuario from cliente where usuario='" + [Pusuario + "'"]);
            res.json(cliente);
        });
    }
    saveCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("INSERT INTO cliente set ?", [req.body]);
            console.log(req.body);
            res.json("se guardo la ersona");
        });
    }
    getCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = req.params.usuario;
            const cliente = yield database_1.default.query("SELECT nombre,usuario,id_tipo_vehiculo,contrasenia FROM cliente WHERE usuario='" + [usuario] + "'");
            res.json(cliente);
        });
    }
    updateCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_PERSONA = req.params.id;
            // console.log("------------------------"+req.params.id+"---------------------")
            delete req.params.id;
            //console.log("------------------------"+req.params.id+"---------------------")
            yield database_1.default.query("UPDATE cliente SET ?  WHERE id= ? ", [req.body, id_PERSONA]);
        });
    }
    getEmpresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("entra");
            const idTipoVehiculo = req.params.idTipoVehiculo;
            const empresas = yield database_1.default.query("select nombre.usuario,latitud,latitud from empresa as e inner join diaxempresa as de on de.idEmpresa = e.usuario inner join dia as d on d.id = de.idDia inner join tipovehiculoxempresa as ve on ve.idEmpresa=e.usuario  where  Date_format(now(),'%W')=d.nombre and  DATE_FORMAT(NOW( ), '%H:%i:%S' ) <= de.horaDesde and  DATE_FORMAT(NOW( ), '%H:%i:%S' )>= de.horaHasta and ve.idTipoVehiculo= ?"+[idTipoVehiculo] );
            res.json(empresas);
        });
    }
}
const clienteController = new ClineteController();
exports.default = clienteController;
