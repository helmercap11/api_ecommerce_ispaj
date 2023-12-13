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



exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Product.updateProdut(
    req.params.idproduct,
    new Product(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found product with id ${req.params.idproduct}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating product with id " + req.params.idproduct
          });
        }
      } else res.send(data);
    }
  );
};


/*exports.update = (req, res) => {
  if(!req.body){
    res.status(400).send({
        message: "Campos vazios"
    });
  }

  Product.updateProdut (
    req.params.idproduct,
    new Product(req.body),
    (err, data) => {
      if(err) {
        if(err.kind === "não encontrado"){
          res.status(404).send({
            message: `Erro ao actualizar ${req.params.idproduct}`  
          });
        } else {
          res.status(500).send({
            message: "Erro testetetdef"
          });
        } 
      }else res.send(data);
    }
  )
}*/