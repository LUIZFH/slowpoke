module.exports = {

	//global middleware
	middlewares: [
		//
	],

	//custom modules
	modules: [
		{
			register: require("@modules/pokemons"),
			routes: {
				prefix: "/pokemons"
			}
		}
	]

}