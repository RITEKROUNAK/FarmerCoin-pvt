'use strict';

/**
 *  post-comment controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post-comment.post-comment');
