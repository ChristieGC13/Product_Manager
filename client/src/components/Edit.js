import React , {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const Edit = (props) => {
    const [inputs, setInputs] = useState({
        name:"",
        price:"",
        description:""
    })
    const [errors, setErrors] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => {
                console.log(res)
                setInputs(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const onChange = e => {
        setInputs({
        ...inputs,
        [e.target.name]: e.target.value
    })
}
const onSubmit = e => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/products/${props.id}`, inputs)
        .then(res => {
            console.log(res)
            if(res.data){
                navigate("/")
            }else{
                setErrors(res.data)
            }
        })
        .catch(err=> console.log(err))
}

    return (
        <div className="container">
            <Link to="/" className="btn btn-outline-info float-right mr-5">Home</Link>
            <h2 className="mt-5">Edit product</h2>
            <form onSubmit={ onSubmit }>
                <p>
                    <label htmlFor="name">Name</label>
                    <input className="form-label" onChange={ onChange} type="text" name="name" value={inputs.name}/>
                    <p className="text-danger">{errors.name? errors.name.message: ""}</p> 
                </p>
                <p>
                    <label htmlFor="price">Price</label>
                    <input className="form-label" onChange={onChange} type="number" name="price" value={inputs.price} />
                    <p className="text-danger">{errors.price? errors.price.message: ""}</p>
                </p>
                <p>
                    <label htmlFor="description">Description</label>
                    <input className="form-label" onChange={onChange} type="text" name="description" value={inputs.description} />
                </p>
                <button type="submit">Update Product</button>
            </form>
        </div>
    );
};

export default Edit;