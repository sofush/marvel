import Joi from 'joi';

const heroValidator = Joi.object({
	id: Joi
		.number()
		.required()
		.integer()
		.min(1),

	name: Joi
		.string()
		.required()
		.min(1),

	alias: Joi
		.string()
		.required()
		.optional()
		.min(1),

	powers: Joi
		.array()
		.required()
		.items(Joi.string().min(1))
});

export default heroValidator;
