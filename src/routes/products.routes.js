const { Router } = require("express");
const productController = require("../controllers/productController");

const routes = Router();

routes.get("/", productController.list);
routes.get("/:id", productController.show);
routes.post("/", productController.create);
routes.put("/:id", productController.update);
routes.delete("/:id", productController.delete);

module.exports = routes;
