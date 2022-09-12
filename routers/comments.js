const authMiddleware = require("../auth/middleware");

const { Router } = require("express");
const router = new Router();

//model
const Comment = require("../models").comment;
const User = require("../models").user;

//get usersWithComments

router.get("/", async (req, res, next) => {
	// console.log("req.body", req.body);
	try {
		const allUsers = await User.findAll({ include: [Comment] });

		if (!allUsers) {
			res.status(404).send("no users found");
		}

		res.json(allUsers);
	} catch (err) {
		next(err);
	}
});

//create Comment
// userID we take from the token so we dont need to send it with the ocj
router.post("/create/", authMiddleware, async (req, res, next) => {
	// we get user id from token in this case and not from the params
	const userId = req.user.id;
	// req body
	const { name, text } = req.body;
	// console.log(name);
	try {
		const newComment = await Comment.create({
			name,
			text,
			userId,
		});

		console.log("new comment", newComment);

		res.json(newComment);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
