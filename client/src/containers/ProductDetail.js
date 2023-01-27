import React, { useEffect } from "react";
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";

const ProductDetail = async ()=>{
    const product = useSelector((state)=>state.product)
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(product);

        const fetchProductDetail = async ()=>{
            const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
                console.log(err);
            });

            dispatch(selectedProduct(response.data));
    };

    useEffect(()=>{
        if(productId && productId !== "")
        fetchProductDetail();
    },[productId]);
    
    return(
        <div>
            <h1>ProductDetail</h1>
        </div>
    );
};

export default ProductDetail;