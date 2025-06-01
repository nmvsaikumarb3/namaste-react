const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        item:[]
    },
    reducers:{
        addItem:(state,action)=>{
            // mutating the  state directly
            state.item.push(action.payload);
        },
        removeItem:(state)=>{
            state.item.pop();
        },
        clearCart: (state) =>{
            state.item.length = 0;
        }
    }
})

export const { addItem,removeItem,clearCart} = cartSlice.action;

export default cartSlice.reducers;