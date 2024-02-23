const express = require("express");
const router = express.Router();
const Location = require("../models/location");

//getting all
router.get("/", async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//getting one
router.get("/:id", getLocation, (req, res) => {
  res.json(res.location);
});
//creating one
router.post("/", async (req, res) => {
  const location = new Location({
    sightingType: req.body.sightingType,
    sightingCoordinatesX: req.body.sightingCoordinatesX,
    sightingCoordinatesY: req.body.sightingCoordinatesY,
    sightingUser: req.body.sightingUser,
  });

  try {
    const newLocation = await location.save();
    res.status(201).json(newLocation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//updating one
router.patch("/:id", getLocation, async (req, res) => {
  if (req.body.sightingType != null) {
    res.location.sightingType = req.body.sightingType;
  }
  if (req.body.sightingCoordinatesX != null) {
    res.location.sightingCoordinatesX = req.body.sightingCoordinatesX;
  }
  if (req.body.sightingCoordinatesY != null) {
    res.location.sightingCoordinatesY = req.body.sightingCoordinatesY;
  }
  if (req.body.sightingUser != null) {
    res.location.sightingUser = req.body.sightingUser;
  }

  try {
    const updatedLocation = await res.location.save();
    res.json(updatedLocation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//deleting one
router.delete("/:id", getLocation, async (req, res) => {
  try {
    await res.location.remove();
    res.json({ message: "Deleted Location" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getLocation(req, res, next) {
  let location;
  try {
    location = await Location.findById(req.params.id);
    if (location == null) {
      return res.status(404).json({ message: "Cannot find location" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.location = location;
  next();
}

module.exports = router;
const express = require("express");
const router = express.Router();
const Location = require("../models/location");

//getting all
router.get("/", async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//getting one
router.get("/:id", getLocation, (req, res) => {
  res.json(res.location);
});
//creating one
router.post("/", async (req, res) => {
  const location = new Location({
    sightingType: req.body.sightingType,
    sightingCoordinatesX: req.body.sightingCoordinatesX,
    sightingCoordinatesY: req.body.sightingCoordinatesY,
    sightingUser: req.body.sightingUser,
  });

  try {
    const newLocation = await location.save();
    res.status(201).json(newLocation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//updating one
router.patch("/:id", getLocation, async (req, res) => {
  if (req.body.sightingType != null) {
    res.location.sightingType = req.body.sightingType;
  }
  if (req.body.sightingCoordinatesX != null) {
    res.location.sightingCoordinatesX = req.body.sightingCoordinatesX;
  }
  if (req.body.sightingCoordinatesY != null) {
    res.location.sightingCoordinatesY = req.body.sightingCoordinatesY;
  }
  if (req.body.sightingUser != null) {
    res.location.sightingUser = req.body.sightingUser;
  }

  try {
    const updatedLocation = await res.location.save();
    res.json(updatedLocation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//deleting one
router.delete("/:id", getLocation, async (req, res) => {
  try {
    await res.location.remove();
    res.json({ message: "Deleted Location" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getLocation(req, res, next) {
  let location;
  try {
    location = await Location.findById(req.params.id);
    if (location == null) {
      return res.status(404).json({ message: "Cannot find location" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.location = location;
  next();
}

module.exports = router;
