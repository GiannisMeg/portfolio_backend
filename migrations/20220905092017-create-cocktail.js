"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("cocktails", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			category: {
				type: Sequelize.STRING,
			},
			alcoholic: {
				type: Sequelize.BOOLEAN,
			},
			glass: {
				type: Sequelize.STRING,
			},
			instructions: {
				type: Sequelize.STRING(2048),
			},
			imageUrl: {
				type: Sequelize.TEXT,
			},
			ingredients: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("cocktails");
	},
};
