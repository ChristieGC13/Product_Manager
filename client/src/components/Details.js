import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Details = (props) => {

    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => {
                console.log(res)
                setProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteProduct = (e, productId) => {
        console.log("deleting this product", productId)
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(response => {
                console.log(response)
                navigate("/")
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>{product.name}</h1>
            {product == null ? <h1>no matching products here</h1> :
                <>
                    <p>Description: {product.description}</p>
                    <p>Price : {product.price} </p>
                    <button onClick={(e) => deleteProduct(e, product._id)}>Delete Product</button>
                </>
            }

        </div>
    )
};


export default Details;