const res = require('express/lib/response');
const sql = require('./db');


const Product = function(product){
    this.name_product = product.name_product;
    this.price = product.price;
    this. description = product.description;
};



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







module.exports = Product;