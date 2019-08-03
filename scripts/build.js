import webpackDevServer from 'webpack-dev-server'
import webpack from 'webpack'
import fs, { appendFileSync } from 'fs'
import { resolve } from 'path'

import webpackConfig from './webpack.config'

export function cli(args) {
  let env = {
    'NODE_ENV': JSON.stringify('production')
  }

  let DefinePlugin = new webpack.DefinePlugin(env)
  webpackConfig.plugins.push(DefinePlugin)

  let compiler = webpack(webpackConfig)
  compiler.run()
}