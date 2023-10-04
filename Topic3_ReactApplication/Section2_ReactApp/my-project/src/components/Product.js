// Định nghĩa 1 function Component

function Product({data}){
    return (
        <div className="item">
            <h2 className="item-title">List of Products</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th><th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(({id, name}) => (
                            <tr>
                                <td>{id}</td>
                                <td>{name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Product