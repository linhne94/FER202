import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import product from "../data/data.json"

const productSlice = createSlice({
    name: "product",
    initialState: { status: 'idle', products: [] },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload)
        },
        updateProduct: (state, action) => {
            const updatedProduct = action.payload;
            const updatedProducts = state.products.map(product => {
                if (product.id === updatedProduct.id) {
                    return {
                        ...product,
                        name: updatedProduct.name,
                        description: updatedProduct.description,
                        price: updatedProduct.price,
                        currentPrice: updatedProduct.currentPrice
                    };
                }
                return product;
            });
            return {
                ...state,
                products: updatedProducts
            };
        },
        deleteProduct: (state, action) => {
            const { id } = action.payload;
            const deleteP = state.products.find(p => p.id === id);
            if (deleteP) {
                const updatedProducts = state.products.filter(p => p.id !== id);
                return {
                    ...state,
                    products: updatedProducts
                };
            }
            return state;
        }
    },
    extraReducers:
        builder => {
            builder
                .addCase(fetchDataProduct.pending, (state, action) => {
                    state.status = 'loading'
                })
                .addCase(fetchDataProduct.fulfilled, (state, action) => {
                    state.products = action.payload
                    state.status = 'idle'
                })
                .addCase(addNewProduct.fulfilled, (state, action) => {
                    state.products.push(action.payload)
                })
                .addCase(updateProduct.fulfilled, (state, action) => {
                    state.products = state.products.map(product =>
                        product.id === action.payload.id
                            ? { ...product, ...action.payload }
                            : product
                    );
                })
                .addCase(deleteProduct.fulfilled, (state, action) => {
                    const id = action.payload.id;
                    return {
                        ...state,
                        products: state.products.filter(product => product.id !== id)
                    };
                })
        }
})



export const fetchDataProduct = createAsyncThunk('products/fetchProducts', async () => {
    const res = await fetch('http://localhost:3001/products')
    const data = await res.json()
    return data;
})

export const addNewProduct = createAsyncThunk('products/addNewProducts', async (newProduct) => {
    const res = await fetch('http://localhost:3001/products', {
        method: 'POST',
        body: JSON.stringify(newProduct)
    })
    const data = await res.json()
    console.log(data)
    return data
})

export const updateProduct = createAsyncThunk('products/updateProducts', async (updateProduct) => {
    // console.log('[testUpdate]', updateProduct.id)
    const res = await fetch(`http://localhost:3001/products/${updateProduct.id}`, {
        method: 'PUT',
        body: JSON.stringify(updateProduct)
    })
    const data = await res.json()
    console.log(data)
    return data
})

export const deleteProduct = createAsyncThunk('products/deleteProducts', async (id) => {
    console.log('[testDelete]', id)
    const res = await fetch(`http://localhost:3001/products/${id}`, {
        method: 'DELETE',
        // body: JSON.stringify(updateProduct)
    })
    const data = await res.json()
    console.log(data)
    return data
})


export default productSlice.reducer