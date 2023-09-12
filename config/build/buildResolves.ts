import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolves(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true, //предпочитать абсолютные пути
        modules: [options.paths.src, 'node_modules'], //путь к папкам с абсолютными путями
        alias: {}, // префикс для путей. Допустим "@": paths.src (путь к папке). Если оставить пустым, то можно будет обращаться без префикса
        mainFiles: ['index'],
    }
}