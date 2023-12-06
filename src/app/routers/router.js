module.exports = app => {
    const productController = require("../controller/ProductController.js");

    var router = require("express").Router();

    router.post("/create", productController.create);
    router.get("/read", productController.readAll);

    app.use('/api', router);
};