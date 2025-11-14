const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Receive GPS location from RF devices
app.post("/api/device-location", (req, res) => {
    console.log("📍 Location received:", req.body);
    res.json({ status: "success", message: "Location received successfully" });
});

// Default home route
app.get("/", (req, res) => {
    res.send("MDM Tracking Backend is running...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
