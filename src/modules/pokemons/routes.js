const controller = require('./controller')
const validator = require('./validation')

module.exports = [

	{
		method: 'GET',
		path:'/',
		handler: controller.list,
		config: {
			tags: ['api'],
			validate: validator.list
		}
	}

]