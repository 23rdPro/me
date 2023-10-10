/** @type {import('next').NextConfig} */
// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// const CopyWebpackPlugin = require('copy-webpack-plugin');
const nextConfig = {
  // async headers() {
  //   return [
  //     {
  //       source: '/8sdyvCp/:path*',
  //       headers: [
  //         {
  //           key: "Access-Control-Allow-Headers",
  //           value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  //         },
  //         { key: "Access-Control-Allow-Credentials", value: "true" },
  //         { key: "Access-Control-Allow-Origin", value: "*" },
  //         { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" }
  //       ]
  //     }
  //   ]
  // },
  reactStrictMode: true,
  images: {},
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    // config.resolve.alias.components = path.resolve(__dirname, '/')
    // config.resolve.extensionAlias = {
    //   ".pdf": ["pdf"]
    // };
    config.module.rules.push({
      test: /\.(pdf)$/i,
      // use: "raw-loader",
      loader: 'file-loader',
      options: {
        name: './public/document.pdf'
      }
      // loader: 'file-loader',
      // options: {
      //   name: 'public/document.pdf'
      // }
    });
    // config.output = {
    //   path: path.resolve(__dirname, '../dist')
    // }
    // config.module.rules.push({
    // })
    // config.plugins = [
    //   new HtmlWebpackPlugin({
    //     template: ''
    //   })
    // ]
    // config.optimization = {
    //   splitChunks: {
    //     cacheGroups: {
    //       vendor: {
    //         test: /node_modules/,
    //         chunks: 'initial',
    //         name: 'vendor',
    //         priority: 10,
    //         enforce: true  
    //       }
    //     }
    //   }
    // }
    return config;
  }
}

module.exports = nextConfig
