import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = ()=>{
    const products = useSelector((state)=> state.allProducts.products);
    const renderList = products.map((product)=>{
        const {id, title, image, price, category} = product;
        return(
            <Link to={`/product/${id}`}>
        <div className="four column wide" key={id}>
            <div className="ui link cards">
            <div className="card">
            <div className="image">
                <img src={image} alt={title} />
            </div>
            <div className="content">
            <div className="header">{title}</div>
            <div className="meta price">${price}</div>
            <div className="meta">{category}</div>
            </div>
            </div>
            </div>
        </div>
        </Link>
        );
    });
    return(
        <>
            {renderList}
        </>
    );
};

export default ProductComponent;