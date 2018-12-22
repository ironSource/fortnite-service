'use strict';

exports.add = (ctx) => {
    ctx.body   = {
        id: repository.add(ctx.request.body)
    };
    ctx.status = 200;
};

exports.schemas = {
    addBody: Joi.object({
        name  : Joi.string().required(),
        age   : Joi.number().min(0).max(10),
        level: Joi.number().min(1).max(100),
        birth : Joi.string().isoDate()
    }).and('age', 'birth').unknown()
};
