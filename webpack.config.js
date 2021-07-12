const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv')

module.exports = () => {
    const env = dotenv.config().parsed,
    envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});

    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                { 
                    test: /\.(js)$/, 
                    use: 'babel-loader' 
                },
                { 
                    test: /\.css$/, 
                    use: ['style-loader', 'css-loader'] 
                }, 
                {
                    test: /\.(png|jp(e*)g|svg|gif)$/,
                    use: [
                    {
                        loader: 'file-loader',
                        options: {
                        name: 'images/[hash]-[name].[ext]',
                        },
                    },
                    ],
                },
            ]
        },
        mode: 'development',
        plugins: [
            new webpack.DefinePlugin(envKeys),
            new HtmlWebpackPlugin({
                template: 'src/static/index.html'
            })
        ],
        devServer: {
            historyApiFallback: true,
            contentBase: './',
            hot: true
        },
    }
}