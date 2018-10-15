
																				var fortunes = [
																									"Conquer your fears or they will conquer you.",
																																						"Rivers need springs.",
																													"Do not fear what you don't know.",
																				"You will have a pleasant surprise.",
																														"Whenever possible, keep it simple.",
																				];
module.exports = {

	fortune : function() {

				var tune = Math.floor(Math.random * fortunes.length);

					return fortunes[tune];
	}
};