import './App.css'
import ProductCard from './components/productCard'

function App() {
  

  return (
    <>
      <ProductCard name="Laptop" price = "100,000.00" image = "https://picsum.photos/536/354" />
      <ProductCard name="Phone" price = "90,000.00" image = "https://picsum.photos/536/354" />
      <ProductCard name="Mouse" price = "80,000.00" image = "https://picsum.photos/536/354" />
    </>
  )
}

export default App
