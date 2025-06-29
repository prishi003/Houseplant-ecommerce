import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [
    // Indoor Plants
    {
      id: 1,
      name: 'Monstera Deliciosa',
      price: 29.99,
      category: 'Indoor Plants',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
      description: 'Beautiful Swiss cheese plant perfect for bright, indirect light.'
    },
    {
      id: 2,
      name: 'Snake Plant',
      price: 19.99,
      category: 'Indoor Plants',
      image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=300&h=300&fit=crop',
      description: 'Low-maintenance plant that thrives in low light conditions.'
    },
    // Succulents
    {
      id: 3,
      name: 'Echeveria',
      price: 12.99,
      category: 'Succulents',
      image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=300&h=300&fit=crop',
      description: 'Gorgeous rosette-shaped succulent with blue-green leaves.'
    },
    {
      id: 4,
      name: 'Jade Plant',
      price: 15.99,
      category: 'Succulents',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop',
      description: 'Classic succulent known for bringing good luck and prosperity.'
    },
    // Flowering Plants
    {
      id: 5,
      name: 'Peace Lily',
      price: 24.99,
      category: 'Flowering Plants',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop',
      description: 'Elegant flowering plant that purifies the air.'
    },
    {
      id: 6,
      name: 'African Violet',
      price: 18.99,
      category: 'Flowering Plants',
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300&h=300&fit=crop',
      description: 'Compact flowering plant with beautiful purple blooms.'
    }
  ],
  categories: ['Indoor Plants', 'Succulents', 'Flowering Plants']
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
})

export default productsSlice.reducer 