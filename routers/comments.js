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

router.post("/create/", authMiddleware, async (req, res, next) => {
	// console.log(first)
	const userId = req.user.id;
	const { name, text } = req.body;
	console.log(name);
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
