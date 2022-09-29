module.exports = {
    routes: [
        {
            method: "GET",
            path: "/blog-posts/comments/:id",
            handler: "blog-post.comments",
            config: {
                policies: []
            }
        },
        {
            method: "GET",
            path: "/blog-posts/tags/:id",
            handler: "blog-post.tags",
            config: {
                policies: []
            }
        },
        {
            method: "GET",
            path: "/blog-posts/posts/recents",
            handler: "blog-post.recents",
            config: {
                policies: []
            }
        }
    ]
}