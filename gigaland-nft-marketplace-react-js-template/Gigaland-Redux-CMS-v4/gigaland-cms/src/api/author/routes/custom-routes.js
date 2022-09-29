module.exports = {
    routes: [
        {
            method: "GET",
            path: "/author_ranks",
            handler: "author.ranks",
            config: {
                policies: []
            }
        }
    ]
}