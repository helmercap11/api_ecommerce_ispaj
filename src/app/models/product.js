const res = require('express/lib/response');
const sql = require('./db');


const Product = function(product){
    this.name_product = product.name_product;
    this.price = product.price;
    this. description = product.description;
};


// create product
Product.create = (newProduct, result) => {
    sql.query("insert into product set ?", newProduct, (err, res) =>{
        if(err){
            console.log("erro", err);
            result(err, null);
            return;
        }
        console.log("Create product: ", {id: res.insertId, ...newProduct});
        result(null, {id: res.insertId, ...newProduct});
    });
   
};

// list all product
Product.getProduct = (name_product, result) => {
    let query = "select * from product";
    if(name_product){
        query += `where name_product like '%${this.name_product}'`;
    }
    sql.query(query, (err, res)=> {
        if(err){
            console.log("error:", err);
            result(null, err);
        }
        console.log("Product:", res);
        result(null, res);
    } );
};


// update product

Product.updateProdut = (idproduct,product, result) => {
    sql.query("update product set name_product = ?, price = ?, description = ? where idproduct =?",
    [product.name_product, product.price, product.description, idproduct],
    (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }

        if(res.affectedRows == 0){
            // not found user with the id
            result({kind: "not_found"}, null);
            return;
        }
        console.log("update product: ", {idproduct: idproduct, ...product});
        result(null, {idproduct: idproduct, product});
    });
};


module.exports = Product;