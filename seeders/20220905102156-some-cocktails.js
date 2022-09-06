"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"cocktails",
			[
				{
					name: "A1",
					category: "Cocktail",
					alcoholic: true,
					glass: "Cocktail glass",
					instructions:
						"Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
					ingredients:
						"Gin 1 3/4 shot,Grand Marnier 1 Shot ,Lemon Juice 1/4 Shot,Grenadine 1/8 Shot",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "ABC",
					category: "shot",
					alcoholic: true,
					glass: "shot glass",
					instructions: "Layered in a shot glass.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
					ingredients: "Amaretto 1/3,Baileys irish cream 1/3,Cognac 1/3",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Ace",
					category: "Cocktail",
					alcoholic: true,
					glass: "Cocktail glass",
					instructions:
						"Shake all the ingredients in a cocktail shaker and ice then strain in a cold glass.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg",
					ingredients:
						"Gin,Grenadine 2 shot,Heavy cream 1/2 shot,Milk 1/2 shot,Egg White 1/2 fresh",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Adam",
					category: "Cocktail",
					alcoholic: true,
					glass: "Cocktail glass",
					instructions:
						"In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/v0at4i1582478473.jpg",
					ingredients: "Dark rum 2oz , Lemon Juice 1oz, Grenadine 1oz",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "AT&T",
					category: "Ordinary drink",
					alcoholic: true,
					glass: "Highball glass",
					instructions: "Pour Vodka and Gin over ice, add Tonic and Stir",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/rhhwmp1493067619.jpg",
					ingredients: "absolut vodka 1oz , gin 1oz, tonic water 4oz",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "ACID",
					category: "shot",
					alcoholic: true,
					glass: "shot glass",
					instructions:
						"Poor in the 151 first followed by the 101 served with a Coke or Dr Pepper chaser.",

					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/xuxpxt1479209317.jpg",
					ingredients: "151 proof rum 1 oz, wild turkey 1oz",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Affair",
					category: "Cocktail",
					alcoholic: true,
					glass: "Highball glass",
					instructions:
						"Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/h5za6y1582477994.jpg",
					ingredients:
						"strawberry schnapps 2oz , orange juice 2oz , granberry juice 2oz , club soda",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Apello",
					category: "Cocktail",
					alcoholic: true,
					glass: "Collins glass",
					instructions: "Stirr. Grnish with maraschino cherry.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/uptxtv1468876415.jpg",
					ingredients:
						"orange juice 4cl , grapefruit juice 3cl, apple juice 1cl , maraschino 1",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Avalon",
					category: "Cocktail",
					alcoholic: true,
					glass: "Highball glass",
					instructions:
						"Fill a tall glass with ice. Layer the Finlandia Vodka, lemon and apple juices, Pisang Ambon, and top up with lemonade. Stir slightly and garnish with a spiralled cucumber skin and a red cherry. The cucumber provides zest and looks attractive. This drink, created by Timo Haimi, took first prize in the 1991 Finlandia Vodka Long Drink Competition.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/3k9qic1493068931.jpg",
					ingredients:
						"vodka 3 parts , psang 1part , apple juice 6 part , lemon juice 1 part, lemonade 2 part",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Abilene",
					category: "Cocktail",
					alcoholic: true,
					glass: "Highball glass",
					instructions:
						"Pour all of the ingredients into a highball glass almost filled with ice cubes. Stir well.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/smb2oe1582479072.jpg",
					ingredients:
						"dark rum 1 1/2 oz , peach nectar 2oz , orange juice 3oz",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Acapulco",
					category: "Cocktail",
					alcoholic: true,
					glass: "old-fashioned glass",
					instructions:
						"Combine and shake all ingredients (except mint) with ice and strain into an old-fashioned glass over ice cubes. Add the sprig of mint and serve.",

					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/il9e0r1582478841.jpg",
					ingredients:
						"light rim 1oz, triple sec 1 oz , lime juice 1tsp, sugar 1 tsp, egg white 1 , mint 1",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Affinity",
					category: "Cocktail",
					alcoholic: true,
					glass: "Cocktail glass",
					instructions:
						"In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/wzdtnn1582477684.jpg",
					ingredients:
						"scotch 1oz , sweet vermout 1oz , dry vermout 1 oz , orange bitters 2 dashes",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Applecar",
					category: "Cocktail",
					alcoholic: true,
					glass: "Cocktail glass",
					instructions:
						"Shake all ingredients with ice, strain into a cocktail glass, and serve.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/sbffau1504389764.jpg",
					ingredients: "applejack 1oz, triple sec 1oz , lemon juice 1oz ",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Artillery",
					category: "Cocktail",
					alcoholic: true,
					glass: "Cocktail glass",
					instructions:
						"Stir all ingredients with ice, strain into a cocktail glass, and serve.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/g1vnbe1493067747.jpg",
					ingredients:
						"sweet vermouth 1 1/2 tsp , gin 1 1/2oz , bitters 2dashes ",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "After sex",
					category: "Cocktail",
					alcoholic: true,
					glass: "Cocktail glass",
					instructions:
						"Pour the vodka and creme over some ice cubes in a tall glass and fill up with juice. to make it beuty full make the top of the glass with a grenadine and sugar",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/xrl66i1493068702.jpg",
					ingredients: "vodka 2cl , creme de banane 1cl , orange juice ",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "B-53",
					category: "shot",
					alcoholic: true,
					glass: "shot glass",
					instructions:
						"Layer the Kahlua, Sambucca and Grand Marnier into a shot glas in that order. Better than B-52",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/rwqxrv1461866023.jpg",
					ingredients: "kalhua 1/3 , sambuca 1/3, grand marnier 1/3",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Bellini",
					category: "Cocktail",
					alcoholic: true,
					glass: "Contemporarytail glass",
					instructions:
						"Pour peach purée into chilled flute, add sparkling wine. Stir gently.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/eaag491504367543.jpg",
					ingredients: "champagne 6oz , peach schnapps 1oz",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Bramble",
					category: "Cocktail",
					alcoholic: true,
					glass: "old-fashioned glass",
					instructions:
						"Fill glass with crushed ice. Build gin, lemon juice and simple syrup over. Stir, and then pour blackberry liqueur over in a circular fashion to create marbling effect. Garnish with two blackberries and lemon slice.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/twtbh51630406392.jpg",
					ingredients: "lemon juice 1cl, gin 4cl, sugar 1cl",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Bubble Gum",
					category: "Cocktail",
					alcoholic: true,
					glass: "shot glass",
					instructions: " Layer in order into a shot glass.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/spuurv1468878783.jpg",
					ingredients:
						"1/4 of banana liqueur ,orange juice , peach schnapps",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Bloody Mary",
					category: "Cocktail",
					alcoholic: true,
					glass: "Cocktail glass",
					instructions:
						"Stirring gently, pour all ingredients into highball glass. Garnish.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/t6caa21582485702.jpg",
					ingredients:
						"voska 1oz, tomato juice 3oz , lemon juice 1dash, worch sauce 1dash , tabasco sause 1dash, lime 1 wedje",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Caipirinha",
					category: "Cocktail",
					alcoholic: true,
					glass: "old-fasioned glass",
					instructions:
						"Place lime and sugar into old fashioned glass and muddle (mash the two ingredients together using a muddler or a wooden spoon). Fill the glass with ice and add the Cachaça",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/jgvn7p1582484435.jpg",
					ingredients: "sugar 2tps, lime 1tsp, cachaca 2 1/2oz",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Cuba Libre",
					category: "Cocktail",
					alcoholic: true,
					glass: "Highball glass",
					instructions:
						"Build all ingredients in a Collins glass filled with ice. Garnish with lime wedge",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/wmkbfj1606853905.jpg",
					ingredients: "light rum 2oz, lime 1/2, coca-cola",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Cream Soda",
					category: "Cocktail",
					alcoholic: true,
					glass: "Highball glass",
					instructions:
						"Pour 1oz of Spiced Rum into a highball glass with ice. Fill with Ginger Ale.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/yqstxr1479209367.jpg",
					ingredients: "spice rum 1oz, ginger ale",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Derby",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Cocktail glass",
					instructions:
						"Pour all ingredients into a mixing glass with ice. Stir. Strain into a cocktail glass. Garnish with a sprig of fresh mint in the drink.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/52weey1606772672.jpg",
					ingredients: "gin6 cl,Peach Bitters,2 dashes,Mint2 Fresh leaves",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Diesel",
					category: "Beer",
					alcoholic: true,
					glass: "Pint glass",
					instructions:
						"Pour the lager first then add the blackcurrant cordial. Top up with the cider. The colour sholud be very dark approaching the colour of Guiness.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/sxrrqq1454512852.jpg",
					ingredients:
						"Lager1/2 pint ,Cider,1/2 pint ,Blackcurrant cordial1 dash",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "H.D.",
					category: "Coffee / Tea",
					alcoholic: true,
					glass: "Beer mug",
					instructions:
						"Mix the whisky and Baileys Cream in a beer-glass (at least 50 cl). Fill the rest of the glass with coffee.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/upusyu1472667977.jpg",
					ingredients: "Whisky4 cl ,Baileys irish cream,8 cl ,Coffeenull",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Radler",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Highball glass",
					instructions:
						"Pour beer into large mug, slowly add the 7-up (or Sprite).",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/xz8igv1504888995.jpg",
					ingredients: "Beer12 oz ,7-Up,12 oz",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Sidecar",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Cocktail glass",
					instructions:
						"Pour all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/x72sik1606854964.jpg",
					ingredients: "Cognac2 oz ,Cointreau,1/2 oz ,Lemon juice1 oz",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Limeade",
					category: "Other/Unknown",
					alcoholic: false,
					glass: "Highball glass",
					instructions:
						"In a large glass, put the lime juice and sugar, and stir well. Add cold seltzer water to fill. Put the lime peels in the glass. Drink. Repeat until limes or soda run out.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/5jdp5r1487603680.jpg",
					ingredients:
						"LimeJuice of 1 ,Sugar,1 tblsp ,Soda water (seltzer water),Lime peelnull",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Old Pal",
					category: "Cocktail",
					alcoholic: true,
					glass: "Nick and Nora Glass",
					instructions:
						"Chill cocktail glass. Add ingredients to a mixing glass, and fill 2/3 full with ice. Stir about 20 seconds. Empty cocktail glass and strain into the glass. Garnish with a twist of lemon peel.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/x03td31521761009.jpg",
					ingredients: "Rye whiskey2 oz,Campari,1 oz,Dry Vermouth1 oz",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Snowday",
					category: "Cocktail",
					alcoholic: true,
					glass: "Collins glass",
					instructions:
						"Stir all ingredients with ice. Strain into a chilled rocks glass over fresh ice. Express orange peel over drink and garnish.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/4n1ipk1614009624.jpg",
					ingredients:
						"Vodka1 oz,Amaro Montenegro,1 oz,Ruby Port1 oz,Blood Orange1 tsp,Angostura BittersDash,Orange PeelGarnish with",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Daiquiri",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Cocktail glass",
					instructions:
						"Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg",
					ingredients:
						"Light rum1 1/2 oz ,Lime,Juice of 1/2 ,Powdered sugar1 tsp",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Godchild",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Champagne flute",
					instructions:
						"Shake all ingredients well with cracked ice, strain into a champagne flute, and serve.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/m5nhtr1504820829.jpg",
					ingredients: "Vodka1 oz ,Amaretto,1 oz ,Heavy cream1 oz",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Danbooka",
					category: "Coffee / Tea",
					alcoholic: true,
					glass: "Coffee Mug",
					instructions: "pour it in and mix it.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/vurrxr1441246074.jpg",
					ingredients: "Coffee3 parts ,Everclear,1 part",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Paradise",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Cocktail glass",
					instructions:
						"Shake together over ice. Strain into cocktail glass and serve chilled.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/ejozd71504351060.jpg",
					ingredients:
						"Gin7 parts,Apricot Brandy,4 parts,Orange Juice 3parts ",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Dragonfly",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Highball glass",
					instructions:
						"In a highball glass almost filled with ice cubes, combine the gin and ginger ale. Stir well. Garnish with the lime wedge.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/uc63bh1582483589.jpg",
					ingredients: "Gin1 1/2 oz ,Ginger ale,4 oz ,Lime1",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Foxy Lady",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Cocktail glass",
					instructions:
						"Shake all ingredients with ice, strain into a chilled cocktail glass, and serve.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/r9cz3q1504519844.jpg",
					ingredients:
						"Amaretto1/2 oz ,Creme de Cacao,1/2 oz ,Light cream2 oz",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Gin Daisy",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Old-fashioned glass",
					instructions:
						"In a shaker half-filled with ice cubes, combine the gin, lemon juice, sugar, and grenadine. Shake well. Pour into an old-fashioned glass and garnish with the cherry and the orange slice.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/z6e22f1582581155.jpg",
					ingredients:
						"Gin2 oz ,Lemon juice,1 oz ,Sugar1/2 tsp superfine ,Grenadine1/2 tsp ,Maraschino cherry1 ,Orange1 ",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Gin Toddy",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Old-fashioned glass",
					instructions:
						"Mix powdered sugar and water in an old-fashioned glass. Add gin and one ice cube. Stir, add the twist of lemon peel, and serve.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/jxstwf1582582101.jpg",
					ingredients:
						"Gin2 oz ,Water,2 tsp ,Powdered sugar1/2 tsp ,Lemon peel1 twist",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Godfather",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Old-fashioned glass",
					instructions:
						"Pour all ingredients directly into old fashioned glass filled with ice cubes. Stir gently.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/e5zgao1582582378.jpg",
					ingredients: "Scotch1 1/2 oz ,Amaretto,3/4 oz",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Godmother",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Old-fashioned glass",
					instructions:
						"Pour vodka and amaretto into an old-fashioned glass over ice and serve.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/quksqg1582582597.jpg",
					ingredients: "Vodka1 1/2 oz ,Amaretto,3/4 oz",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Pink Lady",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Cocktail glass",
					instructions:
						"Shake all ingredients with ice, strain into a cocktail glass, and serve.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/5ia6j21504887829.jpg",
					ingredients:
						"Gin1 1/2 oz ,Grenadine,1 tsp ,Light cream1 tsp ,Egg white 1",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "GG",
					category: "Ordinary Drink",
					alcoholic: false,
					glass: "Collins Glass",
					instructions:
						"Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg",
					ingredients: "Galliano2 1/2 shots ,Ginger ale,Icenull",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},

				{
					name: "Kir",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Wine Glass",
					instructions:
						"Add the crème de cassis to the bottom of the glass, then top up with wine.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg",
					ingredients: "Creme de Cassis 1part ,Champagne 5parts",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "747",
					category: "Shot",
					alcoholic: true,
					glass: "Shot glass",
					instructions:
						"pour kaluha, then Baileys, then Frangelico not chilled and not layered -- SERVE!!!",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg",
					ingredients:
						"Kahlua 1/3part ,Baileys irish cream 1/3part ,Frangelico 1/3part ,",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "252",
					category: "Shot",
					alcoholic: true,
					glass: "Shot glass",
					instructions:
						"Add both ingredients to shot glass, shoot, and get drunk quick",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg",
					ingredients:
						"151 proof rum 1/2shot Bacardi ,Wild Turkey,1/2 shot",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},

				{
					name: "Smut",
					category: "Punch / Party Drink",
					alcoholic: true,
					glass: "Beer mug",
					instructions: "Throw it all together and serve real cold.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/rx8k8e1504365812.jpg",
					ingredients:
						"Red wine 1/3part ,Peach schnapps 1shot ,Pepsi Cola 1/3part ,Orange juice 1/3part",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Rose",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Cocktail glass",
					instructions:
						"Shake together in a cocktail shaker, then strain into chilled glass. Garnish and serve.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/8kxbvq1504371462.jpg",
					ingredients:
						"Dry Vermouth 1/2oz ,Gin 1oz ,Apricot brandy 1/2oz ,Lemon juice 1/2tsp ,Grenadine1 tsp ,Powdered sugarnull",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},

				{
					name: "Karsk",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Highball glass",
					instructions:
						"Put a copper coin in a coffe-cup and fill up with coffee until you no longer see the coin, then add alcohol until you see the coin. Norwegian speciality.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/808mxk1487602471.jpg",
					ingredients: "Coffee 1part,Grain alcohol 2parts",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Melya",
					category: "Coffee / Tea",
					alcoholic: false,
					glass: "Coffee mug",
					instructions:
						"Brew espresso. In a coffee mug, place 1 teaspoon of unsweetened powdered cocoa, then cover a teaspoon with honey and drizzle it into the cup. Stir while the coffee brews, this is the fun part. The cocoa seems to coat the honey without mixing, so you get a dusty, sticky mass that looks as though it will never mix. Then all at once, presto! It looks like dark chocolate sauce. Pour hot espresso over the honey, stirring to dissolve. Serve with cream.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/xwtptq1441247579.jpg",
					ingredients: "Espressonull,Honey,Unsweetened ,Cocoa powdernull,",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},

				{
					name: "Zorro",
					category: "Coffee / Tea",
					alcoholic: true,
					glass: "Coffee Mug",
					instructions:
						"add all and pour black coffee and add whipped cream on top.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/kvvd4z1485621283.jpg",
					ingredients:
						"Sambuca 2cl,Baileys irish cream 2cl ,White Creme de Menthe 2cl ,",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Orgasm",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Cocktail glass",
					instructions:
						"Shake all ingredients with ice, strain into a chilled cocktail glass, and serve.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/vr6kle1504886114.jpg",
					ingredients:
						"Creme de Cacao 1/2oz whiteAmaretto 1/2oz ,Triple sec 1/2oz ,Vodka1/2 oz ,Light cream1 oz ,0",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Zinger",
					category: "Soft Drink",
					alcoholic: true,
					glass: "Highball glass",
					instructions:
						"Get a shot glass and pour in three shots of the schnapps. Do the same with the Surge Cola. Then down it like Scheetz would.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/iixv4l1485620014.jpg",
					ingredients: "Peachtree schnapps 4shots ,Surge 4shots",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},

				{
					name: "Spritz",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Old-Fashioned glass",
					instructions: "Build into glass over ice, garnish and serve.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/j9evx11504373665.jpg",
					ingredients: "Prosecco 6cl,Campari 4cl,Soda Water splash,",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Zombie",
					category: "Cocktail",
					alcoholic: true,
					glass: "Hurricane glass",
					instructions:
						"Blend at high speed for no more than 5 seconds.Pour into a glass, add ice cubes to fill, then add the garnish.*Donn’s mix: Bring 3 crushed cinnamon sticks, 1 cup of sugar and 1 cup of water to a boil, stirring until the sugar is dissolved.Simmer for 2 minutes, then remove from the heat and let sit for at least 2 hours before straining into a clean glass bottle.Then add 1 part of the syrup and 2 parts of fresh grapefruit juice together.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/2en3jk1509557725.jpg",
					ingredients:
						"Rum 1 1/2oz,Gold rum 1 1/2oz,151 proof rum 1oz,Pernod 1tsp,Grenadine 1tsp,Lime Juice 1tsp",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Sazerac",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Old-fashioned glass",
					instructions:
						"Rinse a chilled old-fashioned glass with the absinthe, add crushed ice, and set it aside. Stir the remaining ingredients over ice and set it aside. Discard the ice and any excess absinthe from the prepared glass, and strain the drink into the glass. Add the lemon peel for garnish.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/vvpxwy1439907208.jpg",
					ingredients:
						"Ricard 1tsp ,Sugar 1/2tsp superfine ,Peychaud bitters 2 dashes ,Water 1tsp ,Bourbon 2oz ,Lemon peel 1 twist",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},

				{
					name: "Gin Fizz",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Highball glass",
					instructions:
						"Shake all ingredients with ice cubes, except soda water. Pour into glass. Top with soda water.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/drtihp1606768397.jpg",
					ingredients:
						"Gin 2oz ,Lemon ,Juice of 1/2 ,Powdered sugar 1tsp ,Carbonated waternull,",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Kamikaze",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Cocktail glass",
					instructions:
						"Shake all ingredients together with ice. Strain into glass, garnish and serve.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/d7ff7u1606855412.jpg",
					ingredients: "Vodka 1oz ,Triple sec 1oz ,Lime juice 1oz ,",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},

				{
					name: "Royal Fizz",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Collins glass",
					instructions:
						"Shake all ingredients (except cola) with ice and strain into a chilled collins glass. Fill with cola and serve.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/wrh44j1504390609.jpg",
					ingredients:
						"Gin 1oz ,Sweet and sour 2oz ,Egg 1whole ,Coca-Colanull,",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Sea breeze",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Highball glass",
					instructions:
						"Build all ingredients in a highball glass filled with ice. Garnish with lime wedge.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/7rfuks1504371562.jpg",
					ingredients:
						"Vodka 1 1/2oz ,Cranberry juice 4oz ,Grapefruit juice 1oz ,",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},

				{
					name: "Vodka Fizz",
					category: "Other/Unknown",
					alcoholic: true,
					glass: "White wine glass",
					instructions:
						"Blend all ingredients, save nutmeg. Pour into large white wine glass and sprinkle nutmeg on top.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/xwxyux1441254243.jpg",
					ingredients:
						"Vodka 2oz ,Half-and-half 2oz ,Limeade 2oz ,Icenull ,Nutmegnull",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Martinez 2",
					category: "Cocktail",
					alcoholic: true,
					glass: "Cocktail glass",
					instructions:
						"Add all ingredients to a mixing glass and fill with ice.stir until chilled, and strain into a chilled coupe glass.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/fs6kiq1513708455.jpg",
					ingredients:
						"Gin1 1/2oz, Sweet Vermouth 1 1/2oz, Maraschino Liqueur 1tsp, Angostura Bitters 2dashes,",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},

				{
					name: "Chicago Fizz",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Highball glass",
					instructions:
						"Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/qwvwqr1441207763.jpg",
					ingredients:
						"Light rum 1oz ,Port 1oz ,LemonJuice of 1/2,Powdered sugar 1tsp,Egg white 1 ,Carbonated waternull",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Tequila Fizz",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Collins glass",
					instructions:
						"Shake all ingredients (except ginger ale) with ice and strain into a collins glass over ice cubes. Fill with ginger ale, stir, and serve.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/2bcase1504889637.jpg",
					ingredients:
						"Tequila 2oz,Lemon juice 1tblsp ,Grenadine 3/4oz ,Egg white 1 ,Ginger alenull",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Grizzly Bear",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Collins Glass",
					instructions: "Served over ice. Sounds nasty, but tastes great.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/k6v97f1487602550.jpg",
					ingredients:
						"Amaretto 1part ,Jägermeister 1part,Kahlua 1part,Milk 2 1/2 parts",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},

				{
					name: "Imperial Fizz",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Highball glass",
					instructions:
						"Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/zj1usl1504884548.jpg",
					ingredients:
						"Light rum 1/2oz ,Blended whiskey 1 1/2oz ,LemonJuice of 1/2 ,Powdered sugar 1tsp ,Carbonated waternull",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},

				{
					name: "Fuzzy Asshole",
					category: "Coffee / Tea",
					alcoholic: true,
					glass: "Coffee mug",
					instructions:
						"fill coffe mug half full of coffee. Fill the other half full of Peach Schnapps. Stir and drink while hot.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/wrvpuu1472667898.jpg",
					ingredients: "Coffee 1/2 ,Peach schnapps 1/2",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Mojito",
					category: "Cocktail",
					alcoholic: true,
					glass: "Highball glass",
					instructions:
						"Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
					ingredients:
						"Light rum 2-3oz ,Lime ,Juice of 1 ,Sugar 2tsp ,Mint 2-4 ,Soda waternull",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Mimosa",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Champagne flute",
					instructions:
						"Ensure both ingredients are well chilled, then mix into the glass. Serve cold.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/juhcuu1504370685.jpg",
					ingredients: "Champagne Chilled ,Orange juice 2oz",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},

				{
					name: "Paloma",
					category: "Cocktail",
					alcoholic: true,
					glass: "Collins glass",
					instructions: "Stir together and serve over ice.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/samm5j1513706393.jpg",
					ingredients: "Grape Soda 3oz,Tequila 1 1/2 oz",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Gimlet",
					category: "Cocktail",
					alcoholic: true,
					glass: "Martini Glass",
					instructions:
						"Add all the ingredients to a shaker and fill with ice.Shake, and strain into a chilled cocktail glass or an Old Fashioned glass filled with fresh ice.Garnish with a lime wheel.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/3xgldt1513707271.jpg",
					ingredients:
						"Gin 2 1/2oz,Lime Juice 1/2oz,Sugar Syrup 1/2oz,Lime 1",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},

				{
					name: "Mai Tai",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Collins glass",
					instructions:
						"Shake all ingredients with ice. Strain into glass. Garnish and serve with straw.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/twyrrp1439907470.jpg",
					ingredients:
						"Light rum 1oz ,Orgeat syrup 1/2oz ,Triple sec 1/2oz ,Sweet and sour 1 1/2oz ,Cherry 1",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Martini",
					category: "Cocktail",
					alcoholic: true,
					glass: "Cocktail glass",
					instructions:
						"Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg",
					ingredients: "Gin 1 2/3oz,Dry Vermouth 1/3oz,Olive 1",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},

				{
					name: "Ipamena",
					category: "Ordinary Drink",
					alcoholic: false,
					glass: "Wine Glass",
					instructions:
						"Cut half a lime into pieces, place in a shaker, add the sugar and crush. Measure the passion fruit juice, add it to the shaker and fill up with ice cubes. Close the shaker and shake vigorously. Pour the liquid into a glass, top up with ginger ale, stir with a teaspoon and then garnish the rim of the glass with a slice of lime",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/yswuwp1469090992.jpg",
					ingredients:
						"Lime½,Brown sugar 2tsp,Passion fruit juice 4cl,Ginger aletop up with Icefill",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},

				{
					name: "Vampiro",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Old-Fashioned glass",
					instructions:
						'Vampiros may be made in a tall glass or an old fashioned glass. Bartenders may first "rim" the glass with Kosher Salt, which is done by placing a layer of Kosher Salt on a chopping board, moistening the glass\' rim with lime juice or water, and then placing the upside down glass rim onto the Kosher Salt, so that the salt sticks to the moistened rim. The second step is to fill half the glass with ice and add one or two shooter glasses full of high quality Tequila. The next stage is to add the flavouring elements. This is done by squeezing a fresh lime into the glass, adding a few grains of salt, adding citrus-flavoured soda pop, until the glass is 4/5 full, and then adding spicy Viuda de Sanchez (or orange juice, lime juice and pico de gallo). The final step is to stir the ingredients so that the flavours are properly blended.',
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/yfhn371504374246.jpg",
					ingredients:
						"Tequila 6cl,Tomato Juice 3cl,Orange Juice 3cl,Lime Juice 1.5cl,Sugar Syrup 1dash,Salt 1 pinch",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},

				{
					name: "Rum Sour",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Whiskey sour glass",
					instructions:
						"In a shaker half-filled with ice cubes, combine the rum, lemon juice, and sugar. Shake well. Strain into a sour glass and garnish with the orange slice and the cherry.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/bylfi21504886323.jpg",
					ingredients:
						"Light rum 2oz ,Lemon juice 1oz ,Sugar 1/2tsp superfine ,Orange 1 ,Maraschino cherry 1",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},

				{
					name: "Rum Toddy",
					category: "Ordinary Drink",
					alcoholic: true,
					glass: "Old-fashioned glass",
					instructions:
						"Dissolve powdered sugar in water in an old-fashioned glass. Add rum and one ice cube and stir. Add the twist of lemon peel and serve.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/athdk71504886286.jpg",
					ingredients:
						"Rum 2oz light or dark,Powdered sugar 2tsp ,Lemon peel 1 twist,Water 2tsp",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					name: "Egg Cream",
					category: "Other/Unknown",
					alcoholic: false,
					glass: "Coffee mug",
					instructions:
						"Mix syrup and milk in a fountain glass. Add soda water, serve with a straw.",
					imageUrl:
						"https://www.thecocktaildb.com/images/media/drink/mvis731484430445.jpg",
					ingredients:
						"Chocolate syrup 2tblsp,Milk 6oz whole ,Soda water 6oz ,",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("cocktails", null, {});
	},
};
