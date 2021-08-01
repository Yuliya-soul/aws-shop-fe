import React from "react";
import { Product } from "models/Product";
import { Button } from "@material-ui/core";
import API_PATHS from "constants/apiPaths";

type OpenCardInfoProps = {
  product: Product;
};

export default function AddProductToCart({ product }: OpenCardInfoProps) {
  const cartItem = { product };

  return (
    <>
      {
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            console.log(
              `${fetch(
                `${API_PATHS.bff}/products/${cartItem.product.id}`
              )
                .then((response) => response.json())
                .then((item) => alert(item.description))}`
            );
          }}
        >
          Инфо
        </Button>
      }
    </>
  );
}
