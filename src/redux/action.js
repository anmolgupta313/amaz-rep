export const addToBasket = (title,price,image) => {
  return {
    type: "ADD_TO_BASKET",
    payload: {
      item: {
        title: title,
        price: price,
        image: image,
      },
    },
  };
};
