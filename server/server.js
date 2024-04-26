// // // // const express = require("express");
// // // // const app = express();
// // // // const port = 5000;
// // // // const multer = require("multer");
// // // // const path = require("path");
// // // // const fs = require("fs").promises;
// // // // const Item = require("./model/booksModel");
// // // // const mongoose = require("mongoose");
// // // // const cors = require("cors");
// // // // app.use(cors({
// // // //     origin: "http://localhost:3000", // Update this with the actual origin of your React app
// // // //     credentials: true,
// // // //   }));

// // // //   mongoose.connect("mongodb://localhost:27017/images", { useNewUrlParser: true, useUnifiedTopology: true })
// // // //   .then(() => {
// // // //     console.log("Connected to MongoDB");
// // // //   })
// // // //   .catch((error) => {
// // // //     console.error("Error connecting to MongoDB:", error);
// // // //   });

// // // // const uploadFolderPath = path.join(__dirname, "uploads");

// // // // // Configure multer for file uploads
// // // // const storage = multer.memoryStorage();
// // // // const upload = multer({ storage: storage });

// // // // // Serve uploaded images as static files from the 'uploads' folder
// // // // // Serve uploaded images as static files from the 'uploads' folder
// // // // // app.use("/image", express.static(uploadFolderPath));

// // // // // Express route for uploading an image and adding an item to the database
// // // // app.post("/upload", upload.single("image"), async (req, res) => {
// // // //   try {
// // // //     const newItem = new Item({
// // // //       title: req.body.title,
// // // //       author: req.body.author,
// // // //       description: req.body.description,
// // // //       genre: req.body.genre,
// // // //       img: {
// // // //         data: req.file.buffer,
// // // //         contentType: req.file.mimetype,
// // // //       },
// // // //       price: req.body.price,
// // // //     });

// // // //     await newItem.save();
// // // //     res.send("Item added to the database.");
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send("Internal Server Error");
// // // //   }
// // // // });

// // // // const sizeOf = require('image-size');

// // // // app.get("/image/:itemId", async (req, res) => {
// // // //   try {
// // // //     const item = await Item.findById(req.params.itemId);
// // // //     if (!item) {
// // // //       return res.status(404).send("Image not found");
// // // //     }

// // // //     // Detect image dimensions (width and height) from the image data
// // // //     const dimensions = sizeOf(Buffer.from(item.img.data, 'base64'));

// // // //     // If image dimensions are detected, use them to set the content type
// // // //     const contentType = dimensions ? `image/${dimensions.type}` : 'application/octet-stream';

// // // //     // Set the content type and send the image data
// // // //     res.type(contentType);
// // // //     res.send(Buffer.from(item.img.data, 'base64'));
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send("Internal Server Error");
// // // //   }
// // // // });

// // // // app.get("/images/:genre", async (req, res) => {
// // // //     const { genre } = req.params;

// // // //     try {
// // // //       const items = await Item.find({ genre });
// // // //       res.json(items);
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //       res.status(500).send("Internal Server Error");
// // // //     }
// // // //   });

// // // // app.get("/", (req, res) => {
// // // //   res.send("Hello, World!");
// // // // });

// // // // app.listen(port, () => {
// // // //   console.log(`Server is running on http://localhost:${port}`);
// // // // });

// // // const express = require("express");
// // // const session = require("express-session");
// // // const mongoose = require("mongoose");
// // // const cors = require("cors");
// // // const crypto = require("crypto");
// // // const multer = require("multer");
// // // const path = require("path");
// // // const fs = require("fs").promises;
// // // const sizeOf = require("image-size");

// // // const User = require("./model/userModel");
// // // const Item = require("./model/booksModel");

// // // const app = express();
// // // const PORT = 5000;

// // // const passport = require("passport");
// // // const LocalStrategy = require("passport-local").Strategy;

// // // app.use(express.json());

// // // // Generate a random secret key for session
// // // const secretKey = crypto.randomBytes(32).toString("hex");

// // // app.use(
// // //   session({
// // //     secret: secretKey,
// // //     resave: false,
// // //     saveUninitialized: true,
// // //     cookie: {
// // //       maxAge: 1000 * 60 * 60, // Session timeout in milliseconds (1 hour in this example)
// // //     },
// // //   })
// // // );

