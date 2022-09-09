"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"comments",
			[
				{
					name: "martini",
					text: "sgksjgksg  skgjksjgljsdj  jgksjlkjgkdsjg lksjgksjglsdkjg",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 2,
				},
				{
					name: "b53",
					text: "sgksjgksg  skgjksjgljsdj  jgksjlkjgkdsjg lksjgksjglsdkjg",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "paloma",
					text: "sgksjgksg  skgjksjgljsdj  jgksjlkjgkdsjg lksjgksjglsdkjg",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 3,
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("comments", null, {});
	},
};
