Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controller/indexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.index);
        this.router.post('/', indexController_1.indexController.create);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
