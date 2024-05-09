import axios from "axios"
import { useEffect, useState } from "react"
import Proadct from "./components/Proadct";


function App() {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);
  const faceData = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get('https://dummyjson.com/products');
      setProducts(data);
    } catch (error) {

    }finally {
      setLoading(false)
    }
  };
  console.log(products);
  useEffect(() => {
    faceData();
  }, []);

  return (
    <>
      { loading
       ? 'loding.....' 
      : products && 
      products.products.map((products) =>  <Proadct products={products}/>   )}


    </>
  )
}

export default App
