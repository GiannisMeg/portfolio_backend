const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const { SALT_ROUNDS } = require("../config/constants");
// added
const Comment = require("../models").comment;
const Cocktail = require("../models").cocktail;

// router
const router = new Router();

//login
router.post("/login", async (req, res, next) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res
				.status(400)
				.send({ message: "Please provide both email and password" });
		}

		const user = await User.findOne({
			where: { email },
			include: [Comment, { model: Cocktail, as: "userFavorites" }],
		}); // { id, email, name, comments: [], favorites: [] }

		if (!user || !bcrypt.compareSync(password, user.password)) {
			return res.status(400).send({
				message: "User with that email not found or password incorrect",
			});
		}

		delete user.dataValues["password"]; // don't send back the password hash
		const token = toJWT({ userId: user.id });
		return res.status(200).send({ token, user: user.dataValues });
	} catch (error) {
		console.log(error);
		return res.status(400).send({ message: "Something went wrong, sorry" });
	}
});

//signup
router.post("/signup", async (req, res) => {
	const { email, password, name } = req.body;
	if (!email || !password || !name) {
		return res
			.status(400)
			.send("Please provide an email, password and a name");
	}

	try {
		const newUser = await User.create({
			email,
			password: bcrypt.hashSync(password, SALT_ROUNDS),
			name,
		});

		delete newUser.dataValues["password"]; // don't send back the password hash

		const token = toJWT({ userId: newUser.id });

		const fullUser = await User.findByPk(newUser.id, {
			include: [Comment, { model: Cocktail, as: "userFavorites" }],
		});

		res.status(201).json({ token, user: fullUser });
	} catch (error) {
		if (error.name === "SequelizeUniqueConstraintError") {
			return res
				.status(400)
				.send({ message: "There is an existing account with this email" });
		}

		return res.status(400).send({ message: "Something went wrong, sorry" });
	}
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
	// don't send back the password hash
	delete req.user.dataValues["password"];

	const fullUser = await User.findByPk(req.user.id, {
		include: [Comment, { model: Cocktail, as: "userFavorites" }],
	});

	res.status(200).send({ ...fullUser.dataValues });
});

module.exports = router;
