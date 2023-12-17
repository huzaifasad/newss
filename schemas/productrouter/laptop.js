const express = require("express");
const router = express.Router();
const Laptop = require("../productschema/Laptop.js");
const multer = require("multer");
const upload = multer();

router.post("/add", upload.array("photos", 3), async (req, res) => {
  const { name, price, desc, productQuantity, ramSize, type, brand } = req.body;
  console.log(req.body);
  console.log(req.files);

  // Extract uploaded file information
  const images = req.files.map((file) => ({
    data: file.buffer,
    contentType: file.mimetype,
  }));

  // Parse the features field
  const features = JSON.parse(req.body.features);

  // Create a new laptop instance
  const newLaptop = new Laptop({
    name,
    price,
    desc,
    productQuantity,
    ramSize,
    type,
    brand,
    images,
    features,
  });

  // Save the laptop to the database
  const savedLaptop = await newLaptop.save();

  res
    .status(201)
    .json({ message: "Laptop added successfully", laptop: savedLaptop });
});

// router.post('/add',  upload.array('photos', 3), async (req, res) => {
//    const { name, price, desc, productQuantity, ramSize, type,brand, images, features } = req.body;

//     // Create a new laptop instance
//     const newLaptop = new Laptop({
//       name,
//       price,
//       desc,
//       productQuantity,
//       ramSize,
//       type,
//       brand,
//     //   images,
//       features,
//     });

//     // Save the laptop to the database
//     const savedLaptop = await newLaptop.save();

//     res.status(201).json({ message: 'Laptop added successfully', laptop: savedLaptop });
// });
router.get("/get", async (req, res) => {
  try {
    const laptops = await Laptop.find();

    // Convert binary image data to base64
    const laptopsWithBase64Images = laptops.map((laptop) => {
      const images = laptop.images.map((image) => ({
        ...image,
        data: image.data.toString("base64"),
      }));

      return {
        ...laptop.toObject(),
        images,
      };
    });

    res.send(laptopsWithBase64Images);
  } catch (error) {
    console.error("Error fetching laptops:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  let data = await Laptop.deleteOne({ _id: req.params.id });
  res.send(data);
});
router.get("/update/:id", async (req, res) => {
  let data = await Laptop.findOne({ _id: req.params.id });
  if (data) {
    res.send(data);
  } else {
    res.send("No Data");
  }
});
router.put("/update/:id", async (req, res) => {
  let data = await Laptop.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  res.send(data);
  console.log(data);
});

router.post("/uploads", (req, res) => {});

// Add more routes as needed

module.exports = router;
