import React from 'react';
// import './MyInput.css';

const MyInput = ({ placeholder, label, labelColor = 'black' }) => {
    const containerStyle = {
        display : 'flex',
        flexDirection: 'column',
        gap: '8px',
        marginBottom: '15px',
        fontFamily: 'sans-serif'
    };

    const labelStyle = {
        fontSize: '14px',
        fontWeight: 'bold',
        color: labelColor
    };
    return (
        <div style={containerStyle}>
            <label style={labelStyle}>{label}</label>
            <input type="text" placeholder={placeholder} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc'}}/>
        </div>
    );
};

export default MyInput;