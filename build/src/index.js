"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const clienteRoutes_1 = __importDefault(require("./routes/clienteRoutes"));
const diasRoutes_1 = __importDefault(require("./routes/diasRoutes"));
const tipoVehiculoRoutes_1 = __importDefault(require("./routes/tipoVehiculoRoutes"));
const comentarioRoutes_1 = __importDefault(require("./routes/comentarioRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', 4000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/cliente', clienteRoutes_1.default);
        this.app.use('/api/dia', diasRoutes_1.default);
        this.app.use('/api/tipoVehiculo', tipoVehiculoRoutes_1.default);
        this.app.use('/api/comentario', comentarioRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'));
        console.log("escucho el puerto", this.app.get('port'));
    }
}
const server = new Server();
server.start();
