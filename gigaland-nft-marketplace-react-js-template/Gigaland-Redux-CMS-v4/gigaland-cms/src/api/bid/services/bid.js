'use strict';

/**
 * bid service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bid.bid');
