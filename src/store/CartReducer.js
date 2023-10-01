const initialState = {
    items: [],
    totalAmount: 0,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        const newItem = action.payload; 
        const existingItemIndex = state.items.findIndex((item) => item.id === newItem.id); 
   
        if (existingItemIndex !== -1) { 
          const updatedItems = [...state.items]; 
          updatedItems[existingItemIndex].amount += newItem.amount; 
          return { 
            ...state, 
            items: updatedItems, 
            totalAmount: state.totalAmount + newItem.price * newItem.amount, 
          }; 
        } else { 
          return { 
            ...state, 
            items: [...state.items, newItem], 
            totalAmount: state.totalAmount + newItem.price * newItem.amount, 
          }; 
        } 
      case 'REMOVE_ITEM':
        const itemId = action.payload; 
        const existingCartItem = state.items.find((item) => item.id === itemId); 
   
        if (!existingCartItem) { 
          return state; 
        } 
   
        if (existingCartItem.amount === 1) { 
          return { 
            ...state, 
            items: state.items.filter((item) => item.id !== itemId), 
            totalAmount: state.totalAmount - existingCartItem.price, 
          }; 
        } else { 
          const updatedItems = state.items.map((item) => 
            item.id === itemId ? { ...item, amount: item.amount - 1 } : item 
          ); 
          return { 
            ...state, 
            items: updatedItems, 
            totalAmount: state.totalAmount - existingCartItem.price, 
          }; 
        } 
   
      default: 
        return state; 
  };
  }
  
  export default cartReducer;