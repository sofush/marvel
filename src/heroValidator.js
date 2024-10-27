import Joi from 'joi';

const heroValidator = Joi.object({
	id: Joi
		.number()
		.integer()
		.min(1),

	name: Joi
		.string()
		.min(1),

	alias: Joi
		.string()
		.optional()
		.min(1),

	powers: Joi
		.array()
		.items(Joi.string().min(1))
});

export default heroValidator;
