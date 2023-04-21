
import React,{useContext} from 'react'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { CartContext } from '../../Store/ContextApi';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    padding: '4px',
  },
}));

 function CartIcon() {
    const cntx = useContext(CartContext);

  return (
    <IconButton aria-label="cart" onClick={()=>cntx.setCartActive(true)}>
      <StyledBadge badgeContent={cntx.state.totalCartQnty} color="secondary">
        <ShoppingBagOutlinedIcon style={{width:'1.5rem', height:'1.5rem'}}/>
      </StyledBadge>
    </IconButton>
  );
}

export default CartIcon;
