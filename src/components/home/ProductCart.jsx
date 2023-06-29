import React from 'react';
import { Link } from 'react-router-dom';
// import ReactStars from 'react-rating-stars-component';
import { Rating } from '@mui/material';

const ProductCart = ({ product }) => {
    const options = {
        value: product.ratings,
        readOnly: true,
        precision: 0.5,
        // size: 'large'
        // edit: false,
        // color: "rgba(20,20,20,0.1)",
        // activeColor: "tomato",
        // size: window.innerWidth < 600 ? 20: 25,
        // value: product.ratings,
        // isHalf: true
    };
    return (
        <Link className='productCard' to={`/product/${product._id}`}>
            <img src={product.images[0].url} alt={product.name} />
            <p>{product.name}</p>
            <div>
                <Rating {...options} />{" "}
                <span className="productCardSpan">
                    {" "}
                    ({product.numOfReviews} Reviews)
                </span>
            </div>
            <span>&#8377;{`${product.price}`}</span>
        </Link>
    )
}

export default ProductCart