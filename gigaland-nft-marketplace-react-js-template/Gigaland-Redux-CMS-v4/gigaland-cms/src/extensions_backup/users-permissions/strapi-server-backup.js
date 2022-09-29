// const controllers = require('./controllers');

// module.exports = () => ({
//     // controllers
// })

// module.exports = (plugin) => {
//   console.log(plugin)
// //   console.log(plugin.services.user().add)
//     // console.log(plugin.controllers.auth.register)
//     plugin.controllers.auth.register = (ctx) => {
//         console.log(ctx)
//         ctx.body = { message: 'HelloWorld' };
//     }
//     // console.log(plugin.services)
//     // plugin.services.user.add = (ctx) => {
//     //     console.log(ctx)
//     // }

//     return plugin;
// };

module.exports = (plugin) => {

    // plugin.controllers.auth.register = (ctx) => {
    //     console.log(ctx)
    //     ctx.body = { message: 'HelloWorld' };
    // };
    console.log(plugin)
    return plugin;
}