import './App.css'
import { useState, useEffect } from 'react'

//URL da API que vamos consumir:
const url = 'http://localhost:3000/products'

function App() {

  const [products, setProducts] = useState([])

  //Consumindo os dados de forma assíncrona:
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url)
      const data = await response.json() //transformando de JSON para string

      setProducts(data)
    }

    fetchData()

  }, [])

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R$ {product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
