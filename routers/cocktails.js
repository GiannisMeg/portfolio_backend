const { Router } = require("express");

//model
const Cocktail = require("../models").cocktail;
const Comment = require("../models").comment;
const Review = require("../models").review;

const router = new Router();

// Get All cocktails
router.get("/", async (req, res, next) => {
	try {
		const allCocktails = await Cocktail.findAll();

		if (!allCocktails) {
			res.status(404).send("no cocktail found");
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
		const cocktailWithDetails = await Cocktail.findByPk(id, {
			include: { model: Comment },
		});

		res.json(cocktailWithDetails);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
