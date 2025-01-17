module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        include: ['@babel/plugin-transform-classes'],
        useBuiltIns: 'usage' // experimental
      }
    ],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread'
  ],
  env: {
    test: {
      plugins: ['macros']
    }
  }
};
