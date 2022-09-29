'use strict';

/**
 *  author controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::author.author', ({ strapi }) => ({
    async find(ctx) {
        const { id } = ctx.params;
        const { query } = ctx;
        query.populate = query.populate ? query.populate + ',author_sale,avatar,banner' : 'author_sale,avatar,banner';

        const entity = await strapi.service('api::author.author').find(query);
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        const { results } = sanitizedEntity;
        
        const filtered = (query.filters && query.filters.id) ? results : results.filter(author => author.author_sale);
        const sorted = id === undefined ? 
            filtered.sort((a, b) => (a.author_sale.sales < b.author_sale.sales) ? 1 : -1) 
            : 
            sanitized;

        sanitizedEntity.results = sorted;
        return this.transformResponse(sanitizedEntity);

        // return sorted;
    },
    
    async ranks(ctx) {
        const { query } = ctx;
        query.populate = query.populate ? query.populate + ',author_sale,avatar' : 'author_sale,avatar';
        const entity = await strapi.service('api::author.author').find(query);
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        const { results } = sanitizedEntity;
        const filtered = results.filter(author => author.author_sale);
        const sorted = filtered.sort((a, b) => (a.author_sale.sales < b.author_sale.sales) ? 1 : -1)
        
        sanitizedEntity.results = sorted;
        return this.transformResponse(sanitizedEntity);
    }
}));
