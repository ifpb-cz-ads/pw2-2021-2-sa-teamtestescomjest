const Product = require("../models/Product");

module.exports = {
  async list(req, res) {
    try {
      const products = await Product.findAll();

      return res.status(200).json({ products });
    } catch (err) {
      res.status(500).json({ message: "Internal error" });
    }
  },
  async show(req, res) {
    try {
      const { id } = req.params;

      const product = await Product.findOne({
        where: {
          id,
        },
      });

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      return res.status(200).json({ product });
    } catch (err) {
      res.status(500).json({ message: "Internal error" });
    }
  },
  async create(req, res) {
    try {
      const product = await Product.create({ ...req.body });

      return res.status(200).json({ product });
    } catch (err) {
      res.status(500).json({ message: "Internal error" });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;

      const product = await Product.findOne({
        where: {
          id,
        },
      });

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      await Product.update(
        { ...req.body },
        {
          where: {
            id,
          },
        }
      );

      return res.status(200).json({ message: "Product updated" });
    } catch (err) {
      res.status(500).json({ message: "Internal error" });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;

      const product = await Product.findOne({
        where: {
          id,
        },
      });

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      await Product.destroy({
        where: {
          id,
        },
      });

      return res.status(200).json({ message: "Product deleted" });
    } catch (err) {
      res.status(500).json({ message: "Internal error" });
    }
  },
};
