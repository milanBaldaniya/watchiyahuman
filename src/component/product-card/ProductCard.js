import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';

const ProductCard = (props) => {
    const { product } = props
    const { name, price, image, description } = product;
    return (
        <div class="product-card">
            {/* <div class="badge">Hot</div> */}
            <div class="product-tumb">
                <img src={image} alt="" />
            </div>
            <div class="product-details">
                {/* <span class="product-catagory">MENS WATCH</span> */}
                <h4><a href="">{name}</a></h4>
                <p>{description}</p>
                <div class="product-bottom-details">
                    <div class="product-price"><span>Price:</span> ₹ {price}</div>
                </div>
                <div class="product-links">
                    {/* <a href=""><i class="fa fa-heart"></i></a>
                    <a href="">ORDER NOW<FaWhatsapp fontSize="1.5em" /></a> */}
                    <Button variant='dark' className='w-100 text-white border-0 custom-btn rounded-0'>ORDER NOW<FaWhatsapp className='ms-2' fontSize="1.5em" /></Button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;