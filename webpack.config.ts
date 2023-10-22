import type webpack from 'webpack'
import { buildWebpackConfig } from './config/build/types/buildWebpackConfig'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'
import path from 'path'

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }
    const mode = env.mode || 'development'
    const PORT = env.port || 3000

    const isDev = mode === 'development'

    const confing: webpack.Configuration = buildWebpackConfig({
        mode,
        isDev,
        paths,
        port: PORT
    })

    return confing
}
