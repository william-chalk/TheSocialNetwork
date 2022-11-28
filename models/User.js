//username (string,Unique,Required,Trimmed)
//email (String,Required,Unique,Match valid email address)
//thoughts(array of _id values refrencing the Thought model)
//friends(array of _id values refrencing the User model (self-refrence))

//Virtual friendCount that retrieves the length of the User's freinds array feild on query

const { Schema, model } = require("mongoose");
const validateEmail = require("../utils/emailValidator");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: "Please provide a username",
      trim: true,
    },
    email: {
      type: String,
      required: "Please provide an email",
      unique: true,
      validate: [validateEmail, "invalid email"],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "invalid email"],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;
