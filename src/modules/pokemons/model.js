const mongoose = require("@common/model")

var schema = mongoose.Schema(
	{
		number: { type: String, unique : true, required : true },
		name: { type: String, required : true },
	}, 
	{
		versionKey: false,
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		},
		toObject: { virtuals: true, timestamps: false },
		toJSON: { virtuals: true, timestamps: false }
	}
)


module.exports = mongoose.model('Pokemon', schema, 'pokemons')