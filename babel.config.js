module.exports = (api) => {
    api.cache.using(() => `${process.env.NODE_ENV}-${process.env.HOT}`);
    const plugins = [
        "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread"
    ]
    if(!api.env('production') && process.env.HOT){
        plugins.push("react-refresh/babel")
    }
    return {
        presets: [
            "@babel/preset-env",
            "@babel/preset-typescript",
            ["@babel/preset-react", {runtime: "automatic"}]
        ],
        plugins: plugins
    }
}