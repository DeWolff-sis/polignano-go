import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import placesRoutes from "./routes/places.js";

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ----- API -----

app.use("/api/places", placesRoutes);

app.get("/config", (req, res) => {
  try {
    res.json({
      mapboxToken: process.env.pk.eyJ1IjoicG9saWduYW5vZ28iLCJhIjoiY21sdzBiOTluMGMwbjNmcXFjNmZiOWtoZyJ9.D4btyisncrM0SyiWBbwDpg || null
    });
  } catch (err) {
    console.error("Errore /config:", err);
    res.status(500).json({ error: "Config error" });
  }
});

// ----- STATIC -----

const frontendPath = path.join(__dirname, "../../frontend");
app.use(express.static(frontendPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// ----- START -----

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



