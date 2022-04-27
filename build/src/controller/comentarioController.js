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
class ComentarioController {
    getComentario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const comentario = yield database_1.default.query("select descripcion,idCliente,idEmpresa from comentario");
            res.json(comentario);
        });
    }
    saveComentario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("entra save");
            yield database_1.default.query("INSERT INTO comentario set ?", [req.body]);
            console.log(req.body);
            res.json("se guardo la ersona");
        });
    }
   
}
const comentarioController = new ComentarioController();
exports.default = comentarioController;