// // // app.use(passport.initialize());
// // // app.use(passport.session());

// // // passport.use(
// // //   new LocalStrategy(async (username, password, done) => {
// // //     try {
// // //       const user = await User.findOne({ username }).exec();

// // //       if (!user) {
// // //         return done(null, false, { message: "Incorrect username." });
// // //       }

// // //       const isPasswordValid = await user.comparePassword(password);

// // //       if (!isPasswordValid) {
// // //         return done(null, false, { message: "Incorrect password." });
// // //       }

// // //       return done(null, user);
// // //     } catch (error) {
// // //       return done(error);
// // //     }
// // //   })
// // // );

// // // passport.serializeUser((user, done) => {
// // //   done(null, user.id);
// // // });

// // // passport.deserializeUser(async (id, done) => {
// // //   try {
// // //     const user = await User.findById(id);
// // //     if (!user) {
// // //       return done(null, false);
// // //     }
// // //     return done(null, user);
// // //   } catch (error) {
// // //     console.error("Error in deserializeUser:", error);
// // //     done(error);
// // //   }
// // // });

// // // mongoose.connect("mongodb://localhost:27017/MyAppDatabase", {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true,
// // // });

// // // const allowedOrigins = [
// // //   "http://localhost:3000",
// // //   "https://your-react-app-domain.com",
// // // ];

// // // app.use(
// // //   cors({
// // //     origin: function (origin, callback) {
// // //       if (!origin || allowedOrigins.includes(origin)) {
// // //         callback(null, true);
// // //       } else {
// // //         callback(new Error("Not allowed by CORS"));
// // //       }
// // //     },
// // //     credentials: true,
// // //   })
// // // );

// // // // Registration route
// // // app.post("/register", async (req, res) => {
// // //   try {
// // //     const { username, password } = req.body;

// // //     // Check if the username already exists
// // //     const existingUser = await User.findOne({ username });
// // //     if (existingUser) {
// // //       return res.status(400).json({ error: "Username already taken." });
// // //     }

// // //     // Create a new user
// // //     const newUser = new User({ username, password });
// // //     await newUser.save();

// // //     res.status(201).json({ message: "User registered successfully!" });
// // //   } catch (err) {
// // //     console.error("Error during registration:", err);
// // //     res.status(500).json({ error: "Registration failed" });
// // //   }
// // // });

// // // // Check login status using express-session
// // // app.get("/checkLoginStatus", (req, res) => {
// // //   if (req.isAuthenticated()) {
// // //     return res.json({ loggedIn: true, user: req.user });
// // //   } else {
// // //     return res.json({ loggedIn: false });
// // //   }
// // // });

// // // // Login route
// // // app.post("/login", passport.authenticate("local"), (req, res) => {
// // //   // const token = jwt.sign({ userId: req.user._id }, secretKey, {
// // //   //   expiresIn: "1h",
// // //   // });

// // //   req.session.isLoggedIn = true;

// // //   return res.status(200).json({ message: "Login successful!" });
// // // });

// // // // Image-related operations
// // // const uploadFolderPath = path.join(__dirname, "uploads");
// // // const storage = multer.memoryStorage();
// // // const upload = multer({ storage: storage });

// // // app.post("/upload", upload.single("image"), async (req, res) => {
// // //   try {
// // //     let newArrivalValue = req.body.newArrival === "true" ? true : false;
// // //     const newItem = new Item({
// // //       title: req.body.title,
// // //       author: req.body.author,
// // //       description: req.body.description,
// // //       genre: req.body.genre,
// // //       img: {
// // //         data: req.file.buffer,
// // //         contentType: req.file.mimetype,
// // //       },
// // //       price: req.body.price,
// // //       newArrival: newArrivalValue , // Set default value if not provided
// // //       topPicks: req.body.topPicks || false, // Set default value if not provided
// // //       bestSeller: req.body.bestSeller || false,
// // //     });

// // //     await newItem.save();
// // //     res.send("Item added to the database.");
// // //   } catch (error) {
// // //     console.error(error);
// // //     res.status(500).send("Internal Server Error");
// // //   }
// // // });

