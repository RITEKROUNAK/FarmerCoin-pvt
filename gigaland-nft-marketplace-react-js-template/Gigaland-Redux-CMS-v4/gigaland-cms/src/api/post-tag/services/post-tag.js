'use strict';

/**
 * post-tag service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::post-tag.post-tag');
