'use strict';

/**
 *  nft controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::nft.nft', ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params;
        const { query } = ctx;
        const relations = [
            'author', 
            'author.avatar', 
            'preview_image', 
            'bids.author', 
            'bids.author.avatar'
        ];
        query.populate = query.populate ? 
        query.populate + ','+relations.join(',') : relations.join(',');

        const entity = await strapi.service('api::nft.nft').findOne(id, query);
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        const sortedBids = sanitizedEntity.bids.sort((a, b) => (a.id < b.id) ? 1 : -1);

        sanitizedEntity.bids = sortedBids;
        sanitizedEntity.history = sortedBids;
        return sanitizedEntity;
    },

    async showcase(ctx) {
        const { query } = ctx;
        const relations = [
            'author',
            'preview_image'
        ];
        query.populate = query.populate ? 
        query.populate + ','+relations.join(',') : relations.join(',');
        const entity = await strapi.service('api::nft.nft').find(query);
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        const { results } = sanitizedEntity;
        // const sanitized = sanitizeEntity(entity, { model: strapi.models.nft });
        const filtered = results.filter(item => item.showcase);

        return filtered;
    }
}));
