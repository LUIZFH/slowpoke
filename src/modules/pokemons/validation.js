var Joi = require('joi')

exports.list = {
	query: Joi.object({
		name: Joi.string().min(3)
	}).allow(null)
}