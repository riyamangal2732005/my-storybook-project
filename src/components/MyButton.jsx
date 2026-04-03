import React from "react";
import { background } from "storybook/theming";

const MyButton = ({label, backgroundColor, variant = 'primary', disabled = false, onClick }) => {
    const getStyle = () => {
        const base = {padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer'};
        if(disabled)
            return { ...base, backgroundColor: '#ccc', color: '#666', cursor: 'not-allowed'};

        if(backgroundColor)
            return {...base, backgroundColor: backgroundColor, color: 'white'};
        if(variant === 'secondary')
            return {...base, backgroundColor: '#6c757d', color: 'white'};
        return { ...base, backgroundColor: '#007bff', color: 'white'};
    };
    return (
        <button style={getStyle()} onClick={onClick} disabled={disabled}>{label}</button>
    );
};

    

export default MyButton;