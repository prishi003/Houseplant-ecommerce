import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [], // { id, name, price, image, quantity }
  totalItems: 0,
  totalCost: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const existingItem = state.items.find(item => item.id === product.id)
      
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1
        })
      }
      
      state.totalItems += 1
      state.totalCost += product.price
    },
    
    removeFromCart: (state, action) => {
      const id = action.payload
      const itemToRemove = state.items.find(item => item.id === id)
      
      if (itemToRemove) {
        state.totalItems -= itemToRemove.quantity
        state.totalCost -= itemToRemove.price * itemToRemove.quantity
        state.items = state.items.filter(item => item.id !== id)
      }
    },
    
    incrementQuantity: (state, action) => {
      const id = action.payload
      const item = state.items.find(item => item.id === id)
      
      if (item) {
        item.quantity += 1
        state.totalItems += 1
        state.totalCost += item.price
      }
    },
    
    decrementQuantity: (state, action) => {
      const id = action.payload
      const item = state.items.find(item => item.id === id)
      
      if (item && item.quantity > 1) {
        item.quantity -= 1
        state.totalItems -= 1
        state.totalCost -= item.price
      } else if (item && item.quantity === 1) {
        // Remove item if quantity becomes 0
        state.totalItems -= 1
        state.totalCost -= item.price
        state.items = state.items.filter(cartItem => cartItem.id !== id)
      }
    },
    
    clearCart: (state) => {
      state.items = []
      state.totalItems = 0
      state.totalCost = 0
    }
  }
})

export const { 
  addToCart, 
  removeFromCart, 
  incrementQuantity, 
  decrementQuantity, 
  clearCart 
} = cartSlice.actions

export default cartSlice.reducer 