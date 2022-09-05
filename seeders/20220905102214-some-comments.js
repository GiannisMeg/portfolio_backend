"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"comments",
			[
				{
					name: "Apple",
					text: "sgksjgksg  skgjksjgljsdj  jgksjlkjgkdsjg lksjgksjglsdkjg",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 2,
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("comments", null, {});
	},
};
