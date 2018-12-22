'use strict';

const KoaRouter      = require('koa-router');
const RouteValidator = require('./middlewares/RouteValidator');
const weapon            = require('./controllers/weapon');
const dance          = require('./controllers/dance');
const player         = require('./controllers/player');
const health         = require('./controllers/health');


exports.getRouteTable = () => {
    const koaRouter = new KoaRouter();

    koaRouter.get('/health', health.getStatus);

    const rv = new RouteValidator();
    rv.on('warn', console.warn);

    koaRouter.get('/weapon/:id', rv.create({
        requestSchema: {
            params: cat.schemas.getParams
        }
    }), weapon.get);
    koaRouter.post('/weapon', rv.create({
        requestSchema: {
            body: cat.schemas.addBody
        }
    }), weapon.add);

    koaRouter.post('/player', rv.create({
        requestSchema: {
            body: player.schemas.addBody
        }
    }), player.add);

    koaRouter.get('/dance/invalid-response', rv.create({
        responseSchema: {
            body: dance.schemas.unmatchedResponse
        }
    }), dance.add);

    return koaRouter;
};

