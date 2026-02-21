import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import placesRoutes from "./routes/places.js";

const app = express();
app.use(cors());
app.use(express.json());

// Gestione __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servire frontend statico
app.use(express.static(path.join(__dirname, "../../frontend")));

// Endpoint API
app.use("/api/places", placesRoutes);

// Endpoint per fornire il token Mapbox al frontend
app.get("/config", (req, res) => {
  res.json({
    mapboxToken: process.env.sk.eyJ1IjoicG9saWduYW5vZ28iLCJhIjoiY21sdzBuMmpsMGN5czNscXNwYWt2M2FmZiJ9._QTnlfiDIDacYcJXXFOG2w
  });
});

// Root → index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});