import React from 'react';
import './Button.css'

const Button = ({children}) => {
    // console.log(props);
    // const {children} = props;
    return (
        <div className='text-center mt-3'>
           <button className="btn btn-success">{children}</button> 
        </div>
    );
};

export default Button;