const router = require("express").Router();

const {
  getUserThoughts,
  addThought,
  addReaction,
  removeReaction,
  removeThought,
} = require("../../controllers/thought-controller");

router.route("/:userId").get(getUserThoughts).post(addThought);

router.route("/:userId/:thoughtId").delete(removeThought);
router.route("/:userId/:thoughtId/reaction").post(addReaction);
router.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
