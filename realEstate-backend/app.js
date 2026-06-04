const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// ================= MIDDLEWARE =================
app.use(express.json());
app.use(cors());

// 🔥 VERY IMPORTANT (IMAGE ACCESS FIX)
app.use("/uploads", express.static("uploads"));

// ================= DB =================
const DBConnection = require("./src/utils/DBConnection");
DBConnection();

// ================= ROUTES =================
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

// ================= SERVER =================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} 🚀`);
});