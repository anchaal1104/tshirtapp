const mongoose = require ("mongoose");
const {ObjectId} = mongoose.Schema;
const productSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            trim: true,
            required:true,
            maxLength: 32
        },
        description:
        {
            type:String,
            trim: true,
            required:true,
            maxLength: 2000
        },
        price:{
            type: Number,
            required:true,
            maxLength: 32,
            trim: true
        },
        category:{
         type: ObjectId,
         reference: "Category",
         required: true
        },
        stock: {
            typeNumber
        },
        sold:
        {
            type: Number,
            default:0
        },
        photo:{
            data: Buffer,
            contentType: String
        }
    },{timeStamps:true}
);
module.exports = mongoose.model("Product",productSchema);