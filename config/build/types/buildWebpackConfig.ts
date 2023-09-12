import {BuildOptions} from "./config";
import webpack from "webpack";
import {buildResolves} from "../buildResolves";
import {buildLoaders} from "../buildLoaders";
import {buildPlugins} from "../buildPlugins";
import {buildDevServer} from "../buildDevServer";


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    return {
        mode: options.mode,
        entry: options.paths.entry,
        resolve: buildResolves(options),
        output: {
            filename: "[name].[contenthash].js",
            path: options.paths.build,
            clean: true
        },
        module: {
            rules: buildLoaders(options)
        },
        plugins: buildPlugins(options),
        devtool: options.isDev ? 'inline-source-map' : undefined,
        devServer: options.isDev ? buildDevServer(options) : undefined,
    }
}