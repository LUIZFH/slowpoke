const Model = require("./model")

class PokemonController {

	* list( request, reply ) {

		if(request.query.name) {
			var regex = new RegExp(request.query.name, 'i')
			let data = yield Model.find( { name: regex }).limit(20)
			reply( data )
		} else {
			let data = yield Model.find().limit(20)
			reply( data )
		}

		
	}

}

module.exports = new PokemonController