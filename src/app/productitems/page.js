
const fetchData = async () => {
        let data = await fetch("https://dummyjson.com/products");
        data =await data.json();
        return data.products; 
};

const ProductItems = async() => {
    const data=await fetchData();
    console.log(data);
  return (
    <div>
        <h1>Api fetch on server component</h1>
        <h3>Product Items List</h3>
        <ul>
                {data.map((product, index) => (
                    <li key={index}>Product: {product.title}, Price: {product.price}</li>
                ))}
            </ul>
    </div>
  )
}

export default ProductItems;