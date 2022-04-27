"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        //  pool.query('DESCRIBE usuario')
        res.json('si ando che gil');
    }
    create(req, res) {
        res.json({ text: "enviado por post" });
    }
}
exports.indexController = new IndexController();
