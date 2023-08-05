import singleSpaDefaults from "webpack-config-single-spa-react";
import { merge } from "webpack-merge";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "footer",
    projectName: "footer-vuexy",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    module: {
      rules: [
        // Add SCSS rule
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [
      // Add MiniCssExtractPlugin
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
    ],
  });
};