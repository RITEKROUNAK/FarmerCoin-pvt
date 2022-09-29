module.exports = {
    routes: [
        {
            method: "GET",
            path: "/nft_showcases",
            handler: "nft.showcase",
            config: {
                policies: []
            }
        }
    ]
}