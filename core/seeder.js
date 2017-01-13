let co = require("co")
const fs = require("fs")
const pathDir = "database/seed/"

module.exports = () => {
	co(function *() {

		let files = fs.readdirSync( pathDir )

		for( let i in files ) {
			
			let fileContent = require( '../' + pathDir + files[i] )
			let model = require( fileContent.model )

			yield model.remove()
			yield model.insertMany( fileContent.data )

			console.log( files[i] + " -> Done" )

		}

	})

}