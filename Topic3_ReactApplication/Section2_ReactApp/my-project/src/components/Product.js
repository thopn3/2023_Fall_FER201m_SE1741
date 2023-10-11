import { Col, Container, Row, Table } from "react-bootstrap";
import { Form, Link } from "react-router-dom";

export default function Product() {
    return (
        <Container>
            <Row>
                <Col>
                    <h3>Product Management</h3>
                </Col>
            </Row>
            <Row>
                <Col style={{textAlign:'center', marginBottom:'20px'}}>
                    <input type='text' placeholder="Enter product name to search ..." 
                        style={{width:'70%', lineHeight:'30px'}}/>
                </Col>
            </Row>
            <Row>
                <Col style={{textAlign:'right', marginBottom:'10px'}}>
                    <Link to={'/product/create'}>Create a new Product</Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Category</th>
                                <th>Image</th>
                                <th>CreateDate</th>
                                <th>Status</th>
                                <th colSpan={2}>Function</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Product 1</td>
                                <td>10</td>
                                <td>100</td>
                                <td>Category 1</td>
                                <td>Image</td>
                                <td>09/10/2023</td>
                                <td>yes</td>
                                <td>
                                    <Link to={'/product/edit/1'}>Edit</Link>
                                </td>
                                <td>
                                    <Link to={'/product/delete/1'}>Delete</Link>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}