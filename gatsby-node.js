const path = require("path")
const slugify = require("slugify")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "StripePrice") {
    const slug = slugify(node.product.name, { lower: true })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve("./src/templates/product.js")
  const res = await graphql(`
    query {
      allStripePrice {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  res.data.allStripePrice.edges.forEach(edge => {
    const slug = edge.node.fields.slug
    createPage({
      component: productTemplate,
      path: `/item/${slug}`,
      context: {
        slug: slug,
      },
    })
  })
}
