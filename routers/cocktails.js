const { Router } = require("express");

//model
const Cocktail = require("../models").cocktail;

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
