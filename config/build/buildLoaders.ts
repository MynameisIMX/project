import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildCssLoader} from "./loaders/buildCssLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            "i18next-extract",
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            }
          ]
        ]
      }
    }
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const cssLoader = buildCssLoader(options);

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typeScriptLoader,
    cssLoader,
  ]
}
