const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;
const resolve = require('path').resolve;

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
            '@': resolve(__dirname, 'src')
        }
    },
    optimization:{
        concatenateModules:true
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: ['vue-loader']
        }, {
            test: /\.js$/,
            //只在src文件夹下查找
            include: [resolve(__dirname, 'src')],
            //不会去查找的路径
            exclude: /node_modules/,
            // 把Babel编译过的文件缓存起来
            loader: "babel-loader?cacheDirectory=.babel-cache"
        }, {
            test: /\.(css|scss)$/,
            use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [{
                loader: "url-loader",
                options: {
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
