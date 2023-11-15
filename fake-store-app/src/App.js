import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Container from '@mui/material/Container';
import axios from 'axios';
import CardList from './components/CardList';
import SearchForm from './components/SearchForm';

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState(null);
  const [filtered, setFiltered] = useState(false);
  const BASE_URL = 'https://fakestoreapi.com/products';
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    let newArr = products.filter((product)=>product.title.toLowerCase().includes(searchValue.trim().toLowerCase()))
    if(searchValue!=''){
      setProducts(newArr)
    } 
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(BASE_URL);
        if (response.status === 200) {
          setProducts(response.data);
        } else {
          console.error("Failed to fetch products");
        }
      } catch (error) {
        console.error("An error occurred while fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="md" sx={{marginTop: "60px", marginLeft:"auto", marginRight:"auto"}}>
      <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} handleSubmit={handleSubmit} />
        <CardList products={products}  />
      </Container>
    </React.Fragment>
  );
}

export default App;
