import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';

const ProductListing = ()=>{
    const products = useSelector((state)=> state);
    const dispatch = useDispatch();

    const fetchProducts = async ()=>{
        const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
            console.log(err);
        })
        dispatch(setProducts(response.data));
    }

    React.useEffect(()=>{
        fetchProducts();
    },[]);
    
    return(
        <div className="ui grid container">
           <ProductComponent />
        </div>
    );
};

export default ProductListing;