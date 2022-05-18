import React from 'react';

const CommonSubTitle = ({ children }) => {
    return (
        <h3 className='text-secondary text-xl font-bold'>
            {children}
        </h3>
    );
};

export default CommonSubTitle;