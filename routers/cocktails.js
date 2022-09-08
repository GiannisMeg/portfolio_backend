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

router.post("/create/:cocktailId", authMiddleware, async (req, res, next) => {
	// console.log("TAKE IT", req.body);

	const { textValue, ratingValue } = req.body;
	const cocktailId = parseInt(req.params.cocktailId);
	try {
		const newReview = await Review.create({
			text: textValue,
			rating: parseInt(ratingValue),
			userId: cocktailId,
		});

		console.log("new cocktail", newReview);

		res.json(newReview);
	} catch (e) {
		console.log(e.message);
		next(e);
	}
});
