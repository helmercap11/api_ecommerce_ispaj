const Product = require('../models/product.js');



exports.create = (req, res) => {
  if(!req.body.name_product){
    res.status(400).send({
        message: "Campos vazios"
    });
  }

  const product = new Product({
    name_product: req.body.name_product,
    price: req.body.price,
    description: req.body.description
  });



Product.create(product, (err, data) => {
    if(err)
    res.status(500).send({
message: err.message || "Erro ao criar o produto."
});
else res.send(data);
});

};


exports.readAll = (req, res) => {
  const name_product = req.query.name_product;
  Product.getProduct(name_product, (err, data) => {
    if(err)
      res.status(500).send({
    message:err.message || "Erro ao listar"
    });
    else res.send(data);
  })
}