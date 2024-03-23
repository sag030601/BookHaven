// const mongoose = require("mongoose");

// // Create a Mongoose model schema
// const itemSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   author: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   genre: {
//     type: String,
//     required: true,
//   },
//   img: {
//     data: Buffer,
//     contentType: String,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   newArrival: false,
//   topPicks: false,
//   bestSeller: false,
// });

// // Create and export the Mongoose model
// const Item = mongoose.model("Item", itemSchema);

// module.exports = Item;






const mongoose = require("mongoose");

// Create a Mongoose model schema
const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  price: {
    type: Number,
    required: true,
  },
  newArrival: {
    type: Boolean,
    default: false, // Default value for newArrival
  },
  topPicks: {
    type: Boolean,
    default: false, // Default value for topPicks
  },
  bestSeller: {
    type: Boolean,
    default: false, // Default value for bestSeller
  },
});

// Create and export the Mongoose model
const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
