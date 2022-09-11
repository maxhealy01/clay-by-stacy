# Clay By Stacy

## Deployment

To deploy the website on your computer, clone the repository and type "npm start" into your CLI.

Alternatively, you can visit the website at **url**

## The Stack

This website was created using Gatsby.js, Stripe.js, and the use-shopping-cart library.

## Why Gatsby

Gatsby.js was the perfect framework for this website because it simplified development while providing all of the necessary functionality.

Gatsby provides easy CMS integration. All that's needed to access the data on Stripe is configuration in the gatsby-config.js file, and a GraphQL query in the relevant components.

In this way, once it's up and running, the data needed for the site to work operates separately from the website's code. The client could add or remove data, and the website will change accordingly.

Gatsby has the added benefit of removing the need to develop a back-end for the website. Because only the data from Stripe is necessary, the CMS integration is sufficient.

## Use-shopping-cart

The use-shopping-cart library creates a global cart state that persists across components and pages.

It provides handy functions for adding and removing items from the cart, and also simplifies the checkout process by directing users to Stripe to make secure payments.

## Formspree

The contact page is handled using formspree, an npm package that allows users to write a message to the client, which is then sent directly to their email address.
