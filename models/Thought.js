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