// // // app.get("/image/:itemId", async (req, res) => {
// // //   try {
// // //     const item = await Item.findById(req.params.itemId).exec();
// // //     if (!item) {
// // //       return res.status(404).send("Image not found");
// // //     }

// // //     const dimensions = sizeOf(Buffer.from(item.img.data, "base64"));
// // //     const contentType = dimensions
// // //       ? `image/${dimensions.type}`
// // //       : "application/octet-stream";

// // //     res.type(contentType);
// // //     res.send(Buffer.from(item.img.data, "base64"));
// // //   } catch (error) {
// // //     console.error(error);
// // //     res.status(500).send("Internal Server Error");
// // //   }
// // // });

// // // app.get("/images/:genre", async (req, res) => {
// // //   const { genre } = req.params;

// // //   try {
// // //     const items = await Item.find({ genre });
// // //     res.json(items);
// // //   } catch (error) {
// // //     console.error(error);
// // //     res.status(500).send("Internal Server Error");
// // //   }
// // // });

// // // // Route for fetching items with newArrival set to true
// // // app.get("/images/newArrival", async (req, res) => {
// // //   try {
// // //     const items = await Item.find({ newArrival: true });
// // //     res.json(items);
// // //   } catch (error) {
// // //     console.error(error);
// // //     res.status(500).send("Internal Server Error");
// // //   }
// // // });

// // // // Route for fetching items with topPicks set to true
// // // app.get("/images/topPicks", async (req, res) => {
// // //   try {
// // //     const items = await Item.find({ topPicks: true });
// // //     res.json(items);
// // //   } catch (error) {
// // //     console.error(error);
// // //     res.status(500).send("Internal Server Error");
// // //   }
// // // });

// // // // Route for fetching items with bestSeller set to true
// // // app.get("/images/bestSeller", async (req, res) => {
// // //   try {
// // //     const items = await Item.find({ bestSeller: true });
// // //     res.json(items);
// // //   } catch (error) {
// // //     console.error(error);
// // //     res.status(500).send("Internal Server Error");
// // //   }
// // // });

// // // app.get("/", (req, res) => {
// // //   res.send("Hello, World!");
// // // });

// // // app.listen(PORT, () => {
// // //   console.log(`Server is running on http://localhost:${PORT}`);
// // // });

// // const express = require("express");
// // const session = require("express-session");
// // const mongoose = require("mongoose");
// // const cors = require("cors");
// // const crypto = require("crypto");
// // const multer = require("multer");
// // const path = require("path");
// // const fs = require("fs").promises;
// // const sizeOf = require("image-size");

// // const User = require("./model/userModel");
// // const Item = require("./model/booksModel");

// // const app = express();
// // const PORT = 5000;

// // const passport = require("passport");
// // const LocalStrategy = require("passport-local").Strategy;

// // app.use(express.json());

// // // Generate a random secret key for session
// // const secretKey = crypto.randomBytes(32).toString("hex");

// // app.use(
// //   session({
// //     secret: secretKey,
// //     resave: false,
// //     saveUninitialized: true,
// //     cookie: {
// //       maxAge: 1000 * 60 * 60, // Session timeout in milliseconds (1 hour in this example)
// //     },
// //   })
// // );

// // app.use(passport.initialize());
// // app.use(passport.session());

// // passport.use(
// //   new LocalStrategy(async (username, password, done) => {
// //     try {
// //       const user = await User.findOne({ username }).exec();

// //       if (!user) {
// //         return done(null, false, { message: "Incorrect username." });
// //       }

// //       const isPasswordValid = await user.comparePassword(password);

// //       if (!isPasswordValid) {
// //         return done(null, false, { message: "Incorrect password." });
// //       }

// //       return done(null, user);
// //     } catch (error) {
// //       return done(error);
// //     }
// //   })
// // );

// // passport.serializeUser((user, done) => {
// //   done(null, user.id);
// // });

// // passport.deserializeUser(async (id, done) => {
// //   try {
// //     const user = await User.findById(id);
// //     if (!user) {
// //       return done(null, false);
// //     }
// //     return done(null, user);
// //   } catch (error) {
// //     console.error("Error in deserializeUser:", error);
// //     done(error);
// //   }
// // });

// // mongoose.connect("mongodb://localhost:27017/MyAppDatabase", {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });

