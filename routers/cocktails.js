const authMiddleware = require("../auth/middleware");
const { Router } = require("express");

//model
const Cocktail = require("../models").cocktail;
const Review = require("../models").review;

const router = new Router();

// Get All cocktails
router.get("/", async (req, res, next) => {
	// console.log("req.body", req.body);
	try {
		const allCocktails = await Cocktail.findAll();

		if (!allCocktails) {
			res.status(404).send("no cocktails found");
		}

		res.json(allCocktails);
	} catch (err) {
		next(err);
	}
});

// Get CocktailById
router.get("/:id", async (req, res, next) => {
	const { id } = req.params;

	try {
		const cocktailWithDetails = await Cocktail.findByPk(id);

		res.json(cocktailWithDetails);
		// console.log("id", cocktailWithDetails);
	} catch (err) {
		next(err);
	}
});

module.exports = router;

// post newREVIEW

router.post("/create/", authMiddleware, async (req, res, next) => {
	// we get user id from token in this case and not from the params
	const userId = req.user.id;
	// req body
	const { name, glass, instructions, ingredients } = req.body;
	// console.log(name);
	try {
		const newCocktail = await Cocktail.create({
			name,
			// category,
			// alcoholic,
			glass,
			instructions,
			// imageUrl,
			ingredients,
			userId,
		});

		console.log("new cocktail", newCocktail);

		res.json(newCocktail);
	} catch (err) {
		next(err);
	}
});

//Post Review
router.post("/create/review", authMiddleware, async (req, res, next) => {
	// we get user id from token in this case and not from the params
	const userId = req.user.id;
	// req body
	const { text, rating, id } = req.body;
	// console.log(name);
	try {
		const newReview = await Review.create({
			text,
			rating,
			cocktailId: id,
			userId,
		});

		console.log("new cocktail", newReview);

		res.json(newReview);
	} catch (err) {
		next(err);
	}
});
