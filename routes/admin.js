const express = require("express");
const router = express.Router();
const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {pageTitle: 'Add Product', path: '/admin/add-product'});
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

module.exports = {
  routes: router,
  products,
};
