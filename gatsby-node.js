const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [new DirectoryNamedWebpackPlugin()],
    },
  });
};
