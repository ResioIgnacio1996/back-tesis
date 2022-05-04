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
const database_1 = __importDefault(require("./database"));
class TipoVehiculoController {
    getTipoVehiculo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const TipoVehiculoController = yield database_1.default.query("select nombre,id from tipo_vehiculo");
            res.json(TipoVehiculoController);
        });
    } 
    getDate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const TipoVehiculoController = yield database_1.default.query("SELECT CURDATE()");
            res.json(TipoVehiculoController);
        }); 
    } 
    updateEstadoViaje01(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idViaje = req.params.idViaje;
            const estado = req.params.estado;
            const lado = req.params.lado;
            var cont
            
            console.log("------------------------ UPDATE ESTADO VIAJE-------------------------------" + estado + " " + idViaje +" "+lado+"---------------------");
            
                yield database_1.default.query("UPDATE viaje SET estado= " + estado + ", fecha_modificacion= now() WHERE id=  "+ [idViaje]+" and estado < "+ estado);
    
              
            //console.log("------------------------"+req.params.id+"---------------------")
               });
    }
    
}
const tipoVehiculoController = new TipoVehiculoController();
exports.default = tipoVehiculoController;
