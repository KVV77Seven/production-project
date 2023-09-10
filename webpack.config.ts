import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import {buildPlugins} from "./config/build/buildPlugins";
import {buildLoaders} from "./config/build/buildLoaders";
import {buildResolves} from "./config/build/buildResolves";
import {buildWebpackConfig} from "./config/build/types/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";
import path from "path";



export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }
    const mode = env.mode || 'development';
    const PORT = env.port || 3000

    const isDev = mode === 'development'

    const confing: webpack.Configuration = buildWebpackConfig({
        mode,
        isDev,
        paths,
        port: PORT
    });

    return confing
};