// // const allowedOrigins = [
// //   "http://localhost:3000",
// //   "https://your-react-app-domain.com",
// // ];

// // app.use(
// //   cors({
// //     origin: function (origin, callback) {
// //       if (!origin || allowedOrigins.includes(origin)) {
// //         callback(null, true);
// //       } else {
// //         callback(new Error("Not allowed by CORS"));
// //       }
// //     },
// //     credentials: true,
// //   })
// // );

// // app.use((req, res, next) => {
// //   console.log("Request received:", req.method, req.url);
// //   next();
// // });

// // app.get("/", (req, res) => {
// //   res.send("Hello, World!");
// // });

// // // Assuming routes are defined in your Express app// Route for saving purchased books
// // app.post("/savePurchasedBooks", async (req, res) => {
// //   try {
// //     // Check if the user is logged in
// //     if (!req.isAuthenticated()) {
// //       return res.status(401).send("User not authenticated");
// //     }

// //   const { book } = req.body;

// //     // Find the user by ID and update their purchased books
// //     const user = await User.findById(req.user._id);

// //     if (!user) {
// //       return res.status(404).send("User not found");
// //     }

// //     // Append the purchased books to the user's purchasedBooks array
// //     user.purchasedBooks.push(book);
// //     await user.save();

// //     res.status(200).send("Books saved successfully.");
// //   } catch (error) {
// //     console.error("Error saving purchased books:", error);
// //     res.status(500).send("Internal Server Error");
// //   }
// // });

// // app.get("/getPurchasedBooks", async (req, res) => {
// //   try {
// //     // Assuming user's purchased books are stored in user.purchasedBooks
// //     const user = await User.findById(req.user.id).populate("purchasedBooks");
// //     res.status(200).json(user.purchasedBooks);
// //   } catch (error) {
// //     console.error("Error fetching purchased books:", error);
// //     res.status(500).send("Internal Server Error");
// //   }
// // });

// // // Registration route
// // app.post("/register", async (req, res) => {
// //   try {
// //     const { username, password } = req.body;

// //     // Check if the username already exists
// //     const existingUser = await User.findOne({ username });
// //     if (existingUser) {
// //       return res.status(400).json({ error: "Username already taken." });
// //     }

// //     // Create a new user
// //     const newUser = new User({ username, password });
// //     await newUser.save();

// //     res.status(201).json({ message: "User registered successfully!" });
// //   } catch (err) {
// //     console.error("Error during registration:", err);
// //     res.status(500).json({ error: "Registration failed" });
// //   }
// // });

// // // Check login status using express-session
// // app.get("/checkLoginStatus", (req, res) => {
// //   if (req.isAuthenticated()) {
// //     return res.json({ loggedIn: true, user: req.user });
// //   } else {
// //     return res.json({ loggedIn: false });
// //   }
// // });

// // // Login route
// // app.post("/login", passport.authenticate("local"), (req, res) => {
// //   // const token = jwt.sign({ userId: req.user._id }, secretKey, {
// //   //   expiresIn: "1h",
// //   // });

// //   req.session.isLoggedIn = true;

// //   return res.status(200).json({ message: "Login successful!" });
// // });

// // // Image-related operations
// // const uploadFolderPath = path.join(__dirname, "uploads");
// // const storage = multer.memoryStorage();
// // const upload = multer({ storage: storage });

// // app.post("/upload", upload.single("image"), async (req, res) => {
// //   try {
// //     // let newArrivalValue = req.body.newArrival === "true" ? true : false;
// //     let newArrivalValue;
// //     if (req.body.newArrival === "true") {
// //       newArrivalValue = true;
// //     } else if (req.body.newArrival === "false") {
// //       newArrivalValue = false;
// //     } else {
// //       // If the value is not "true" or "false", set a default value
// //       newArrivalValue = false; // Or you can choose true, depending on your requirements
// //     }

// //     const newItem = new Item({
// //       title: req.body.title,
// //       author: req.body.author,
// //       description: req.body.description,
// //       genre: req.body.genre,
// //       img: {
// //         data: req.file.buffer,
// //         contentType: req.file.mimetype,
// //       },
// //       price: req.body.price,
// //       newArrival: newArrivalValue, // Set default value if not provided
// //       topPicks: req.body.topPicks || false, // Set default value if not provided
// //       bestSeller: req.body.bestSeller || false,
// //     });

