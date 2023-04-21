import React,{useState, useReducer, useEffect} from "react";
import { tabsData, SpecialTabData, MainTabData, DessertsTabData, BeveragesTabData } from "./RawData";
import Special from "../Components/Tabs/Special";
import Main from "../Components/Tabs/Main";
import Desserts from "../Components/Tabs/Desserts";
import Beverages from "../Components/Tabs/Beverages";
import { reducer } from "./Reducer";

const initialState = {
  currCart: [],
  prevCart: [],
  totalCartQnty: 0,
  totalCartPrice: 0
}

export const CartContext = React.createContext();

  const CartProvider = (props) => {
    const [tabActive, setTabActive] = useState('Special');
    const [cartActive, setCartActive] = useState(false);

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
      dispatch({type:'GETTOTAL'});
    },[state.currCart]);

    const addItemToCart = (item) => {
      dispatch({type:'ADD', payload:item});
    }

    const removeItemFromCart = (id) => {
      dispatch({type:'REMOVE', payload:id});
    }

    const increment = (id) => {
      dispatch({type:'INCREMENT', payload:id});
    }

    const decrement = (id) => {
      dispatch({type:'DECREMENT', payload:id});
    }

    const placeOrder = () => {
      dispatch({type:'ORDER'});
    }

    
    const changeSetTabActive = (value) => {
        setTabActive(value);
    }

    const openActive = (tab) => {
        switch(tab){
          case 'Special':
            return <Special/>;
          
          case 'Main':
            return <Main/>;
          
          case 'Desserts':
            return <Desserts/>;

          case 'Beverages':
            return <Beverages/>;
    
          default :
          return <Special/>;
        }
      }
  
    const cartContext = {
        tabsData:tabsData,
        tabContent:openActive(tabActive),
        changeSetTabActive:changeSetTabActive,
        tabActive:tabActive,
        SpecialTabData:SpecialTabData,
        MainTabData:MainTabData,
        DessertsTabData:DessertsTabData,
        BeveragesTabData:BeveragesTabData,
        cartActive:cartActive,
        setCartActive:setCartActive,
        addItemToCart:addItemToCart,
        removeItemFromCart:removeItemFromCart,
        state:state,
        incrementCartItemQnty:increment,
        decrementCartItemQnty:decrement,
        placeOrder:placeOrder

    };
  
    return (
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    );
  };
  
  export default CartProvider;
