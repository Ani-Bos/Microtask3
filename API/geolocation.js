const router = require("express").Router();
const axios = require("axios");

router.get("/getAdd", async (req, res) => {
  const { lat, lon } = req.query;
  try {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=18&addressdetails=1&lat=${lat}&lon=${lon}`;
    const resp = await axios.get(url);
    const ans = resp.data;
    if (!ans) return res.status(400).json({ status: "Incorrect way" });

    res.json({ans});
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
