module.exports = {
  env: {
    development: {
      presets: [
        "@babel/preset-react"
      ],
      plugins: [
        [
          "@babel/plugin-proposal-class-properties", 
          {
            loose: true
          }
        ],
        "@babel/plugin-transform-runtime",
      ]
    },
    production: {
      presets:[
        "@babel/preset-react"
      ],
      plugins: [
        "@babel/runtime",
      ]
    }
  }
}
