import { useEffect, useState } from "react"
import {Table} from 'react-bootstrap'
import axios from 'axios'
import { Link } from "react-router-dom";

export default function Product(){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:9999/products")
            .then(res => setProducts(res.data))
            .catch(error => console.log(error))
    }, [])
    
    return (
        <div>
            <h2>List of Products</h2>
            <Link to={'/products/create'}>Create a new Product</Link>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Id</th><th>Name</th><th>Price</th><th>Category</th><th colSpan={2}></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(({id, name, price, catId}) => (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{price}</td>
                                <td>{catId}</td>
                                <td><Link to={'/products/edit/'+id}>Edit</Link></td>
                                <td><Link to={'/products/delete/'+id}>Delete</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}