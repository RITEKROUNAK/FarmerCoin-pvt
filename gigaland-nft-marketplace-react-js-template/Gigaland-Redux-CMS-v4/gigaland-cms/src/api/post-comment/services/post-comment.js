'use strict';

/**
 * post-comment service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::post-comment.post-comment');
