import Product from "./components/Product"

// Fake: Get all data from API
const productList = [
  {'id': 'P001', 'name': 'Product 1'},
  {'id': 'P002', 'name': 'Product 2'},
  {'id': 'P003', 'name': 'Product 3'},
]

// function Component
function App() {
  return (
    <div>
      <h1>Welcome to React application</h1>
      {/* Gọi component Product */}
      {/* <Product id='1' name='IPhone 15 ProMax - Titan'/> */}
      <Product data={productList}/>
    </div>
  );
}

export default App;
