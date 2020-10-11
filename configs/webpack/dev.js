// development config
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
    mode: 'development',
    entry: [
        'react-hot-loader/patch',
        //activate HMR for React

        'webpack-dev-server/client?http://localhost:8080',
        //bundle the client for webpack dev server
        //and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        //bundle the client for hot reloading
        //only- means to only hot reload for successful updates

        "./index.tsx"
    ],
    devtool: "source-map",
    output: {
      filename: "dev-bundle.js",
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        historyApiFallback: true,
    },
    optimization: {
        mangleWasmImports: true,
        mergeDuplicateChunks: true,
        minimize: false,
        nodeEnv: 'development'
    }
})
