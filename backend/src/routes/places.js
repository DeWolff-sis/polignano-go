import express from "express";
const router = express.Router();

const PLACES = [
  {
    id: 1,
    name: "Lama Monachile",
    lat: 40.9959,
    lon: 17.2205,
    type: "main"
  },
  {
    id: 2,
    name: "Statua Domenico Modugno",
    lat: 40.9951,
    lon: 17.2194,
    type: "main"
  }
];

router.get("/", (req, res) => {
  res.json(PLACES);
});

export default router;