module.exports = () => {
	
	const Hapi = require('hapi')
	const Inert = require('inert')
	const Vision = require('vision')
	const HapiSwagger = require('hapi-swagger')
	const app = require("@src/app")

	const options = {
		info: {
			'title': 'Slowpoke Documentation',
			'version': "0.1",
		},
		securityDefinitions: {
			jwt: {
				type: 'apiKey',
				name: 'Authorization',
				in: 'header'
			}
		}
	}

	const server = new Hapi.Server({
		connections: {
			router: {
				stripTrailingSlash: true,
				isCaseSensitive: false
			}
		}
	})

	server.connection({ 
		host: 'localhost', 
		port: 5500,
		routes: { cors: true }
	})

	let modules = [
		{
			register: require("hapi-plugin-co")
		},
		{
			register: require("good"),
			options: {
				ops: {
					interval: 100000
				},
				reporters: {
					consoleReporter: [{
						module: 'good-console',
						args:[{ ops: '*', request: '*', log: '*', response: '*', 'error': '*' }]
					}, 'stdout'],
				}
			}
		},
		Inert,
		Vision,
		{
			register: HapiSwagger,
			options: options
		}
	].concat( app.modules )

	for( let m in app.middlewares ) server.ext('onRequest', app.middlewares[m] )

	server.route({ method: 'GET', path:'/', handler: (request, reply) => {
			reply('Slowpoke')
		}
	})

	server.register( modules, () => { 
		server.start((err) => {
			if (err) { throw err }

			let fs = require('fs')
			fs.readFile('./core/logo.txt', 'utf8', function (err,data) { console.log( err || data) })
			
			console.log('Server running at:', server.info.uri)
		})
	})

}