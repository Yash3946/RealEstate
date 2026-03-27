const express = require("express");
const app = express();
const cors = require("cors");

// load env
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

// 🔥 IMPORTANT: static folder (images access ke liye)
app.use("/uploads", express.static("uploads"));

// jwt (optional)
const jwt = require("jsonwebtoken");
const secret = "secret";

// DB connection
const DBConnection = require("./src/utils/DBConnection");
DBConnection();

// routes
const userRoutes = require("./src/routes/UserRoutes");
app.use("/user", userRoutes);

const propertyRoutes = require("./src/routes/PropertyRoutes");
app.use("/prop", propertyRoutes);

const propertyLocationRoutes = require("./src/routes/PropertyLocationRoutes");
app.use("/location", propertyLocationRoutes);

const inquiryRoutes = require("./src/routes/InquiryRoutes");
app.use("/inquiry", inquiryRoutes);

const propertyVisitRoutes = require("./src/routes/PropertyVisitRoutes");
app.use("/visit", propertyVisitRoutes);

const favouritePropertyRoutes = require("./src/routes/FavoutitePropertyRoutes");
app.use("/favourite", favouritePropertyRoutes);

const reviewRoutes = require("./src/routes/ReviewRoutes");
app.use("/review", reviewRoutes);

const paymentRoutes = require("./src/routes/PaymentRoutes");
app.use("/payment", paymentRoutes);

// server start
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});