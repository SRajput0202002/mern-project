require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./Route/auth-route");
const contactRoute = require("./Route/contact-Router");
const serviceRoute = require("./Route/service-router");
const adminRoute = require("./Route/Admin-route");
const connectDB = require("./DB/db");
const errorMiddleWare = require("./Middleware/error-middleware");

// handling cors policy

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

//lets define admin route

app.use("/api/admin", adminRoute);

app.use(errorMiddleWare);

const PORT = 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`my server is running on Port : ${PORT}`);
  });
});
