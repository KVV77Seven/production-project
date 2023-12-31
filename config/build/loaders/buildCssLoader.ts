import { type BuildOptions } from '../types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoader = (isDev: boolean) => {
    return {
        test: /\.s[ac]ss$/i,
        use: [
        // options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => !!resPath.includes('.module.'),
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:5]'
                    }
                }
            },
            'sass-loader'
        ]
    };
};
