const path = require('path');

const SRC_DIR = path.join(__dirname, 'client/src');
const DIST_DIR = path.join(__dirname, 'client/dist');

const config = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react', '@babel/env'],
        },
      },
      {
        test: /\.jsx\.html$/,
        exclude: ["/node_modules/", "/client/jestTests/"],
        use: [
          'babel!react-pure-html-component',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader',
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    modules: ['node_modules']
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    console.log(`Dev mode customizations`)
  }

  if (argv.mode === 'production') {
    console.log(`Prod mode customizations`)
  }
  return config;
};
