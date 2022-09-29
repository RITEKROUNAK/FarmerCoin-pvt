'use strict';

/**
 * hot-collection service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hot-collection.hot-collection');
