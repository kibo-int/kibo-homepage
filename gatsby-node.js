const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const projectTemplate = path.resolve('src/templates/project.js');
  return graphql(`{
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }`)
    .then((res) => {
      if (res.errors) {
        return Promise.reject(res.errors);
      }

      res.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: projectTemplate,
        });
      });
    });
};
