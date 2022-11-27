//username (string,Unique,Required,Trimmed)
//email (String,Required,Unique,Match valid email address)
//thoughts(array of _id values refrencing the Thought model)
//friends(array of _id values refrencing the User model (self-refrence))

//Virtual friendCount that retrieves the length of the User's freinds array feild on query
