import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";
import {types} from "sass";
import Boolean = types.Boolean;
export function buildLoaders(options: BuildOptions):webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }
    const typescriptLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
    }
    const scssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            auto: (resPath: string) => !!resPath.includes('.module.'),
                            localIdentName: options.isDev ? '[path][name]__[local]' : '[hash:base64:5]'
                        }
                    }
                },
                "sass-loader",
            ],
    }

    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        scssLoader
    ]
}