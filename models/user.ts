import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Email is required!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

// When working with regular Express backend:
// const User = model("User", userSchema);
// export default User;

// This is a regular always on, always running back-end server

// In Next.js it's a little bit different, the route is only going to be created and running for the time for the time when it is getting called

// The "models" object is provided by the Mongoose library and stores all the registered models.
// If a model named "User" already exists in the "models" object, it assigns that existing model to the "User" variable.
// This prevents redifining the model and ensures that the existing model is reused.

// If a model name "User" does not exist in the "models" object, the "model" function from Mongoose is called to create new model
// The newly created model is then assigned to the "User" variable.

const User = models.User || model("User", userSchema);
export default User;
