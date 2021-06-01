import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Redux/Actions/ProductActions";
import Product from "./Product";

const Products = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  /* useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      dispatch(setProducts(response.data));
    });
  }, []); */

  /* const fetchProducts = async () => {
    const productList = new Promise((resolve, reject) => {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        resolve(response.data);
      });
    });
    const pList = await productList;
    return pList;
  };

  useEffect(() => {
    fetchProducts().then((response) => {
      dispatch(setProducts(response));
    });
  }, []); */

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <div className="ui grid container">
      <Product></Product>
    </div>
  );
};

export default Products;
