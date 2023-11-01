import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildOptions } from './types/config'
export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }
    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => !!resPath.includes('.module.'),
                        localIdentName: options.isDev ? '[path][name]__[local]' : '[hash:base64:5]'
                    }
                }
            },
            'sass-loader'
        ]
    }
    const babelLoader = {
        test: /\.(?:js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', { targets: 'defaults' }]
                ]
            }
        }
    }

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        scssLoader
    ]
}
