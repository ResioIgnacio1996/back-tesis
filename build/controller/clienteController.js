"use strict";

const { token } = require("morgan");

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
const database_1 = __importDefault(require("../../database"));
class ClineteController {
    loginCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contraseña = req.params.contrasenia;
            const Pusuario = req.params.usuario;
            const cliente = yield database_1.default.query("select id, usuario from cliente where usuario='" + [Pusuario + "'"] + "and contrasenia='" + [contraseña] + "'");
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
            const cliente = yield database_1.default.query("SELECT id, nombre,usuario,id_tipo_vehiculo,contrasenia FROM cliente WHERE usuario='" + [usuario] + "'");
            res.json(cliente);
        });
    }
    getClientByid(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idCliente = req.params.idCliente;
            const cliente = yield database_1.default.query("SELECT id, nombre,usuario,id_tipo_vehiculo,contrasenia, token FROM cliente WHERE id= " + [idCliente]);
            res.json(cliente);
        });
    }
    updateCliente(req, res) {

        return __awaiter(this, void 0, void 0, function* () {
            console.log("--------------------ENTRA-----------------------·")
            const pusuario = req.params.pusuario;
            const nombre = req.params.nombre;
            const contrasenia = req.params.contrasenia;
            const usuario = req.params.usuario;
            const idTipoVehiculo = req.params.idTipoVehiculo;
            const documento = req.params.documento;
            console.log("------------------------" + documento + "---------------------");
            delete req.params.id;
            yield database_1.default.query("UPDATE cliente SET nombre= '" + nombre + "' , usuario= '" + usuario + "', contrasenia= '" + contrasenia + "',id_tipo_vehiculo=" + idTipoVehiculo + ", documento='" + documento + "' WHERE id= " + pusuario);
        });
    }
    getEmpresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("entra");
            const idTipoVehiculo = req.params.idTipoVehiculo;
            const empresas = yield database_1.default.query("select e.id,e.nombre,e.celular, e.token, e.longitud, e.latitud, e.usuario,e.id from empresa as e inner join diaxempresa as de on de.idEmpresa = e.id inner join dia as d on d.codigo = de.idDia inner join tipovehiculoxempresa as ve on ve.idEmpresa=e.id  where  Date_format(now(),'%W')=d.nombre and  DATE_FORMAT(NOW( ), '%H:%i:%S' ) >= de.horaDesde and  DATE_FORMAT(NOW( ), '%H:%i:%S' )<= de.horaHasta and ve.idTipoVehiculo=" + [idTipoVehiculo]);
            res.json(empresas);
        });

    }
    saveViaje(req, res) {
        return __awaiter(this, void 0, void 0, function* () {

            const destino = req.body.destino;
            const origen = req.body.origen;
            const longitud = req.body.longitud;
            const latitud = req.body.latitud;
            const estado = req.body.estado;
            const idCliente = req.body.idCliente;
            const idEmpresa = req.body.idEmpresa;
            const distancia = req.body.distancia;
            const distanciaTotal =req.body.distanciaTotal;
            const latitudDestino =req.body.latitudDestino;
            const longitudDestino =req.body.longitudDestino;


            yield database_1.default.query("INSERT INTO viaje (origen, destino,  longitud, latitud, estado, idCliente, idEmpresa,  fecha, distancia, idMotivoCancelacion,fecha_modificacion,fecha_hora_solicitado, distanciaTotal,longitudDestino,latitudDestino) values('" + origen + "', '" + destino + "'," + longitud + "," + latitud + "," + estado + "," + idCliente + "," + idEmpresa + ", curdate() ," + distancia + "," + 0 + ",now(),now(),'"+distanciaTotal+"',"+longitudDestino +", "+latitudDestino+" )")

            res.json("se guardo la ersona");
        });
    }
    getUltimaNotificacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("entra ultima notificacion");
            const cliente = req.params.cliente;
            console.log(cliente)
            
            const empresas = yield database_1.default.query("SELECT max(n.id),n.descripcion, c.usuario, e.nombre, c.usuario, e.id, c.id as idCliente, n.idViaje from cliente as c  inner join notificacion as n on n.idCliente=c.id  inner join empresa as e on e.id= n.idEmpresa inner join viaje as v on v.id=n.idViaje where  n.idCliente=" + cliente + " group by c.id,e.id   ");
            res.json(empresas);
        });
    }
    getAllNotificacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("entra");
            const cliente = req.params.cliente;
            const idEmpresa = req.params.idEmpresa
            const idViaje = req.params.idViaje
            console.log(cliente + " " + idEmpresa)
            const empresas = yield database_1.default.query("SELECT v.idMotivoCancelacion, n.descripcion, c.usuario, n.idCliente,e.nombre, c.usuario, e.id, n.emisor, n.codigo from cliente as c  inner join notificacion as n on n.idCliente=c.id  inner join empresa as e on e.id= n.idEmpresa inner join viaje as v on v.id=n.idViaje where  (n.idCliente=" + cliente + " and e.id=" + idEmpresa + " and n.idViaje=" + idViaje + ")");
            res.json(empresas);
        });
    }
    getComentarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = req.params.usuario;
            const cliente = yield database_1.default.query("SELECT nombre,usuario,id_tipo_vehiculo,contrasenia FROM cliente WHERE usuario='" + [usuario] + "'");
            res.json(cliente);
        });
    }
    saveNotificacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("INSERT INTO notificacion set ?", [req.body]);
            console.log(req.body);
            res.json("se guardo la ersona");
        });

    }
    updateEstadoViaje(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idViaje = req.params.idViaje;
            const estado = req.params.estado;
            console.log("------------------------" + estado + " " + idViaje + "---------------------");

            //console.log("------------------------"+req.params.id+"---------------------")
            yield database_1.default.query("UPDATE viaje SET estado= '" + estado + "'WHERE id= ? ", [idViaje]);
        });
    }
    updateToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pusuario = req.params.usuario;
            const token = req.params.token;
            console.log("------------------------" + req.body + "---------------------");
            delete req.params.id;
            //console.log("------------------------"+req.params.id+"---------------------")
            yield database_1.default.query("UPDATE cliente SET token= '" + token + "' WHERE usuario= ? ", [usuario]);
        });
    }
    getViajeByClienteEmpresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("entra get viaje");
            const cliente = req.params.usuario;//idUsuario
            const idEmpresa = req.params.empresa//idEmpresa
            console.log(cliente + " " + idEmpresa)
            const empresas = yield database_1.default.query("select v.id, v.estado from cliente as c inner join viaje as v on v.idCliente= c.id inner join empresa as e on e.id=v.idEmpresa where v.idCliente= " + [cliente] + " and v.idEmpresa=" + [idEmpresa]);
            res.json(empresas);
        });
    }

    setMotivoCancelacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idViaje = req.params.idViaje
            const idMotivoCancelacion = req.params.idMotivoCancelacion

            const empresas = yield database_1.default.query("update viaje set idMotivoCancelacion=" + idMotivoCancelacion + " where( id=" + idViaje + ")");
            res.json(empresas);
        });
    }
    getIdUltimoViajeByidCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idCliente = req.params.idCliente;
            const cliente = yield database_1.default.query("SELECT id  FROM viaje WHERE idCliente= " + idCliente);
            res.json(cliente);
        });

    }

    
    getDetalleViaje(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idViaje = req.params.idViaje;
            const cliente = yield database_1.default.query("SELECT *  FROM viaje WHERE id= " + idViaje);
            res.json(cliente);
        });
    }
    getViajesSolcitados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idCliente = req.params.idCliente;
            const idEmpresa = req.params.idEmpresa; 
            const cliente = yield database_1.default.query("select v.fecha, v.distancia, e.nombre, count(v.estado) as estado, ev.descripcion from viaje as v inner join empresa as e on e.id = v.idEmpresa inner join estado_viaje as ev on ev.codigo= v.estado where v.idCliente="+idCliente +" and v.idEmpresa="+idEmpresa +" group by v.estado");
            res.json(cliente);
        });
    }
    setVistoClienteNotificacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idCliente = req.params.idCliente
            const idEmpresa = req.params.idEmpresa

            const idMotivoCancelacion = req.params.idMotivoCancelacion
            const empresas = yield database_1.default.query("update notificacion set visto_cliente=0"  + " where( idCliente=" + idCliente + " and idEmpresa= " +idEmpresa +")");
            res.json(empresas);
        });
    }
    getNotificacionesNoLeidas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idCliente = req.params.idCliente;
            const cliente = yield database_1.default.query(" select   count(id) as cantidad from notificacion where idCliente=" + idCliente + "  and visto_cliente=0 ");
            res.json(cliente);
        });

    }

}
const clienteController = new ClineteController();
exports.default = clienteController;
