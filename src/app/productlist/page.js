"use client";
import React, { useEffect, useState } from 'react';

const Product = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let data = await fetch("https://dummyjson.com/products");
                data =await data.json();
                setProductList(data.products);
                console.log(data.products);     
            } catch (error) {
                console.error("Error fetching product data:",error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Api fetch on Client Component</h1>
            <h3>Product  List</h3>
            <ul>
                {productList.map((product, index) => (
                    <li key={index}>Product: {product.title}, Price: {product.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default Product;
