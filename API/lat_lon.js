const router = require("express").Router();
const axios = require("axios");

router.get("/getAdd", async (req, res) => {
  const { country, state , place} = req.query;
  try {
    const url = `https://nominatim.openstreetmap.org/?addressdetails=1&q=${country}+${state}+${place}&format=json&limit=1`;
    const resp = await axios.get(url);
    const result = resp.data;
    if (!result) return res.status(400).json({ status: "Incorrect way" });

    res.json({ result });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
