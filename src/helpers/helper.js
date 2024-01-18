const shortenText = (text) => {
  return text.split(" ").slice(0, 3).join(" ");
};
const searchProducts = (products, search) => {
  if (!search) return products;

  const searchedProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search)
  );
  return searchedProducts;
};

const filterdProducts = (filterProduct, query) => {
  if (!query) return filterProduct;
  const categoryfilter = filterProduct.filter((p) => p.category === query);
  return categoryfilter;
};
const creatQueryObject = (currentQuery, newQuery) => {
  if (newQuery.item == "all") {
    const { item, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.search == "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return {
    ...currentQuery,
    ...newQuery,
  };
};
const getInitialQuery = (searchParams) => {
  const query = {};
  const item = searchParams.get("item");
  const search = searchParams.get("search");
  if (item) query.item = item;
  if (search) query.search = search;
  return query;
};
const sumProduct = (product) => {
  const itemCounter = product.reduce((acc, curr) => acc + curr.quantity, 0);
  const total = product
    .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    .toFixed(2);
  return { itemCounter, total };
};

export {
  shortenText,
  searchProducts,
  filterdProducts,
  creatQueryObject,
  getInitialQuery,
  sumProduct,
};
