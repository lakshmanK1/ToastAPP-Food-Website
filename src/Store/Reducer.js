export const reducer = (state, action) => {
    if (action.type === 'ADD') {
        return {...state, currCart:[...state.currCart, {...action.payload, qnty:1}]}  
    }

    if (action.type === 'REMOVE') {
        // return {...state, currCart:state.currCart.filter((id) => id !== action.payload.id)}; 
        return{
            ...state,
            currCart:state.currCart.filter((p)=> p.id !== action.payload.id)
        } 
    }

    if (action.type === 'INCREMENT') {
        let updatedCart = state.currCart.map((data)=>{
            if (data.id === action.payload) {
                return {...data, qnty:data.qnty + 1};
            }
            return data;
        })
        return {...state, currCart:updatedCart} 
    }

    if (action.type === 'DECREMENT') {
        let updatedCart = state.currCart.map((data)=>{
            if (data.id === action.payload) {
                return {...data, qnty:data.qnty - 1};
            }
            return data;
        }).filter((ele) => ele.qnty != 0 );
        return {...state, currCart:updatedCart} 
    }

    if (action.type === 'GETTOTAL') {
        let {totalCartQnty, totalCartPrice} = state.currCart.reduce((accum, curVal)=>{
            let {price, qnty} = curVal;

            let updatedTotalAmount = price * qnty;
            accum.totalCartPrice += updatedTotalAmount;

            accum.totalCartQnty += qnty;
            return accum;
        },{totalCartQnty:0, totalCartPrice:0})
        return {...state, totalCartQnty, totalCartPrice};
    }

    if (action.type === 'ORDER') {
        return {...state, prevCart:state.currCart, currCart:[], totalCartQnty:0, totalCartPrice:0} 
    }

    return state;
}