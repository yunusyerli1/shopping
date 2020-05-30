import data from './data';
import express from 'express';  //node es5 i çalıştırdığından modül dışında import kullanamazsın diye hata verdi. Bunun önlemek için npm install @babel/cli @babel/core @babel/node @babel/preset-env nodemon --save-dev paketlerini yükledik.
import config from './config';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyParser.json());

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);


/*
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
*/
app.listen(5000, () => {console.log("Server started at http:localhost:5000")});
