module.exports = app => {
    const productController = require("../controller/ProductController.js");

    var router = require("express").Router();

    router.post("/create", productController.create);
    router.get("/read", productController.readAll);
    router.put("/:idproduct",productController.update);

    app.use('/api', router);
};