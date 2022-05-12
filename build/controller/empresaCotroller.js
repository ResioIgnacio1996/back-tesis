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
const database_1 = __importDefault(require("../../database"));
class EmpresaController {
    loginEmpresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contraseña = req.params.contrasenia;
            const Pusuario = req.params.usuario;
            const cliente = yield database_1.default.query("select usuario, id from empresa where usuario='" + [Pusuario + "'"] + "and contrasenia='" + [contraseña] + "'");
            res.json(cliente);
        });
    }
    saveEmpresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("INSERT INTO empresa set ?", [req.body]);
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
            const pusuario = req.params.pusuario;
            const nombre = req.params.nombre;
            const contrasenia = req.params.contrasenia;
            const usuario = req.params.usuario;
            const idTipoVehiculo = req.params.idTipoVehiculo;
            const documento = req.params.documento;
            console.log("------------------------" + req.body + "---------------------");
            delete req.params.id;
            //console.log("------------------------"+req.params.id+"---------------------")
            yield database_1.default.query("UPDATE cliente SET nombre= '" + nombre + "' , usuario= '" + usuario + "', contrasenia= '" + contrasenia + "', id_tipo_vehiculo=" + idTipoVehiculo + ", documento='" + documento + "'WHERE usuario=  ", [pusuario]);
        });
    }
    getEmpresaById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("entra by parametro= " + req.params.id);
            const idEmpresa = req.params.id
            const empresas = yield database_1.default.query("SELECT latitud,longitud,id,usuario,celular,nombre,contrasenia,token,cuil FROM empresa WHERE id="+ idEmpresa);
            res.json(empresas);
        });
    }
    getEmpresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("entra");
            const usuario = req.params.usuario;
            console.log(usuario);
            const empresas = yield database_1.default.query("SELECT id,usuario, celular,latitud,longitud,nombre,contrasenia,token,cuil FROM empresa WHERE usuario='" + [usuario] + "'");
            res.json(empresas);
        });
    }
    getTipoVehiculoXempresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("entra");
            const empresa = req.params.usuario;
            console.log("--------------------------------------------" + req.params.usuario + "-----------------------------------------------------------");
            const empresas = yield database_1.default.query("SELECT id,idEmpresa, idTipoVehiculo FROM tipovehiculoXempresa WHERE idEmpresa=" + [empresa]);
            res.json(empresas);
        });
    }
    saveEmpresaXvehiculo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresa = req.params.empresa;
            const idVehiculo = req.params.idVehiculo;
            console.log("++++++++++++++++++++++++++++++++++++++++" + req.params.idVehiculo + "+++++++++++++++++++++++++")
            yield database_1.default.query("INSERT INTO tipovehiculoxempresa (idTipoVehiculo,idEmpresa) VALUES(" + [idVehiculo] + "," + [empresa] + ")");
            console.log(req.body);
            res.json("se guardo la ersona");
        });


    }
    deleteEmpresaXvehiculo(req, res) {

        const id = req.params.id
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++" + req.params.id + "++++++++++++++++++++++++++++++++++++++++")
        return __awaiter(this, void 0, void 0, function* () {
            const qr = yield database_1.default.query("DELETE FROM tipovehiculoxempresa WHERE  id=" + [id])
            // console.log(req.body);
            res.json(qr);
        });
    }
    updateEmpresaXdia(req, res) {
        const horaDesde = req.params.hd;
        const horaHasta = req.params.hh;
        const idEmpresa = req.params.idE
        const idDia = req.params.codigoDia
        return __awaiter(this, void 0, void 0, function* () {
            console.log("+++++++++++++++" + horaDesde + " " + horaHasta + " " + idEmpresa + " " + idDia)
            yield database_1.default.query("UPDATE   diaxempresa SET idEmpresa=" + [idEmpresa] + ", idDia=" + [idDia] + ", horaDesde='" + [horaDesde] + "', horaHasta='" + [horaHasta] + "' WHERE (idEmpresa= " + [idEmpresa] + " and idDia= " + [idDia] + ")")
            console.log(req.body);
            res.json("se guardo la ersona");
        });
    }
    saveEmpresaXdia(req, res) {
        const horaDesde = req.params.hd;
        const horaHasta = req.params.hh;
        const idEmpresa = req.params.idE
        const idDia = req.params.codigoDia
        return __awaiter(this, void 0, void 0, function* () {
            console.log("+++++++++++++++" + horaDesde + " " + horaHasta + " " + idEmpresa + " " + idDia)
            yield database_1.default.query("INSERT  INTO diaxempresa(idEmpresa,idDia,horaDesde,horaHasta) VALUES(" + [idEmpresa] + "," + [idDia] + ",'" + [horaDesde] + "','" + [horaHasta] + "')");
            console.log(req.body);
            res.json("se guardo la ersona");
        });
    }
    getDiaXempresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const emprea = req.params.idE;
            const cliente = yield database_1.default.query("SELECT idEmpresa,idDia,horaDesde,horaHasta FROM diaxempresa WHERE idEmpresa=" + [emprea]);
            res.json(cliente);
        });
    }
    getFechaActual(req, res){
        return __awaiter(this, void 0, void 0, function* () {
            const emprea = req.params.idE;
            const cliente = yield database_1.default.query("select curdate()");
            res.json(cliente);
        });  
    }
    updateEmpresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pusuario = req.params.pusuario;
            const nombre = req.params.nombre;
            const contrasenia = req.params.contrasenia;
            const usuario = req.params.usuario;
            const cuil = req.params.cuil;
            const celular = req.params.cel
            console.log("------------------------" + pusuario + " " + nombre + " " + contrasenia + " " + usuario + " " + cuil + " " + celular + "---------------------");
            delete req.params.id;
            //console.log("------------------------"+req.params.id+"---------------------")
            yield database_1.default.query("UPDATE empresa SET nombre= '" + nombre + "' , usuario= '" + usuario + "', contrasenia= '" + contrasenia + "', cuil='" + cuil + "', celular='" + celular + "'WHERE id=?", [pusuario]);
        });
    }
    updateUbicacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const latitud = req.params.latitud;
            const longitud = req.params.longitud
            const usuario = req.params.usuario
            // console.log("------------------------" + req.body + "---------------------");
            //  delete req.params.id;
            //console.log("------------------------"+req.params.id+"---------------------")
            yield database_1.default.query("UPDATE empresa SET latitud=" + latitud + " , longitud= " + longitud + "WHERE id= ?", [usuario]);
        });

    }
    getViajes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idEmpresa = req.params.idEmpresa; 
            const empresas = yield database_1.default.query(" select  c.id as idCliente, c.usuario, c.token, v.id, v.origen, v.latitud, v.longitud,v.destino,v.estado,v.distancia, v.id as idViaje,ev.descripcion from viaje as v inner join estado_viaje as ev on ev.codigo=v.estado inner join cliente as c on c.id= v.idCliente where (v.idEmpresa= "+ [idEmpresa] + " and  v.fecha =date_add(NOW(), INTERVAL +1 DAY) or v.fecha=curdate()) order by v.fecha_modificacion desc"); 
            res.json(empresas);
        });
    }
    updateToken(req, res) { 
        return __awaiter(this, void 0, void 0, function* () {
            const idEmpresa = req.params.idEmpresa;
            const token = req.params.token;
            console.log("------------------------" + req.body + "---------------------");
            delete req.params.id;
            //console.log("------------------------"+req.params.id+"---------------------")
            yield database_1.default.query("UPDATE empresa SET token= '" + token + "' WHERE id= ? ", [idEmpresa]);
        });
    }
    getAllMotivosCancelacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("entra");
            const empresa = req.params.empresa;
            console.log("--------------------------------------------" + req.params.empresa + "-----------------------------------------------------------");
            const empresas = yield database_1.default.query("select count(idMotivoCancelacion) as cantidad,date_format(fecha ,'%d-%m-%Y') as fecha, idMotivoCancelacion, c.usuario as cliente, v.distancia, mc.nombre as motivoCancelacion, v.origen, v.destino  from viaje as v inner join cliente as c on c.id=v.idCliente inner join motivos_cancelacion as mc on mc.id=v.idMotivoCancelacion where idEmpresa =" + [empresa] + "  group by idMotivoCancelacion");
            res.json(empresas);
        });
    }
    getAllNotifocacionesByIdEmpresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("entra ultima notificacion");
            const idEmpresa = req.params.idEmpresa;

            const empresas = yield database_1.default.query("SELECT max(n.id),n.descripcion, c.usuario, e.nombre, c.usuario, e.id, c.id as idCliente from cliente as c  inner join notificacion as n on n.idCliente=c.id  inner join empresa as e on e.id= n.idEmpresa where  n.idEmpresa=" + idEmpresa + " group by c.id,e.id");
            res.json(empresas);
        });
    }
    filtroMotivosCancelacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("entra ultima notificacion");
            const idEmpresa = req.params.idEmpresa;
            const fechaDesde = req.params.fechaDesde;
            const fechaHasta = req.params.fechaHasta;
            const distancia = req.params.distancia;
            const idMotivoCancelacion = req.params.idMotivoCancelacion
            if (idMotivoCancelacion != -1) {
                const empresas = yield database_1.default.query("select count(idMotivoCancelacion) as cantidad, date_format(fecha ,'%d-%m-%Y') as fecha, idMotivoCancelacion, c.usuario as cliente, v.distancia, mc.nombre as motivoCancelacion, v.origen, v.destino  from viaje as v inner join cliente as c on c.id=v.idCliente inner join motivos_cancelacion as mc on mc.id=v.idMotivoCancelacion where fecha >= '" + fechaDesde + "' and fecha<= '" + fechaHasta + "' and distancia >= " + distancia + " and idEmpresa=" + idEmpresa + " and v.idMotivoCancelacion=" + idMotivoCancelacion + " group by idMotivoCancelacion");
                res.json(empresas);
            } else {
                const empresas = yield database_1.default.query("select count(idMotivoCancelacion) as cantidad, date_format(fecha ,'%d-%m-%Y')  as fecha, idMotivoCancelacion, c.usuario as cliente, v.distancia, mc.nombre as motivoCancelacion, v.origen, v.destino  from viaje as v inner join cliente as c on c.id=v.idCliente inner join motivos_cancelacion as mc on mc.id=v.idMotivoCancelacion where fecha >= '" + fechaDesde + "' and fecha<= '" + fechaHasta + "' and distancia >= " + distancia + " and idEmpresa=" + idEmpresa + " group by idMotivoCancelacion");
                res.json(empresas);
            }

        });
    }

    filtroEstadoViajes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("entra ultima notificacion");
            const idEmpresa = req.params.idEmpresa;
            const fechaDesde = req.params.fechaDesde;
            const fechaHasta = req.params.fechaHasta;
            const distancia = req.params.distancia;
            const codigoEstadoViaje = req.params.codigoEstadoViaje;
            console.log(distancia)
            if (codigoEstadoViaje != -1) {
                const empresas = yield database_1.default.query("select count(estado) as cantidad, date_format(fecha ,'%d-%m-%Y') as fecha,estado , c.usuario as cliente, v.distancia, ev.descripcion as estadoViaje, v.origen, v.destino  from viaje as v inner join cliente as c on c.id=v.idCliente inner join estado_viaje as ev on ev.codigo=v.estado where fecha >= '" + fechaDesde + "' and fecha<= '" + fechaHasta + "' and distancia >= " + distancia + " and idEmpresa=" + idEmpresa + " and v.estado=" + codigoEstadoViaje + " group by estado");
                res.json(empresas);
            } else {
                const empresas = yield database_1.default.query("select count(estado) as cantidad, date_format(fecha ,'%d-%m-%Y')  as fecha, estado , c.usuario as cliente, v.distancia, ev.descripcion as estadoViaje, v.origen, v.destino  from viaje as v inner join cliente as c on c.id=v.idCliente inner join estado_viaje as ev on ev.codigo=v.estado  where fecha >= '" + fechaDesde + "' and fecha<= '" + fechaHasta + "' and distancia >= " + distancia + " and idEmpresa=" + idEmpresa + " group by estado");
                res.json(empresas);

            }

        });
    }

    getEstadoViajes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("entra");
            const empresa = req.params.empresa;
            console.log("--------------------------------------------" + req.params.empresa + "-----------------------------------------------------------");
            const empresas = yield database_1.default.query("select count(estado) as cantidad,date_format(fecha ,'%d-%m-%Y') as fecha, estado , c.usuario as cliente, v.distancia, ev.descripcion as estadoViaje, v.origen, v.destino  from viaje as v inner join cliente as c on c.id=v.idCliente inner join estado_viaje as ev on ev.codigo=v.estado where idEmpresa =" + [empresa] + "  group by estado");
            res.json(empresas);
        });


    }
    deleteViajeById(idViaje) {

    }
    listEstadoViaje(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("entra");
            const empresa = req.params.empresa;
            console.log("--------------------------------------------" + req.params.empresa + "-----------------------------------------------------------");
            const empresas = yield database_1.default.query("select descripcion, codigo from estado_viaje");
            res.json(empresas);
        });

    }
    gteViajeByCodigoEstadoViaje(req, res) {

        return __awaiter(this, void 0, void 0, function* () {
            console.log("entra");
            const idEmpresa = req.params.idEmpresa;
            const codigoEstadoViaje = req.params.codigoEstado
            const empresas = yield database_1.default.query(" select c.id as idCliente, c.usuario, c.token, v.id, v.origen, v.latitud, v.longitud,v.destino,v.estado,v.distancia, v.id as idViaje,ev.descripcion from viaje as v inner join estado_viaje as ev on ev.codigo=v.estado inner join cliente as c on c.id= v.idCliente where ( v.idEmpresa= " + idEmpresa + " and v.estado= " + codigoEstadoViaje + ") order by v.id desc");
            res.json(empresas);
        });
    }

    getAllMotivoCancelacion(req, res) {

        return __awaiter(this, void 0, void 0, function* () {
            console.log("entra");
            const idEmpresa = req.params.idEmpresa;
            const codigoEstadoViaje = req.params.codigoEstado
            const empresas = yield database_1.default.query(" select id, nombre from motivos_cancelacion");
            res.json(empresas);
        });
    }
    listadoCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("entra");
            const idEmpresa = req.params.idEmpresa;
            const idCliente = req.params.idCliente
            const empresas = yield database_1.default.query("select date_format(fecha ,'%d-%m-%Y') as fecha, v.estado as estado, c.usuario as cliente, ev.descripcion as estadoViaje from viaje as v inner join cliente as c on c.id=v.idCliente inner join estado_viaje as ev on ev.codigo = v.estado where  v.idEmpresa ="+ idEmpresa+" and v.idCliente="+ idCliente);
            res.json(empresas);
        });
    }
