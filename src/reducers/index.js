import {
  Add_products,
  Add_cart,
  Product_view,
  Cart_items,
  update_cart,
  delete_cart,
} from "../actions";

let initialState = {
  products: [],
  cart: [],
  itemToDisplay: "",
  totalCart: 0,
};

// Load cart items from localStorage (if available)
const persistedCart = localStorage.getItem("cartItems");
if (persistedCart) {
  initialState.cart = JSON.parse(persistedCart);
}

export default function products(state = initialState, action) {
  switch (action.type) {
    case Add_products:
      return {
        ...state,
        products: action.products,
      };
      case Add_cart:
        let flag = state.cart.findIndex((item) => item.id === action.cart.id);
        if (flag !== -1) {
          state.cart[flag].qty += 1;
        } else {
          state.cart.push(action.cart);
        }
        // Save updated cart to localStorage
        localStorage.setItem("cartItems", JSON.stringify(state.cart));
        return {
          ...state,
          cart: [...state.cart],
        };
    case Product_view:
      return {
        ...state,
        itemToDisplay: action.view,
      };
    case Cart_items:
      let total = state.cart.reduce((total, item) => {
        return (total += item.qty);
      }, 0);
      // Update the cart number in Redux state and also save it to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
      localStorage.setItem("cartNumber", total);
      return {
        ...state,
        totalCart: total,
      };
    case update_cart:
      let index = state.cart.indexOf(action.updatedItem);
      if (index !== -1) {
        state.cart[index] = action.updatedItem;
        // Save updated cart to localStorage
        localStorage.setItem("cartItems", JSON.stringify(state.cart));
        return {
          ...state,
          cart: [...state.cart],
        };
      }
      return state;
    case delete_cart:
      let position = state.cart.indexOf(action.item);
      if (position !== -1) {
        state.cart.splice(position, 1);
        // Save updated cart to localStorage
        localStorage.setItem("cartItems", JSON.stringify(state.cart));
        return {
          ...state,
        };
      }
      return state;
    default:
      return state;
  }
}
