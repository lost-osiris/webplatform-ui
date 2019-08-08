import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'
import alias from 'rollup-plugin-alias'
import { resolve } from 'path'

import pkg from './package.json'
const aliases = alias({
  'utils': resolve(__dirname, 'src/utils/index.js'),
  'reducers': resolve(__dirname, 'src/reducers/index.js'),
  'actions': resolve(__dirname, 'src/actions/index.js'),
  '~': resolve(__dirname, "src/"),
  '!': resolve(__dirname, "assets/"),
  'less': resolve(__dirname, "./assets/less"),
  'img': resolve(__dirname, "./assets/img"),
})

export default [
  // CommonJS
  {
    input: 'src/index.js',
    output: { 
      file: 'lib/webplatform-ui.js', 
      format: 'cjs', 
      indent: false 
    },
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [
      babel({
        configFile: resolve(__dirname, 'babel.config.js'),
        runtimeHelpers: true,
      }),
      aliases
    ]
  },

  // ES
  {
    input: 'src/index.js',
    output: { file: 'es/webplatform-ui.js', format: 'es', indent: false },
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [
      babel({
        configFile: resolve(__dirname, 'babel.config.js'),
        runtimeHelpers: true,
      }),
      aliases
    ]
  },

  // ES for Browsers
  {
    input: 'src/index.js',
    output: { file: 'es/webplatform-ui.mjs', format: 'es', indent: false },
    plugins: [
      nodeResolve(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        }
      }),
      aliases
    ]
  },

  // UMD Development
  {
    input: 'src/index.js',
    output: {
      file: 'dist/webplatform-ui.js',
      format: 'umd',
      name: 'Redux',
      indent: false
    },
    plugins: [
      nodeResolve(),
      babel({
        exclude: 'node_modules/**',
        configFile: resolve(__dirname, 'babel.config.js'),
        runtimeHelpers: true,
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development')
      }),
      aliases
    ]
  },

  // UMD Production
  {
    input: 'src/index.js',
    output: {
      file: 'dist/webplatform-ui.min.js',
      format: 'umd',
      name: 'Redux',
      indent: false
    },
    plugins: [
      nodeResolve(),
      babel({
        exclude: 'node_modules/**',
        configFile: resolve(__dirname, 'babel.config.js'),
        runtimeHelpers: true,
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        }
      }),
      aliases
    ]
  }
]