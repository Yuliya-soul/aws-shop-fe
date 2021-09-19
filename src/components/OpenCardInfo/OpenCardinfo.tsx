import React from 'react';
import {Product} from "models/Product";
import { Button } from '@material-ui/core';

type OpenCardInfoProps = {
  product: Product
};

export default function AddProductToCart({product}: OpenCardInfoProps) {
  const cartItem={product}

/*   const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartItem = cartItems.find(i => i.product.id === product.id); */

  return (
    <>
    {
    <Button variant="contained" color="primary" onClick={() => { console.log(`${fetch(`https://7537ljc0qf.execute-api.us-east-1.amazonaws.com/dev/products/${cartItem.product.id}`)
    .then(response => response.json())
    .then(item => alert(item[0].description))}`)}}>Инфо</Button>

    }

    </>
  );
}