import React from "react";

const ProductCard = ({ title, price, imageUrl, description, textColor = '#333' }) => {
    const cardStyle = {
        width: '250px',
        border: '1px solid #ddd',
        overflow: 'hidden',
        fontFamily: 'sans-serif',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'transparent',
    };

    return (
        <div style={cardStyle}>
            <img src={imageUrl} alt={title} style={{width: '100%', height: '200px', objecFit: 'cover'}}/>
            <div style={{padding: '15px'}}>
                <h3 style={{margin: '0 0 10px 0', color: `${textColor}`}}>{title}</h3>
                <p style={{fontSize: '14px', color: '#666', color: `${textColor}`, opacity: 0.9}}>{description}</p>
                <p style={{fontWeight: 'bold', color: `${textColor}`}}>{price}</p>
                <button style={{ width: '100%', padding: '8px', cursor: 'pointer'}}>View Details</button>
            </div>
        </div>
    );
};

export default ProductCard;