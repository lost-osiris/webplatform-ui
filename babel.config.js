module.exports = {
  env: {
    development: {
      presets: [
        "@babel/preset-react"
      ],
      plugins: [
        [
          "@babel/plugin-transform-runtime",
          {
            // absoluteRunetime: true,
            // "modules": false
          }
        ],
        [
          "@babel/plugin-proposal-class-properties", 
          {
            loose: true
          }
        ],
        "@babel/plugin-syntax-dynamic-import"
      ]
    },
    production: {
      plugins: [
        [
          "transform-runtime",
          {
            // absoluteRunetime: true,
            "modules": 'umd' 
          }
        ],
        
      ]
    }
  }
}
