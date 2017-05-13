let path = require('path');

const config = {
    entry: './aerolineas/js/app.js',
    output: {
        filename: "app-bundle.js",
        path: path.resolve(__dirname,'aerolineas/js')
    },
    devtool: 'source-map',
    module: {
        rules: [
            //{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                }]
            }
        ]
    },
    stats: {
        colors: true
    },
};

module.exports = config;