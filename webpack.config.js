const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;

module.exports = {
    entry: ['./src/entry.js'],
    output: {
        path: __dirname,
        filename: 'build/main.js',
        chunkFilename: 'build/bundle.[name].[chunkhash].js'
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            '@': require('path').resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: ['vue-loader']
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.(css|scss)$/,
            use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [{
                loader: "url-loader",
                options: {
                    publicPath: "../",
                    name: "build/[path][name].[ext]",
                    context: "src/asset",
                    limit: 5000
                }
            }]
        }]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
