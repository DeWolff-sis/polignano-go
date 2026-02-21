import express from "express";
import cors from "cors";
import placesRoutes from "./routes/places.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/places", placesRoutes);

app.get("/", (req, res) => {
  res.send("Polignano GO API running");
});

app.get("/config", (req, res) => {
  res.json({ mapboxToken: process.env.sk.eyJ1IjoicG9saWduYW5vZ28iLCJhIjoiY21sdzBuMmpsMGN5czNscXNwYWt2M2FmZiJ9._QTnlfiDIDacYcJXXFOG2w });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});