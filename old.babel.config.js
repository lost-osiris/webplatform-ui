module.exports = {
  env: {
    development: {
      presets: [
        "@babel/preset-react",
        [
          "@babel/preset-env",
          {
            "modules": false,
            // "modules": "commonjs"
            // targets: {
            //   esmodules: true
            // }
            exclude: ['transform-regenerator']
          }
        ],
      ],
      plugins: [
        "@babel/plugin-transform-runtime",
        [
          "@babel/plugin-proposal-class-properties", 
          {
            loose: true
          }
        ]
      //   [
      //     "@babel/plugin-transform-runtime",
      //     {
      //       // absoluteRunetime: true,
      //       // "modules": false
      //     }
      //   ],
      //   "@babel/plugin-syntax-dynamic-import"
      ]
    },
    production: {
      presets: [
        "@babel/preset-react",
        [
          "@babel/preset-env",
          {
            "modules": false
          }
        ],
      ],
      plugins: [
        "@babel/plugin-transform-runtime",
        [
          "@babel/plugin-proposal-class-properties", 
          {
            loose: true
          }
        ]
      ]
    }
  }
}
