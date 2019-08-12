import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'
import json from 'rollup-plugin-json'
import sass from 'rollup-plugin-sass'
import less from 'rollup-plugin-less'
import postcss from 'rollup-plugin-postcss'
import filesize from 'rollup-plugin-filesize'
import autoprefixer from 'autoprefixer'
import { terser } from 'rollup-plugin-terser'

import { resolve } from 'path'

import pkg from './package.json'

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
  // ES
  {
    input: 'src/index.js',
    output: { 
      // file: 'es/webplatform-ui.js',
      dir: 'es', 
      format: 'es', 
      indent: false, 
      sourcemap: true,
    },
    external: externals,
    plugins: [
      babelConfig,
      nodeResolve(),
      commonjs(),
      globals(),
      builtins(),
      sass({
        output: 'es/webplatform-ui.css',
        // includePaths: [ 'node_modules/' ],
        // importer(path) {
        //   return { file: path[0] !== '~' ? path : path.slice(1) };
        // }
        // include: '**/*.scss',
        // exclude: [],
        // options: {
        //   includePaths: ['node_modules']
        // }
      }),
      // less({
      //   // output: 'es/build.css'
      // }),
      filesize(),
    ]
  },
  
  // ES for Browsers
  // {
  //   input: 'src/index.js',
  //   output: { 
  //     file: 'es/webplatform-ui.min.js', 
  //     format: 'es', 
  //     indent: false, 
  //     sourcemap: true,
  //   },
  //   external: externals,
  //   plugins: [
  //     babelConfig,
  //     json(),
  //     nodeResolve(),
  //     commonjs(),
  //     globals(),
  //     builtins(),
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
  //     filesize(),
  //   ]
  // },

  // Styles
  // {
  //   input: 'src/styles.js',
  //   output: { 
  //     file: 'es/webplatform-ui-styles.js', 
  //     format: 'es', 
  //     // indent: false 
  //   },
  //   external: externals,
  //   plugins: [
  //     nodeResolve(),
  //   //   postcss({ 
  //   //     extract: true, 
  //   //     // plugins: [autoprefixer],
  //   //     modules: true,
  //   //  }),
  //     commonjs(),
  //     sass({
  //       output: 'es/webplatform-ui.css',
  //       // includePaths: [ 'node_modules/' ],
  //       // importer(path) {
  //       //   return { file: path[0] !== '~' ? path : path.slice(1) };
  //       // }
  //       // include: '**/*.scss',
  //       // exclude: [],
  //       // options: {
  //       //   includePaths: ['node_modules']
  //       // }
  //     }),
  //     less({
  //       // output: 'es/build.css'
  //     }),
  //     aliases,
  //     filesize(),
  //   ]
  // },
  
  // Styles - Production
  // {
  //   input: 'src/styles.js',
  //   external: externals,
  //   plugins: [
  //     nodeResolve(),
  //     commonjs(),
  //     sass({
  //       output: 'es/build.css'
  //     }),
  //     less({
  //       output: 'es/build.css'
  //     }),
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
  //     aliases,
  //   ]
  // }
]