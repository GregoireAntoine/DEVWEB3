import React from "react";


export function getProductsFromApi() {
    const url = "http://localhost:3000/products/all";
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error));
}
