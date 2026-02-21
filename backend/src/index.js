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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});