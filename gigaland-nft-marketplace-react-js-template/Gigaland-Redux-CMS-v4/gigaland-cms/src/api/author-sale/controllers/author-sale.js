'use strict';

/**
 *  author-sale controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::author-sale.author-sale', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;
        query.populate = query.populate ? query.populate + ',author, author.avatar' : 'author, author.avatar';

        const entity = await strapi.service('api::author-sale.author-sale').find(query);
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    }
}));
