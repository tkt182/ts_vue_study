const path = require('path');
const BUILD_ROOT = path.join(__dirname, '../dist');
const SRC_ROOT = path.join(__dirname, '../src');


module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: path.resolve(SRC_ROOT, 'main.ts'),
  //entry: "../src/main.ts",
  //entry: `${__dirname}/src/main.ts`,
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    //path: `/app/dist`,
    path: BUILD_ROOT,
    publicPath: '/',
    // 出力ファイル名
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: "ts-loader"
      }
    ]
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    extensions: [".ts", ".js"],
    // Webpackで利用するときの設定
    alias: {
      vue: "vue/dist/vue.js"
    }
  }
};