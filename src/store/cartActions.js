export const addItemToCart = (item) => {
    return {
      type: 'ADD_ITEM',
      payload: item,
    };
  };
  
export const removeItemFromCart = (itemId) => {
    return {
      type: 'REMOVE_ITEM',
      payload: itemId,
    };
  };

export const toggleCartButtonHighlight = (isHighlighted) => {
    return {
      type: 'TOGGLE_CART_BUTTON_HIGHLIGHT',
      payload: isHighlighted,
    };
  };