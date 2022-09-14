const authMiddleware = require("../auth/middleware");

const { Router } = require("express");
const router = new Router();

//model
const Comment = require("../models").comment;
const User = require("../models").user;
const Favorite = require("../models").favorite;
const Cocktail = require("../models").cocktail;

//get usersWithComments

router.get("/comments", async (req, res, next) => {
	// console.log("req.body", req.body);
	try {
		const allComments = await Comment.findAll({ include: [User] });

		if (!allComments) {
			res.status(404).send("no comments found");
		}

		res.json(allComments);
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

// favorite / remove favorite
// if the cocktailId

router.post("/favorites", authMiddleware, async (req, res, next) => {
	// we get user id from token in this case and not from the params
	const userId = req.user.id;
	const { cocktailId } = req.body;

	// setup an array of cocktails id
	// we need a user with his fav cocktails
	const user = await User.findByPk(userId, {
		include: { model: Cocktail, as: "userFavorites" },
	});

	// find cocktail sto we can add it to our response while we create or delete
	const cocktail = await Cocktail.findByPk(cocktailId);

	// we expected user model inculded cocktail ids from fav table
	// console.log("user", user.dataValues);

	// we check reduxState and we find the name of the favArray in this case userFavorites
	const userFavoriteIds = user.userFavorites.map((fav) => fav.id);
	// we map through user.userFavorites and expecting an coctailId array of this single user
	// console.log("ids", userFavoriteIds);
	// now that we have an array of cocktailsId we can check if that are includes or not and destroy or create
	// destroy always both ids from the table

	try {
		if (userFavoriteIds.includes(parseInt(cocktailId))) {
			console.log("here");
			await Favorite.destroy({
				where: { cocktailId: cocktailId, userId: userId },
			});
			// console.log("favorite deleted", userRemoveFavorite);

			// we have send a message first to get  a nice text with our update state
			// then. we need to send the hole obj of the cocktail separate cause we have to check if this id exists or not in the fav after delete or create
			res.json({ message: "Cocktail Deleted", cocktail: cocktail });
		} else {
			const userNewFavorites = await Favorite.create({
				userId,
				cocktailId,
			});
			console.log("new favorite", userNewFavorites);
			res.json({
				message: "Cocktail Added to Favorites",
				cocktail: cocktail,
			});
		}
	} catch (err) {
		next(err);
	}
});

module.exports = router;
