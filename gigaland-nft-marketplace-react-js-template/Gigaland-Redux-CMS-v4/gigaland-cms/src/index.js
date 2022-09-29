'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    // strapi.db.lifecycles.subscribe({
    //   models: ['plugin::users-permissions.user'],
    //   async afterCreate(event) {
    //     // afterCreate lifeclcyle
    //     const { result, params } = event;
    //     console.log(result.createdAt);
    //     console.log(params);
    //     const authorData = {
    //         username: result.username,
    //         users_permissions_user: result.id
    //     };
    //     // console.log(new Date().toISOString())
    //     const data = await strapi.service('api::author.author').create(authorData);
    //     console.log(data);
    //   }
    // });
  },
};
