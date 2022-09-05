"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"reviews",
			[
				{
					text: "the best cocktail i ever had",
					rating: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 2,
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("reviews", null, {});
	},
};
