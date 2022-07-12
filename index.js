const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe")



dotenv.config()
app.use(express.json())

/** CONNECT MONGOOSE **/
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB Connected Succesfully!"))
.catch((err)=>console.log(err))

/** CALLING ROUTES **/
app.use("/api/auth" , authRoute);
app.use("/api/users" , userRoute);
app.use("/api/products" , productRoute);
app.use("/api/carts" , cartRoute);
app.use("/api/orders" , orderRoute);
app.use("/api/stripe" , stripeRoute);


app.listen(process.env.PORT || 5000 , ()=>{
    console.log("Backend server is running!")
})