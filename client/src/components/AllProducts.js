import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';


const AllProducts = () => {
    const [products, setProducts] = useState([])
    const [deleteClicked, setDeleteClicked] = useState([false])

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log("***********")
                console.log(res)
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    }, [deleteClicked] )

    const deleteProduct = (e, productId) => {
        console.log("Trying to delete this product", productId)
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(response => {
                console.log(response)
                setDeleteClicked(!deleteClicked)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            {
                products.map((product,idx) => {
                    return <div key={idx} className="card">
                        <div className="card-body">
                            <h4 className="card-title">{product.name}</h4>
                            <h6 className="card-subtitle mb-2">Description: { product.description}</h6>
                            <p className="card-text">
                                Price: ${product.price}
                        </p>
                        <button className="btn btn-danger" onClick={(e) => deleteProduct(e, product._id)}>Delete Product</button>
                        <Link to={`/products/edit/${product._id}`} className="btn btn-secondary mr-2 ml-2">Edit Product</Link>
                        <Link to={`/products/${product._id}`} className="btn btn-info">View Details</Link>
                        </div>
                    </div>
                })
            }
        </div>
    );
};


export default AllProducts;