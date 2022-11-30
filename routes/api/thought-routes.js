const router = require("express").Router();

const {
  getThoughts,
  addThought,
  addReaction,
  removeReaction,
  removeThought,
  getThoughtById,
  updateThought,
} = require("../../controllers/thought-controller");

router.route("/").get(getThoughts);
router.route("/:userId").post(addThought);

router
  .route("/:userId/:thoughtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

router.route("/:thoughtId/reactions").post(addReaction);
router.route("/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
