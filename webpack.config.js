module.exports = {
    entry: {
        index: './src/index'
    },
    output: {
        path: __dirname + "/dist",
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            // {
            //     test: /\.csss$/,
            //     loader: "style-loader!css-loader!less-loader"
            // }
        ]
    }
};