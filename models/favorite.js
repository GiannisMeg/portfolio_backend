"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class favorite extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			favorite.belongsTo(models.user);
			favorite.belongsTo(models.cocktail);
		}
	}
	favorite.init(
		{
			userId: DataTypes.INTEGER,
			cocktailId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "favorite",
		}
	);
	return favorite;
};
