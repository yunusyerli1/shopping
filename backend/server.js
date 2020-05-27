import data from './data';
import express from 'express';  //node es5 i çalıştırdığından modül dışında import kullanamazsın diye hata verdi. Bunun önlemek için npm install @babel/cli @babel/core @babel/node @babel/preset-env nodemon --save-dev paketlerini yükledik.

const app = express();

app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x => x._id === productId);
    if(product) {
        res.send(product);
    }
    else res.status(404).send({msg: "Product not Found"});
    
});
app.get("/api/products", (req, res) => {
    res.send(data.products);
});

app.listen(5000, () => {console.log("Server started at http:localhost:5000")});
