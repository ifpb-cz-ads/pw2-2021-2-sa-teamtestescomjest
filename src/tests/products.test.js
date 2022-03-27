const db = require("../database/config");
const Product = require("../models/Product");

/* Funcoes */

// Listar produtos

const listProducts = async () => {
  try {
    await db.sync();

    const products = await Product.findAll();

    return products;
  } catch (err) {
    return "Internal error";
  }
};

// Mostrar produto

const showProduct = async (productId) => {
  try {
    await db.sync();

    const product = await Product.findOne({
      where: {
        id: productId,
      },
    });

    return product.toJSON();
  } catch (err) {
    return "Internal error";
  }
};

// Criar produto

const createProduct = async (productParams) => {
  try {
    await db.sync();

    const product = await Product.create({ ...productParams });

    return product.toJSON();
  } catch (err) {
    return "Internal error";
  }
};

// Atualizar produto

const updateProduct = async (productParams, productId) => {
  try {
    await db.sync();

    await Product.update(
      { ...productParams },
      {
        where: {
          id: productId,
        },
      }
    );

    return "Product updated";
  } catch (err) {
    return "Internal error";
  }
};

// Excluir produto

const deleteProduct = async (productId) => {
  try {
    await db.sync();

    await Product.destroy({ where: { id: productId } });

    return "Product deleted";
  } catch (err) {
    return "Internal error";
  }
};

/* Testes */

// Listar produtos

test("Listar produtos", async () => {
  const productsFound = await listProducts();

  expect(productsFound).toEqual([]);
});

// Criar produto

test("Criar produto", async () => {
  const productParams = {
    name: "Arroz",
    price: 4.0,
  };

  const productCreated = await createProduct(productParams);

  expect(productCreated).toEqual({ id: 1, ...productParams });
});

// Mostrar produto

test("Mostrar produto", async () => {
  const productId = 1;
  const productFound = await showProduct(productId);
  const productExpected = {
    id: 1,
    name: "Arroz",
    price: 4.0,
  };

  expect(productFound).toEqual(productExpected);
});

// Mostrar produto inexistente

test("Mostrar produto inexistente", async () => {
  const productId = 2;
  const productFound = await showProduct(productId);
  const productExpected = {
    id: 2,
    name: "Feijao",
    price: 9.0,
  };

  expect(productFound).toEqual(productExpected);
});

// Atualizar produto

test("Atualizar produto", async () => {
  const productId = 1;

  const productParams = {
    name: "Arroz",
    price: 4.5,
  };

  const productUpdated = await updateProduct(productParams, productId);

  expect(productUpdated).toEqual("Product updated");
});

// Excluir produto

test("Excluir produto", async () => {
  const productId = 1;
  const productDeleted = await deleteProduct(productId);

  expect(productDeleted).toEqual("Product deleted");

  await db.drop();
});
