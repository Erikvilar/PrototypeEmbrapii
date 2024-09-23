const Product = require("../models/product.model.js");

const getProducts = async (req, res) => {

  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

const getProductById = async (req, res) => {

  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

const postProduct = async (req, res) => {

  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch(error) {
    res.status(500).json({ message: error.message });
  }

};

const updateProduct = async (req, res) => {

  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }
    const updateProduct = await Product.findById(id);
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

const deleteProduct = async (req, res) => {

  try {
    const { id } = req.params;
    //logica usada no delete esta no findByIdAndDelete
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }
    const updateProduct = await Product.findById(id);
    res.status(200).json("Product deleted successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

module.exports = {
  getProducts,
  getProductById,
  postProduct,
  updateProduct,
  deleteProduct,
};
