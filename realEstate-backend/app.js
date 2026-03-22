const express = require("express")
const app = express()
const cors = require("cors")
//load env file.. using process
require("dotenv").config()
app.use(express.json())
app.use(cors()) //allow all requests
const secret = "secret"
const jwt = require("jsonwebtoken")

const DBConnection = require("./src/utils/DBConnection")
DBConnection()

const userRoutes = require("./src/routes/UserRoutes")
app.use("/user",userRoutes)


const propertyRoutes = require("./src/routes/PropertyRoutes")
app.use("/prop",propertyRoutes)

const propertyLocationRoutes = require("./src/routes/PropertyLocationRoutes")
app.use("/Location",propertyLocationRoutes)

const Inquiryroutes = require("./src/routes/InquiryRoutes")
app.use("/inquiry",Inquiryroutes)


const PropertyVisitRoutes = require("./src/routes/PropertyVisitRoutes")
app.use("/visit",PropertyVisitRoutes)

const FavoutitePropertyRoutes = require("./src/routes/FavoutitePropertyRoutes")
app.use("/favourite", FavoutitePropertyRoutes)

const ReviewRoutes = require("./src/routes/ReviewRoutes")
app.use("/review",ReviewRoutes)


const PaymentRoutes = require("./src/routes/PaymentRoutes")
app.use("/payment",PaymentRoutes)

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})
//server creation
