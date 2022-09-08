"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class review extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			review.belongsTo(models.user);
			review.belongsTo(models.cocktail);
		}
	}
	review.init(
		{
			text: DataTypes.STRING,
			rating: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "review",
		}
	);
	return review;
};
