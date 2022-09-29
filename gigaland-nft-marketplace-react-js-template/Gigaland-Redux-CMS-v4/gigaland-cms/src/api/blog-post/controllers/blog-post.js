'use strict';

/**
 *  blog-post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog-post.blog-post', ({ strapi }) => ({
    async find(ctx) {

        const { query } = ctx;
        query.populate = query.populate ? query.populate + ',author, author.avatar, cover' : 'author, author.avatar, cover';

        const entity = await strapi.service('api::blog-post.blog-post').find(query);
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    },
    
    async findOne(ctx) {
        const { id } = ctx.params;
        const { query } = ctx;
        query.populate = query.populate ? 
        query.populate + ',author, author.avatar, cover' : 'author, author.avatar, cover';

        const entity = await strapi.service('api::blog-post.blog-post').findOne(id, query);
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    },

    async comments(ctx) {

        const { id } = ctx.params;
        const { query } = ctx;
        const relations = [
            'post_comment', 
            'post_comment.comments', 
            'post_comment.comments.author', 
            'post_comment.comments.author.avatar', 
            'post_comment.comments.replies', 
            'post_comment.comments.replies.author',
            'post_comment.comments.replies.author.avatar'
        ]
        query.populate = query.populate ? 
        query.populate + ','+relations.join(',') : relations.join(',');
        const entity = await strapi.service('api::blog-post.blog-post').findOne(id, query);
        const result = entity.post_comment.comments.filter(comment => comment.is_reply === false);
        const sorted = result.sort((a, b) => (a.updatedAt > b.updatedAt) ? 1 : -1);
        const comments = sorted.map(comment => {
            return {
                avatar: comment.author.avatar.url,
                username: comment.author.username,
                comment: comment.text,
                timestamp: comment.updatedAt,
                replies: comment.replies.map(reply => {
                    return {
                        avatar: reply.author.avatar.url,
                        username: reply.author.username,
                        comment: reply.text,
                        timestamp: reply.updatedAt
                    }
                })
            }
        });

        const response = {
            counts: entity.post_comment.comments.length,
            comments : comments
        };

        return response;
    },
    
    async tags(ctx) {
        const { id } = ctx.params;
        const { query } = ctx;
        const relations = [
            'post_tag',
            'post_tag.tags'
        ]
        query.populate = query.populate ? 
        query.populate + ','+relations.join(',') : relations.join(',');

        const entity = await strapi.service('api::blog-post.blog-post').findOne(id, query);
        const tags = entity.post_tag.tags.map(tag => {
            return { name: tag.name }
        });

        return tags;
    },

    async recents(ctx) {
        const { query } = ctx;
        const entity = await strapi.service('api::blog-post.blog-post').find(query);
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        const { results } = sanitizedEntity;
        const recents = results.slice(0,4).map(post => {
            return { title: post.title, timestamp: post.updatedAt }
        });

        return recents;
    }
}));
