//thoughtText (String,Required,must be between 1-280 characters)
//createdAt (Date,set default to the current timestamp,Uses a getter method to format the timestamp on query)
//username(String,Required)
//reactions(Array of nested documents created with the reactionSchema)

//virtual reactionCount that retrieves the length of the thoughts reactions array feild on query

//Reaction Schema

//reactionId (use mongooses ObjectId datatype)
//reactionBody (String,Required,280 character maximum)
//username(String,Required)
//createdAt(Date,set default value to the current timestamp,uses getter method to format the timestamp on query)
const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: "please provide a username",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
});

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
  username: {
    type: String,
    required: "Please provide a username",
  },
  reactions: [ReactionSchema],
});

ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
