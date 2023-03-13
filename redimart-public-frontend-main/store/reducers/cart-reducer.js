import { isEmpty } from "../../lib/helpers";
import { ADD_TO_CART, REMOVE_CART_ITEM, CLEAR_CART, TOGGLE_CART_ITEM_AMOUNT, COUNT_CART_TOTALS } from "../actions/actions";

const reducer = (state, action) => {
  // AddToCart
  if(action.type === ADD_TO_CART) {
    const {productId, skuId, title, price, quantity, image, select, totalItem } = action.payload
    // Attribute id and genId
    const attributeId = select.colors?.attributeId
    let id = attributeId ? (productId + select.colors.attributeId) : productId
    
    // check Is prev add product
    const prevProduct = state.cart.find(i => i.id === id)
    if(prevProduct) {
      const tempCart = state.cart.map((item) => {
        if(item.id === id) {

          // Check quantity in stock
          let tempTotalItem = item.totalItem + totalItem
          if(tempTotalItem > quantity) {
            tempTotalItem = quantity
          }

          // Return cartItem after update totalItem
          return {...item, totalItem: tempTotalItem}
        } else {
          return item
        }
      })

      return {...state, cart: tempCart}
    }

    // New products...
    let newSelect = isEmpty(select.sizes) ? {} : {...select.sizes};
      let newItem = {
        id,
        productId,
        skuId,
        title,
        price,
        quantity,
        image,
        select: newSelect,
        totalItem,
      }

      return {...state, cart: [...state.cart, newItem]}
  }

  // Remove cartItem
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }

  // Remove cart
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  // Toggle amount in cartItem...
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const {id, value} = action.payload

    const tempCart = state.cart.map(item => {
      if(item.id === id) {
        if (value === "inc") {
          let newTotalItem = item.totalItem + 1;
          if (newTotalItem > item.quantity) {
            newTotalItem = item.quantity;
          }
          return { ...item, totalItem: newTotalItem };
        }
        if (value === "dec") {
          let newTotalItem = item.totalItem - 1;
          if (newTotalItem < 1) {
            newTotalItem = 1;
          }
          return { ...item, totalItem: newTotalItem };
        }
      } else {
        return item
      }

      return item;
    })

    return { ...state, cart: tempCart };
  }

  // Cart count total
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { totalItem, price } = cartItem;
        total.total_items += totalItem;
        total.total_amount += price * totalItem;
        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );
    return { ...state, total_items, total_amount };
  }

  return state;
  // eslint-disable-next-line
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
