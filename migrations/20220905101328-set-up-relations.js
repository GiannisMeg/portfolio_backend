"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		// await queryInterface.addColumn("todoLists", "userId", {
		// 	type: Sequelize.INTEGER,
		// 	references: {
		// 		model: "users",
		// 		key: "id",
		// 	},
		// 	onUpdate: "CASCADE",
		// 	onDelete: "SET NULL",
		// });
		await queryInterface.addColumn("cocktails", "userId", {
			type: Sequelize.INTEGER,
			references: {
				model: "users",
				key: "id",
			},
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		});
		await queryInterface.addColumn("comments", "userId", {
			type: Sequelize.INTEGER,
			references: {
				model: "users",
				key: "id",
			},
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		});
		await queryInterface.addColumn("reviews", "userId", {
			type: Sequelize.INTEGER,
			references: {
				model: "users",
				key: "id",
			},
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		});
		await queryInterface.addColumn("reviews", "cocktailId", {
			type: Sequelize.INTEGER,
			references: {
				model: "cocktails",
				key: "id",
			},
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn("cocktails", "userId");
		await queryInterface.removeColumn("comments", "userId");
		await queryInterface.removeColumn("reviews", "userId");
		await queryInterface.removeColumn("reviews", "cocktailId");
	},
};
