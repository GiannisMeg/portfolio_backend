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
		const allUsers = await User.findAll({ includes: [Comment] });

		if (!allUsers) {
			res.status(404).send("no users found");
		}

		res.json(allUsers);
	} catch (err) {
		next(err);
	}
});

//create Comment

router.post("/create/:userId", async (req, res, next) => {
	const userId = req.user.userId;
	const { name, text } = req.body;
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
