//get all users
//get a single user by its _id and populated thought and friend data
//post a new user
//put to update user by its _id
//delete to remove user by its _id
//bonus remove users associated thoughts when deleted

const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