// //     await newItem.save();
// //     res.send("Item added to the database.");
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).send("Internal Server Error");
// //   }
// // });

// // app.get("/image/:itemId", async (req, res) => {
// //   try {
// //     const item = await Item.findById(req.params.itemId).exec();
// //     if (!item) {
// //       return res.status(404).send("Image not found");
// //     }

// //     const dimensions = sizeOf(Buffer.from(item.img.data, "base64"));
// //     const contentType = dimensions
// //       ? `image/${dimensions.type}`
// //       : "application/octet-stream";

// //     res.type(contentType);
// //     res.send(Buffer.from(item.img.data, "base64"));
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).send("Internal Server Error");
// //   }
// // });

// // app.get("/images/newArrival", async (req, res) => {
// //   try {
// //     console.log("Attempting to fetch items with newArrival set to true...");
// //     const items = await Item.find({ newArrival: true });
// //     console.log("Fetched items:", items);
// //     res.json(items);
// //   } catch (error) {
// //     console.error("Error fetching items:", error);
// //     res.status(500).json({ error: "Internal Server Error" });
// //   }
// // });

// // // Route for fetching items with topPicks set to true
// // app.get("/images/topPicks", async (req, res) => {
// //   try {
// //     const items = await Item.find({ topPicks: true });
// //     res.json(items);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).send("Internal Server Error");
// //   }
// // });

// // // Route for fetching items with bestSeller set to true
// // app.get("/images/bestSeller", async (req, res) => {
// //   try {
// //     const items = await Item.find({ bestSeller: true });
// //     res.json(items);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).send("Internal Server Error");
// //   }
// // });

// // app.get("/images/:genre", async (req, res) => {
// //   const { genre } = req.params;

// //   try {
// //     const items = await Item.find({ genre });
// //     res.json(items);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).send("Internal Server Error");
// //   }
// // });

// // // Route for fetching items with newArrival set to true
// // app.get("/images/newArrival/:genre", async (req, res) => {
// //   const { genre } = req.params;

// //   try {
// //     const items = await Item.find({ genre, newArrival: true });
// //     res.json(items);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).send("Internal Server Error");
// //   }
// // });

// // // Route for fetching items with topPicks set to true
// // app.get("/images/topPicks/:genre", async (req, res) => {
// //   const { genre } = req.params;

// //   try {
// //     const items = await Item.find({ genre, topPicks: true });
// //     res.json(items);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).send("Internal Server Error");
// //   }
// // });

// // // Route for fetching items with bestSeller set to true
// // app.get("/images/bestSeller/:genre", async (req, res) => {
// //   const { genre } = req.params;

// //   try {
// //     const items = await Item.find({ genre, bestSeller: true });
// //     res.json(items);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).send("Internal Server Error");
// //   }
// // });

// // app.listen(PORT, () => {
// //   console.log(`Server is running on http://localhost:${PORT}`);
// // });

// const express = require("express");
// const session = require("express-session");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const crypto = require("crypto");
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs").promises;
// const sizeOf = require("image-size");
// const bodyParser = require("body-parser"); // Import bodyParser

// const User = require("./model/userModel");
// const Item = require("./model/booksModel");

// const app = express();
// const PORT = 5000;

// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;

// app.use(bodyParser.json()); // Set payload size limit

// // Generate a random secret key for session
// const secretKey = crypto.randomBytes(32).toString("hex");

