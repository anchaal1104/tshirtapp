const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;
const ProductCartSchema = new mongoose.Schema(
    {
 product: {
     type: ObjectId,
     ref: "Product"
          },
 name:String,
 count: Number,
 price: Number
});
const ProductCart = mongoose.model("ProductCart",ProductCartSchema) 

const Orderschema = new mongoose.Schema({
    product:[ProductCartSchema],
    transaction_id: {},
    amount:{type: Number},
    address: String,
    updated: Date,
    user: {
        type: ObjectId,
        ref:"User"
    }
},{timneStamps: true});

const Order = mongoose.model("Order",Orderschema);
module.exports={Order,ProductCart}