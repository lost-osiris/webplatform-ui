import webpackDevServer from 'webpack-dev-server'
import webpack from 'webpack'
import fs, { appendFileSync } from 'fs'
import { resolve } from 'path'

import webpackConfig from '../webpack.config'
import configDevServer from '../webpack.config.devServer'

export function cli(args) {
  let env = {
    'NODE_ENV': JSON.stringify('development')
  }

  let DefinePlugin = new webpack.DefinePlugin(env)
  webpackConfig.plugins.push(DefinePlugin)

  let compiler = webpack(webpackConfig)
  let server = new webpackDevServer(compiler, configDevServer)

  server.listen(3000, "localhost", function() {})

}