// app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// app.use(
//   session({
//     secret: secretKey,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       maxAge: 1000 * 60 * 60, // Session timeout in milliseconds (1 hour in this example)
//     },
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(
//   new LocalStrategy(async (username, password, done) => {
//     try {
//       const user = await User.findOne({ username }).exec();

//       if (!user) {
//         return done(null, false, { message: "User not found." });
//       }

//       const isPasswordValid = await user.comparePassword(password);

//       if (!isPasswordValid) {
//         return done(null, false, { message: "Incorrect password." });
//       }

//       return done(null, user);
//     } catch (error) {
//       return done(error);
//     }
//   })
// );

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await User.findById(id);
//     if (!user) {
//       return done(null, false);
//     }
//     return done(null, user);
//   } catch (error) {
//     console.error("Error in deserializeUser:", error);
//     done(error);
//   }
// });

// mongoose.connect("mongodb://localhost:27017/MyAppDatabase", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const allowedOrigins = [
//   "http://localhost:3000",
//   "https://your-react-app-domain.com",
// ];

// app.use((req, res, next) => {
//   console.log("Request received:", req.method, req.url);
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

// const isAuthenticated = (req, res, next) => {
//   if (req.isAuthenticated()) {
//     return next();
//   } else {
//     return res.status(401).send("User not authenticated");
//   }
// };

// app.post("/login", passport.authenticate("local"), async (req, res) => {
//   try {
//     const { purchasedBooks } = req.body;
//     console.log(purchasedBooks)

//     // Ensure purchasedBooks data is received and is an array of book IDs
//     if (!Array.isArray(purchasedBooks)) {
//       return res.status(400).json({ error: "Invalid purchasedBooks data" });
//     }

//     const user = await User.findById(req.user._id);

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     // Ensure purchasedBooks is initialized as an array
//     user.purchasedBooks = user.purchasedBooks || [];

//     // Append purchasedBooks to the user's purchasedBooks array
//     user.purchasedBooks.push(...purchasedBooks);
//     await user.save();

//     return res.status(200).json({ message: "Login successful!" });
//   } catch (error) {
//     console.error("Error handling login:", error);
//     return res.status(500).send("Internal Server Error");
//   }
// });

// // Assuming routes are defined in your Express app// Route for saving purchased books
// app.post("/savePurchasedBooks", isAuthenticated, async (req, res) => {
//   try {
//     const { book } = req.body;
//     const user = await User.findById(req.user._id);

//     // Find the user by ID and update their purchased books

//     if (!user) {
//       return res.status(404).send("User not found");
//     }

//     // Append the purchased books to the user's purchasedBooks array
//     user.purchasedBooks.push(book);
//     await user.save();

//     res.status(200).send("Books saved successfully.");
//   } catch (error) {
//     console.error("Error saving purchased books:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// app.get("/getPurchasedBooks", async (req, res) => {
//   try {
//     // Assuming user's purchased books are stored in user.purchasedBooks
//     const user = await User.findById(req.user.id).populate("purchasedBooks");
//     res.status(200).json(user.purchasedBooks);
//   } catch (error) {
//     console.error("Error fetching purchased books:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// // Registration route
// app.post("/register", async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Check if the username already exists
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ error: "Username already taken." });
//     }

//     // Create a new user
//     const newUser = new User({ username, password });
//     await newUser.save();

//     res.status(201).json({ message: "User registered successfully!" });
//   } catch (err) {
//     console.error("Error during registration:", err);
//     res.status(500).json({ error: "Registration failed" });
//   }
// });

// // Check login status using express-session
// app.get("/checkLoginStatus", (req, res) => {
//   if (req.isAuthenticated()) {
//     return res.json({ loggedIn: true, user: req.user });
//   } else {
//     return res.json({ loggedIn: false });
//   }
// });

// // Image-related operations
// const uploadFolderPath = path.join(__dirname, "uploads");
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// app.post("/upload", upload.single("image"), async (req, res) => {
//   try {
//     // let newArrivalValue = req.body.newArrival === "true" ? true : false;
//     let newArrivalValue;
//     if (req.body.newArrival === "true") {
//       newArrivalValue = true;
//     } else if (req.body.newArrival === "false") {
//       newArrivalValue = false;
//     } else {
//       // If the value is not "true" or "false", set a default value
//       newArrivalValue = false; // Or you can choose true, depending on your requirements
//     }

//     const newItem = new Item({
//       title: req.body.title,
//       author: req.body.author,
//       description: req.body.description,
//       genre: req.body.genre,
//       img: {
//         data: req.file.buffer,
//         contentType: req.file.mimetype,
//       },
//       price: req.body.price,
//       newArrival: newArrivalValue, // Set default value if not provided
//       topPicks: req.body.topPicks || false, // Set default value if not provided
//       bestSeller: req.body.bestSeller || false,
//     });

