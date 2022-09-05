"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return await queryInterface.bulkInsert(
			"favorites",
			[
				{
					userId: 1,
					cocktailId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					userId: 2,
					cocktailId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					userId: 3,
					cocktailId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					userId: 1,
					cocktailId: 8,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					userId: 2,
					cocktailId: 11,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					userId: 3,
					cocktailId: 22,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return await queryInterface.bulkDelete("favorites", null, {});
	},
};
