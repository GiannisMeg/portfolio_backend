"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class cocktail extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			cocktail.belongsTo(models.user);
			cocktail.belongsToMany(models.user, {
				through: "favorites",
				foreignKey: "cocktailId",
			});
			cocktail.hasMany(models.review);
		}
	}
	cocktail.init(
		{
			name: DataTypes.STRING,
			category: DataTypes.STRING,
			alcoholic: DataTypes.BOOLEAN,
			glass: DataTypes.STRING,
			instructions: { type: DataTypes.STRING(2048) },
			imageUrl: DataTypes.TEXT,
			ingredients: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "cocktail",
		}
	);
	return cocktail;
};
