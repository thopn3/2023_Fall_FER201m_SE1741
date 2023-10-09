import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import {Home, Product, Category} from './components/Index'

// function Component
function App() {
  return (
    <Container>
      <BrowserRouter>
        <Row>
          <Col xs={12}>
            <h1 style={{ textAlign: 'center' }}>Dashboard</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={2}>
            <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/category'}>Category</Link></li>
              <li><Link to={'/product'}>Product</Link></li>
            </ul>
          </Col>
          <Col xs={12} md={10}>
            <Routes>
              <Route path='/' element={<Home />} />  {/** http://localhost:3000/ */}
              <Route path='/product' element={<Product />} /> {/** http://localhost:3000/prduct */}
              <Route path='/category' element={<Category />} /> {/** http://localhost:3000/category */}
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>
    </Container>
  );
}

export default App;
