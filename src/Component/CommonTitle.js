import React from 'react';

const CommonTitle = ({ children }) => {
    return (
        <h3 className='text-primary text-3xl font-bold'>
            {children}
        </h3>
    );
};

export default CommonTitle;