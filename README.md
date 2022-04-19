# React Project: The Shoppporium

Create an e-commerce website in React JS and using Firestore as a database.

## Goals

Implementing React and Remote Database topics that I have learned such as
routing, hooks, context, and Firestore.

## Requirements

### MVP

MVP:

- 2 pages:
  - Home Page
  - Grid of products
  - Carousel of featured products
  - Product Page (with id parameter) Similar to a product page on another site,
    allows you to add to cart and select product variants

All products should be stored in Firestore, you should store the following
information:

- quantity
- variants (could be colors, sizes, etc)
- price per unit
- name
- image url
- favourited or not (boolean)

All data should be stored in Firestore and fetched by the frontend, there should
be NO static product data in the react application

Bonus:

- Using Firestore and react, create a cart system.
- Create a cart page in your react app
- Add logic to prevent users from adding items to cart that are no longer in
  stock.
- You will have to check the current cart and the product quantity
- Cart page should have the following:

  - List of products in cart
  - ability to change quantity of products in cart
  - ability to remove items from cart
  - Make sure you site is scope to one category of products

  ### Tech Stack

- [x] HTML
- [x] SCSS (Some styling from Material UI)
- [x] Javascript
- [x] React
- [x] Firestore
- [x] Git and Github

### Issue to be addressed

- [ ] Individual product page
- [ ] Create cart page with list of products
- [ ] Add quantity when adding products to cart