//     await newItem.save();
//     res.send("Item added to the database.");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// app.get("/image/:itemId", async (req, res) => {
//   try {
//     const item = await Item.findById(req.params.itemId).exec();
//     if (!item) {
//       return res.status(404).send("Image not found");
//     }

//     const dimensions = sizeOf(Buffer.from(item.img.data, "base64"));
//     const contentType = dimensions
//       ? `image/${dimensions.type}`
//       : "application/octet-stream";

//     res.type(contentType);
//     res.send(Buffer.from(item.img.data, "base64"));
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// app.get("/images/newArrival", async (req, res) => {
//   try {
//     console.log("Attempting to fetch items with newArrival set to true...");
//     const items = await Item.find({ newArrival: true });
//     console.log("Fetched items:", items);
//     res.json(items);
//   } catch (error) {
//     console.error("Error fetching items:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // Route for fetching items with topPicks set to true
// app.get("/images/topPicks", async (req, res) => {
//   try {
//     const items = await Item.find({ topPicks: true });
//     res.json(items);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// // Route for fetching items with bestSeller set to true
// app.get("/images/bestSeller", async (req, res) => {
//   try {
//     const items = await Item.find({ bestSeller: true });
//     res.json(items);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// app.get("/images/:genre", async (req, res) => {
//   const { genre } = req.params;

//   try {
//     const items = await Item.find({ genre });
//     res.json(items);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// // Route for fetching items with newArrival set to true
// app.get("/images/newArrival/:genre", async (req, res) => {
//   const { genre } = req.params;

//   try {
//     const items = await Item.find({ genre, newArrival: true });
//     res.json(items);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// // Route for fetching items with topPicks set to true
// app.get("/images/topPicks/:genre", async (req, res) => {
//   const { genre } = req.params;

//   try {
//     const items = await Item.find({ genre, topPicks: true });
//     res.json(items);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// // Route for fetching items with bestSeller set to true
// app.get("/images/bestSeller/:genre", async (req, res) => {
//   const { genre } = req.params;

//   try {
//     const items = await Item.find({ genre, bestSeller: true });
//     res.json(items);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// server.js

const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const cors = require("cors");
const crypto = require("crypto");
const multer = require("multer");
const path = require("path");
const fs = require("fs").promises;
const sizeOf = require("image-size");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const User = require("./model/userModel");
const Item = require("./model/booksModel");

const app = express();
const PORT = 5000;

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

app.use(bodyParser.json({ limit: "10mb" }));

// Generate a random secret key for session
const secretKey = crypto.randomBytes(32).toString("hex");

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60, // Session timeout in milliseconds (1 hour in this example)
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username }).exec();
      console.log(user);

      if (!user) {
        return done(null, false, { message: "User not found." });
      }

      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        return done(null, false, { message: "Incorrect password." });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (error) {
    console.error("Error in deserializeUser:", error);
    done(error);
  }
});

const allowedOrigins = [
  "http://localhost:3000",
  "https://your-react-app-domain.com",
];

