/* eslint-disable react/prop-types */
// import React from 'react';

const Button = ({text}) => {
    return (
        <button className="bg-third btn text-background border-none font-medium transition-colors duration-300">{text}</button>
    );
};

export default Button; 