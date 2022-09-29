'use strict';

/**
 * author service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::author.author', ({ strapi }) =>  ({
    // async create(params) {
    //     // some logic here
    //     console.log('params =>', params)
    //     console.log('creating author....')
    //     const result = await super.create(params);
    //     // some more logic
    //     console.log(result)
    //     return result;
    // }
}));
