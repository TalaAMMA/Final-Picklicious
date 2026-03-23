export const formatProduct = (item) => {
  return {
    id: item._id,
    name: item.name,
    quantity: item.quantity,
    price: item.price,
    image: item.image,
  };
};
export const formatProducts = (products) => {
  return products.map(formatProduct);
};
export const formatName = (item) => {
  return {
    id: item._id,
    name: item.name,
  };
};

