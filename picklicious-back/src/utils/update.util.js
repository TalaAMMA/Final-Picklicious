export const formatUpdatedProduct = (item) => {
    return {
      id: item._id,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      image:item.image,
    };
  };
  export const formatUpdatedProducts = (products) => {
    return products.map(formatUpdatedProduct);
  };