export const formatCart = (cart) => {
    return {
      id: cart._id,
      products: cart.products,
      userId: cart.userId,
    };
  };
  export const formatCarts=(carts)=>{
    return carts.map(formatCart);
}