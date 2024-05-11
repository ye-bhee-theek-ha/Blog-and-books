
const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("./config/db");

const BlogRoutes = require("./Routes/BlogRoutes");

const { NotFound, errHandler } = require("./middlewares/errorMiddleware");



const app = express();

var cors = require('cors')
app.use(cors())

dotenv.config();
connectDB();
app.use(express.json());



app.get("/", (req, res) => {
    res.send("API is running...")
})

app.use("/api/blogs", BlogRoutes)
// app.use("/api/flights", flightRoutes)
// app.use("/api/airports", airportRouts)
// app.use("/api/reviews", UserReviewsRoutes)
// app.use("/api/bookedFlights", bookedFlightsRoutes)

app.use(NotFound);
app.use(errHandler);

const PORT = process.env.PORT || 4000;

app.listen(5000, console.log(`server started on port ${PORT}`))