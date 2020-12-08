// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const router = require("express").Router();
// const UserModel = require("../models/UserModel");

// // Login user
// router.route("/").post(async (req, res) => {
//   const body = req.body;

//   // Find user by username
//   const user = await UserModel.findOne({ email: body.email });

//   // Compare passwords
//   const passwordCorrect =
//     user === null
//       ? false
//       : await bcrypt.compare(body.password, user.passwordHash);

//   // Send 401 status to the client if password and username are invalid
//   // 401 Unauthorized - The request requires user authentication
//   if (!(user && passwordCorrect)) {
//     res.status(401).json({
//       error: "Invalid username or password",
//     });
//   }

//   const userForToken = {
//     username: user.username,
//     id: user._id,
//   };

//   // If password and username are valid, create a new token
//   // The token contains the username and the user id in a digitally signed form => userForToken
//   const token = jwt.sign(userForToken, process.env.SECRET);

//   res.status(200).send({ token, name: user.name });
// });

// module.exports = router;
