// shared config (dev and prod)
const path = require('path');
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    context: resolve(__dirname, '../../src'),
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                        plugins: [
                            '@babel/plugin-external-helpers',
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-proposal-object-rest-spread',
                        ],
                    },
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }],
            },
            {
                test: /\.(scss|sass)$/,
                exclude: /\.module.(s(a|c)ss)$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'sass-loader',
                ],
            },
            {
                test: /\.module\.s(a|c)ss$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                            },
                            sourceMap: false,
                        }
                    },
                    {  loader: "sass-loader" }
                ]
            },
            {
                test: /\.less$/,
                use: [{ loader: 'style-loader'}, { loader: 'css-loader' }, {
                    loader: 'less-loader',
                    options: {
                        lessOptions: {
                            modifyVars: {
                                'primary-color': '#0431ec',
                                'component-background': '#ffffff'
                            },
                            javascriptEnabled: true,
                        }
                    }
                }]
            }

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve( './public/index.html'),
        }),
    ],
    performance: {
        hints: false,
    },
};
