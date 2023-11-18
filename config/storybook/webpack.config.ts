import webpack from "webpack";
import {BuildPaths} from "../build/types/config";
import path from "path";
import {buildCssLoader} from "../build/loaders/buildCssLoader";

export default ({config} : {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        src: path.resolve(__dirname, '..', '..', 'src'),
        html: '',
        build: '',
        entry: ''
    }
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push(buildCssLoader(true));

    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
        test: /\.svg$/,
        enforce: 'pre',
        loader: require.resolve('@svgr/webpack'),
    });

    return config;
}