contEstadosviajes(req, res){
    return __awaiter(this, void 0, void 0, function* () {
        console.log("entra");
        const idEmpresa = req.params.idEmpresa;
        const idCliente = req.params.idCliente
        const empresas = yield database_1.default.query("select   count(estado) as cantidad, v.estado as estado from viaje as v inner join cliente as c on c.id=v.idCliente inner join estado_viaje as ev on ev.codigo = v.estado where  v.idEmpresa ="+ idEmpresa+" and v.idCliente="+ idCliente + "  group by v.estado");
        res.json(empresas);
    });
}
setHoraSalidaViaje(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const idViaje = req.params.idViaje;
        const horaSalidaAprox=req.params.horaSalidaAprox;
        const horaLlegadaAprox=req.params.horaLlegadaAprox;
        console.log(horaSalidaAprox +"------------------**********************" +horaLlegadaAprox +" *--------------------")
        
        //console.log("------------------------"+req.params.id+"---------------------")
        yield database_1.default.query("UPDATE viaje SET fecha_hora_salida_aprox= '"+horaSalidaAprox+"', fecha_hora_llegada= '"+horaLlegadaAprox+"' WHERE id=  "+idViaje);
    });
} 

setHoraSalidaRealViaje(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const idViaje = req.params.idViaje;
        
        //console.log("------------------------"+req.params.id+"---------------------")
        yield database_1.default.query("UPDATE viaje SET fecha_hora_salida= now() WHERE id=  "+idViaje);
    });
} 
listEtadoViaje(req, res){
    return __awaiter(this, void 0, void 0, function* () {
        const idViaje = req.params.idViaje;
        
        //console.log("------------------------"+req.params.id+"---------------------")
        yield database_1.default.query("SELECT * FROM estado_viaje" );
    });
}
} 

const clienteController = new EmpresaController();
exports.default = clienteController;
