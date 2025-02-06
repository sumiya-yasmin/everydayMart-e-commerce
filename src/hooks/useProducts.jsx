import { useContext } from "react";
import { ProductContext } from "../contexts/productContext";


export function useProducts() {
  return useContext(ProductContext)
}