app.use((req, res, next) => {
  console.log("Request received:", req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const isAuthenticated = (req, res, next) => {
  if (req.session.isLoggedIn) {
    // Check if user is authenticated based on session
    return next();
  } else {
    return res.status(401).send("User not authenticated");
  }
};

app.post("/login", async (req, res) => {
  try {
    const { username, password, purchasedBooks } = req.body;

    // Find the user by username
    const user = await User.findOne({ username });

    // If user is not found, return an error
    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If passwords do not match, return an error
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // If authentication is successful, set isLoggedIn flag in session
    req.session.isLoggedIn = true;
    req.session.user = user;

    // If purchasedBook object is provided, push it into the user's purchasedBooks array
    if (purchasedBooks) {
      user.purchasedBooks.push(purchasedBooks);
    }

    // Save the updated user document
    await user.save();

    // Respond with the entire user object
    return res.status(200).json({ message: "Login successful!", user });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/book/:bookId", async (req, res) => {
  try {
    const bookId = req.params.bookId;
    const book = await Item.findById(bookId);

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json(book);
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/update", async (req, res) => {
  try {
    const { userId, bookId } = req.body; // Extract user ID and book ID from request body

    // Find the user by ID and update the purchasedBooks array
    const user = await User.findByIdAndUpdate(
      userId,
      { $push: { purchasedBooks: bookId } },
      { new: true }
    );

    // Send the updated user data in the response
    res.status(200).json({ user });
  } catch (error) {
    console.error("Error updating user data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Registration route

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already taken." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // Hash password with salt rounds

    // Create a new user with hashed password
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    console.error("Error during registration:", err);
    res.status(500).json({ error: "Registration failed" });
  }
});

// Check login status using express-session
app.get("/checkLoginStatus", async (req, res) => {
  if (req.session.isLoggedIn) {
    try {
      // Fetch the latest user data from the database
      const user = await User.findById(req.session.user._id);

      // Send the updated user data in the response
      return res.status(200).json({ loggedIn: true, user });
    } catch (error) {
      console.error("Error fetching user data:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(200).json({ loggedIn: false });
  }
});

// Image-related operations
const uploadFolderPath = path.join(__dirname, "uploads");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    // let newArrivalValue = req.body.newArrival === "true" ? true : false;
    let newArrivalValue;
    if (req.body.newArrival === "true") {
      newArrivalValue = true;
    } else if (req.body.newArrival === "false") {
      newArrivalValue = false;
    } else {
      // If the value is not "true" or "false", set a default value
      newArrivalValue = false; // Or you can choose true, depending on your requirements
    }

    const newItem = new Item({
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      genre: req.body.genre,
      img: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
      price: req.body.price,
      newArrival: newArrivalValue, // Set default value if not provided
      topPicks: req.body.topPicks || false, // Set default value if not provided
      bestSeller: req.body.bestSeller || false,
    });

    await newItem.save();
    res.send("Item added to the database.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Route for fetching an item by its ID
app.get("/image/:itemId", async (req, res) => {
  try {
    const itemId = req.params.itemId;

    // Check if the provided ID is valid
    if (!itemId) {
      return res.status(400).send("Item ID is missing");
    }

    // Find the item by ID
    const item = await Item.findById(itemId);

    if (!item) {
      return res.status(404).send("Item not found");
    }

    const dimensions = sizeOf(Buffer.from(item.img.data, "base64"));
    const contentType = dimensions
      ? `image/${dimensions.type}`
      : "application/octet-stream";

    res.type(contentType);
    res.send(Buffer.from(item.img.data, "base64"));
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Route for fetching items by genre
app.get("/images/:genre", async (req, res) => {
  const { genre } = req.params;

  try {
    // Check if the genre is provided
    if (!genre) {
      return res.status(400).send("Genre is missing");
    }

    // Find items by genre
    const items = await Item.find({ genre });

    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/images/newArrival", async (req, res) => {
  try {
    console.log("Attempting to fetch items with newArrival set to true...");
    const items = await Item.find({ newArrival: true });
    console.log("Fetched items:", items);
    res.json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route for fetching items with topPicks set to true
app.get("/images/topPicks", async (req, res) => {
  try {
    const items = await Item.find({ topPicks: true });
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Route for fetching items with bestSeller set to true
app.get("/images/bestSeller", async (req, res) => {
  try {
    const items = await Item.find({ bestSeller: true });
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/images/:genre", async (req, res) => {
  const { genre } = req.params;

  try {
    const items = await Item.find({ genre });
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Route for fetching items with newArrival set to true
app.get("/images/newArrival/:genre", async (req, res) => {
  const { genre } = req.params;

  try {
    const items = await Item.find({ genre, newArrival: true });
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Route for fetching items with topPicks set to true
app.get("/images/topPicks/:genre", async (req, res) => {
  const { genre } = req.params;

  try {
    const items = await Item.find({ genre, topPicks: true });
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Route for fetching items with bestSeller set to true
app.get("/images/bestSeller/:genre", async (req, res) => {
  const { genre } = req.params;

  try {
    const items = await Item.find({ genre, bestSeller: true });
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.delete('/remove-purchased-books', async (req, res) => {
  try {
    const userId = req.body.userId;
    const bookId = req.body.bookId;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Remove the book from purchasedBooks array
    user.purchasedBooks.pull(bookId);
    await user.save();

    res.json({ message: 'Book removed successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




app.listen(PORT, () => {
  mongoose
    .connect("mongodb://localhost:27017/MyAppDatabase", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("server open and connected to db"));
});
