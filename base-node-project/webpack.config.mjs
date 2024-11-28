import path from 'path';

export default {
  experiments: {
    outputModule: true
  },
  mode: 'production',
  entry: './dist/index.js',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'index.js',
    library: {
      type: 'module'
    }
  },
  resolve: {
    alias: {
      './messages': './messages.js',
    },
    extensions: ['.ts', '.js'], // Resolve both TypeScript and JavaScript files without extensions
    fullySpecified: false
  },
};
