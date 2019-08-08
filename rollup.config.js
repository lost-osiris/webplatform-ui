import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'
import { terser } from 'rollup-plugin-terser'

import { resolve } from 'path'
import alias from 'rollup-plugin-alias'

import pkg from './package.json'

const aliases = alias({
  // 'utils': resolve(__dirname, 'src/utils/index.js'),
  // 'reducers': resolve(__dirname, 'src/reducers/index.js'),
  // 'actions': resolve(__dirname, 'src/actions/index.js'),
  '~': resolve(__dirname, "src/"),
  '!': resolve(__dirname, "assets/"),
  'less': resolve(__dirname, "./assets/less"),
  'img': resolve(__dirname, "./assets/img"),
  resolve: ['.js', '/index.js'],
})

const externals = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {})
]

console.log(externals)

const babelConfig = babel({
  babelrc: false,
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env', 
      { 
        modules: false 
      }
    ]
  ],
  plugins:[
    [
      "@babel/plugin-proposal-class-properties", 
      {
        loose: true
      }
    ],
  ],
  exclude: 'node_modules/**', 
  runtimeHelpers: true,
})

export default [
  // CommonJS
  {
    input: 'src/index.js',
    output: { 
      file: 'lib/webplatform-ui.js', 
      format: 'cjs', 
      indent: false, 
      globals: {
      //   'redux': 'redux',
      //   'redux': 'redux-thunk',
      //   'lodash': '_',
      //   'axios': 'axios',
      //   'universal-cookie': 'Cookies',
        'qs': 'query-string'
      }
    },
    external: externals,
    plugins: [
      babelConfig,
      nodeResolve(),
      commonjs(),
      globals(),
      builtins(),
      // babelConfig,
      aliases,
    ]
  },

  // ES
  {
    input: 'src/index.js',
    output: { 
      file: 'es/webplatform-ui.js', 
      format: 'es', 
      indent: false 
    },
    external: externals,
    plugins: [
      babelConfig,
      nodeResolve(),
      commonjs(),
      globals(),
      builtins(),
      aliases
    ]
  },
  
  // ES for Browsers
  // {
  //   input: 'src/index.js',
  //   output: { 
  //     file: 'es/webplatform-ui.mjs', 
  //     format: 'es', 
  //     indent: false 
  //   },
  //   plugins: [
  //     nodeResolve(),
  //     replace({
  //       'process.env.NODE_ENV': JSON.stringify('production')
  //     }),
  //     terser({
  //       compress: {
  //         pure_getters: true,
  //         unsafe: true,
  //         unsafe_comps: true,
  //         warnings: false
  //       }
  //     }),
  //     aliases
  //   ]
  // },
  
  // UMD Development
  // {
  //   input: 'src/index.js',
  //   output: {
  //     file: 'dist/webplatform-ui.js',
  //     format: 'umd',
  //     name: 'webplatform-ui',
  //     indent: false,
  //     // globals: {
  //     //   'redux': 'redux',
  //     //   'redux': 'redux-thunk',
  //     //   'lodash': '_',
  //     //   'axios': 'axios',
  //     //   'universal-cookie': 'Cookies',
  //     //   ''
  //     // }
  //   },
  //   external: externals,
  //   plugins: [
  //     babelConfig,
  //     nodeResolve(),
  //     replace({
  //       'process.env.NODE_ENV': JSON.stringify('development')
  //     }),
  //     aliases
  //   ]
  // },
]